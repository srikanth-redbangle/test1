import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {
  LineHeading,
  // CountUp,
  RevealText,
  SolutionsSection,
  VideoModal,
  ArticleSection,
  TrustedBrandsSection,
  RollupNumber,
  Marquee,
  StatsSection,
} from '@/components/shared'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import WorkSlider from '@/components/sliders/WorkSlider'
import styles from '@/styles/home.module.scss'
import { SEO } from '@/components/shared/SEO'

import { schemaHome } from '@/components/schema/homeSchema'
import { getLatestArticle, getPlaySliderData } from '@/utils/graphql'
import { formateBlogPostFunc } from '../utils/formate'
import Script from 'next/script'

gsap.registerPlugin(ScrollTrigger)

export default function Home({ playWorks, articles,setisPopupOpen }) {
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const containerRef = useRef()
  const insetRef = useRef()
  const pinSection = useRef()
  const containerMbRef = useRef()
  const heroSection = useRef()

  const refreshScrolltriggers = () => {
    setTimeout(() => {
      ScrollTrigger.refresh()
      console.log('refreshScrolltriggers')
    }, 100)
  }
  // console.log(articles)
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(max-width:768px)', () => {
      // const istyles = containerMbRef.current?.getBoundingClientRect()
      // const nstyles = insetRef.current?.getBoundingClientRect()

      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2,
          start: '50% 40%',
          end: '80% 20%',
          trigger: heroSection.current,

          // markers: true,
        },
      })
      const getY = () => {
        const mEl = 72 + 50 + 72
        const titleElm = containerMbRef.current.getBoundingClientRect().height

        const y = mEl + titleElm
        return y
      }
      tl
        // .fromTo(
        //   insetRef.current,
        //   {
        //     // clipPath: () => {
        //     //   const istyles = containerMbRef.current?.getBoundingClientRect()
        //     //   const nstyles = insetRef.current?.getBoundingClientRect()
        //     //   const st = `inset(${0}px ${
        //     //     window.innerWidth - istyles.right - 18
        //     //   }px ${nstyles.height - istyles.height}px ${istyles.left}px)`
        //     //   return st
        //     // },
        //     scale: 0.3,
        //     y: () => {
        //       return -1 * getY()
        //     },
        //     x: 20,
        //   },
        //   {
        //     scale: 1,
        //     y: 0,
        //     x: 0,
        //   }
        // )
        .fromTo(
          '.content-showreel',
          { opacity: 1, y: 0, duration: 0.05 },
          { opacity: 0, y: () => getY() },
          0
        )
        .fromTo('.play-circle, .play-icon', { opacity: 0.5 }, { opacity: 1 })

      return () => {
        tl.kill()
      }
    })
    mm.add('(min-width:768px)', () => {
      // const istyles = containerRef.current?.getBoundingClientRect()
      // const nstyles = insetRef.current?.getBoundingClientRect()
      // const diffContainer = Math.min(istyles.left - nstyles.left, 0)
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2,
          start: '3% 10%',
          end: '60% 0%',
          trigger: heroSection.current,
          // onUpdate: (self) => console.log('progress:', self.progress),
          // invalidateOnRefresh: true,
          // pin: insetRef.current,
          // markers: true,
        },
      })
      // const st = `inset(${istyles.top - 85 - 120}px ${
      //   window.innerWidth - istyles.right - 18
      // }px ${nstyles.height - istyles.height}px ${istyles.left}px)`
      const getY = () => {
        const mEl =
          document.querySelector(`.heroMarquee`).getBoundingClientRect()
            .height +
          20 + //padding
          128 + // marquee margin
          96
        const titleElm = document
          .querySelector(`.${styles.title}`)
          .getBoundingClientRect().height

        const y = mEl + 2 * titleElm
        return y
      }

      tl.fromTo(
        insetRef.current,
        {
          // clipPath: () => {
          //   const istyles = containerRef.current?.getBoundingClientRect()
          //   const nstyles = insetRef.current?.getBoundingClientRect()
          //   const st = `inset(${istyles.top - 85 - 120}px ${
          //     window.innerWidth - istyles.right - 18
          //   }px ${nstyles.height - istyles.height}px ${istyles.left}px)`
          //   return st
          // },
          // width: '14%',
          width: () => {
            const cistyles = containerRef.current?.getBoundingClientRect()
            return cistyles.width
          },

          // maxWidth: '220px',
          y: () => -1 * getY(),
          // x: () => {

          //   return diffContainer
          // },
        },
        {
          // clipPath: 'inset(0px 0px 0px 0px)',
          width: '100%',
          // maxWidth: '5000px',
          y: 0,
          // x: 0,
          duration: 0.8,
          // onUpdate: () => {
          //   ScrollTrigger.refresh()
          // },
        }
      )
        .fromTo(
          '.web-vid',
          {
            x: () => {
              const istyles = containerRef.current?.getBoundingClientRect()
              const nstyles = insetRef.current?.getBoundingClientRect()
              const diffContainer = Math.min(istyles.left - nstyles.left, 200)
              return diffContainer
            },
          },
          { x: 0 },
          0
        )
        // .to(insetRef.current, {
        //   y: () => {
        //     const pstyles = pinSection.current?.getBoundingClientRect()
        //     return `${pstyles.height}px`
        //   },
        // })
        .fromTo(
          '.content-showreel',
          { opacity: 1 },
          { opacity: 0, y: () => getY(), duration: 0.01 },
          0
        )

      return () => {
        tl.kill()
      }
    })
    const resize = () => {
      gsap.matchMediaRefresh()
    }
    window.addEventListener('resize', resize)

    let singleLetterTimeline = gsap.timeline({
      ease: 'power2.out',
      repeat: -1,
    })

    singleLetterTimeline
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
          delay: 2,
        }
      )

      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 100,
        },
        '+=1'
      )
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
        },
        '+=2'
      )

    const letterTimeline = gsap.timeline()
    letterTimeline.to(
      `.${styles.rtol}, .${styles.ltor}`,
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 0.256,
        },
      },
      0
    )
    return () => {
      window.removeEventListener('resize', resize)
      letterTimeline.kill()
      mm.kill()
    }
  }, [])
  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }

  const heroHeightRef = useRef(0)

  useEffect(() => {
    const heightDiv = document.querySelector('.height-div').offsetHeight

    if (heroHeightRef.current === 0) {
      heroHeightRef.current = heroSection.current.offsetHeight
    }

    const heroHeightFunc = () => {
      if (window.innerWidth > 767) {
        heroSection.current.style.minHeight =
          heroHeightRef.current + heightDiv - 120 + 'px'
        ScrollTrigger.refresh()
      } else {
        // do nothing
      }
    }
    heroHeightFunc()
  }, [])

const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('open-popup'); // Replace 'section-id' with the ID of your section
        if (section && window.scrollY > section.offsetTop) {
          setisPopupOpen(true);
          setstopVisible(true)
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [stopVisible]);

  return (
    <>
      <SEO
        title="Red Bangle - Integrated Brand Content Agency | Creative Advertising Agency, Branded Content Strategy & Integrated Marketing Campaigns"
        description="Red Bangle is your go-to creative advertising agency for exceptional branded content & holistic marketing communication services. From compelling content strategy for b2c & b2b marketing communication to integrated marketing campaigns with creative branded content, our expert team elevates your brand with creative solutions. Discover how we can drive engagement and boost your brand's presence."
        url="www.redbangle.com"
      />

      <section
        className="bg-rb-mercury pt-12 md:pt-30 relative overflow-hidden"
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <h1>
            <div className={`flex h-fit md:gap-6 ${styles.title}`}>
              <span className={`text-rb-black flex ${styles.letterContainer}`}>
                {/* {[
                  { b: 'b', a: 'g' },
                  { b: 'r', a: 'l' },
                  { b: 'a', a: 'o' },
                  { b: 'n', a: 'b' },
                  { b: 'd', a: 'a' },
                  { b: <>&nbsp;</>, a: 'l' },
                ].map(({ b, a }, i) => (
                  <span className={styles.letterRoll} key={i}>
                    <span>{b}</span>
                    <span>{a}</span>
                  </span>
                ))} */}
                integrated
              </span>

              <div
                className={`content aspect-[1900/1000] origin-top ${styles.content} hidden md:block`}
                // onClick={onModalOpen}
                // data-rb-cursor
                // data-rb-cursor-type="play"
                ref={containerRef}
              >
                <div className="uppercase top-0 absolute -translate-y-full whitespace-nowrap text-rb-ironside-grey text-xs tracking-[-0.208px] flex items-center content-showreel opacity-0 md:top-[116px] invisible">
                  <span className="h-px w-12 bg-rb-ironside-grey block mr-3"></span>
                  SHOWREEL 2022
                </div>
              </div>
              <span style={{color:'red'}} className={styles.rtol}>brand</span>
            </div>
            <div className={`flex md:gap-12 ${styles.title}`}>
              <span className={styles.ltor}>content</span>
              <span className={styles.rtol}>AGENCY</span>
            </div>
          </h1>
          <div className="uppercase hidden mt-0 mb-2 whitespace-nowrap text-rb-ironside-grey text-sm tracking-[-0.208px]  items-center content-showreel opacity-0 invisible">
            <span className="h-px w-12 bg-rb-ironside-grey block mr-3"></span>
            SHOWREEL 2022
          </div>
          <div
            className={`content aspect-[1920/1080] origin-top relative ${styles.content} hidden`}
            // onClick={onModalOpen}
            ref={containerMbRef}
          ></div>
        </div>

        <div style={{ display: 'none' }}>
          <h2>Brand Content Production Agency</h2>
          <h2>Integrated Marketing Agency</h2>
          <h2>Holistic Marketing Agency</h2>
          <h2>Brand Strategy</h2>
          <h2>Content Production Agency</h2>
          <h2>Integrated Agency</h2>
          <h2>Creative Agency</h2>
          <h2>Digital Marketing Company</h2>
          <h2>Advertising Agency</h2>
          <h2>Brand Content</h2>
        </div>
        {/* <div
          className={`mt-23 mb-18 md:mt-32 md:mb-24 ${styles.heroMarquee} marquee-animation`}
        ></div> */}
        <div className="mt-15 mb-15 md:mt-32 md:mb-24 heroMarquee text-rb-mercury">
          <Marquee duration={25}>
            <div className="uppercase outline-text-inherit text-[26px] md:text-[68px] h-[50px] md:h-24 flex mr-3.5 md:mr-10.5 items-center">
              <span className="opacity-60">
                CRAFTING STORIES AND CONVERSATIONS FOR BRANDS
              </span>
              <svg
                width="20"
                height="37"
                viewBox="0 0 20 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block ml-10.5"
              >
                <path
                  d="M14.82 0.599998H19.76L5.408 37H0.468L14.82 0.599998Z"
                  fill="#EF001C"
                />
              </svg>
              <svg
                width="11"
                height="21"
                viewBox="0 0 11 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block md:hidden ml-3.5"
              >
                <path
                  d="M7.98 0.899999H10.64L2.912 20.5H0.252L7.98 0.899999Z"
                  fill="#EF001C"
                />
              </svg>
            </div>
          </Marquee>
        </div>
        <div
          className="w-full sticky bottom-0 left-0 select-none md:aspect-[1920/1080]   md:origin-top mx-auto"
          onClick={onModalOpen}
          data-rb-cursor
          data-rb-cursor-type="play"
          ref={insetRef}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            // src="/img/home/home-video.mp4"
            // src="/img/home/showreel-1.mp4"
            src="/img/home/home.mp4"
            poster="/img/home/hero-poster.webp"
            // poster="/img/home/home-video-p.png"
            className="w-full hidden md:block web-vid"
            width="1920"
            height="1080"
          ></video>

          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/home/home.mp4"
            poster="/img/home/hero-poster.webp"
            // src="/img/home/home-video-mb.mp4"
            // poster="/img/home/home-video-p.png"
            className="w-[120%] max-w-[120%] block md:hidden"
            width="1920"
            height="1080"
            // width="720"
            // height="406"
          ></video>

          <div className=" absolute play-circle md:hidden opacity-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-rb-black/50 rounded-full w-13 h-13"></div>
          <svg
            className="block play-icon absolute md:hidden opacity-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.570972 0.669922L8.07097 5.00005L0.570971 9.33018L0.570972 0.669922Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <StatsSection
        tag="WE ARE GLOBAL"
        className="pt-18 md:pt-30 pb-9 md:pb-15"
      />

      <section className="bg-white py-9 md:py-15">
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">WHO WE ARE</LineHeading>
          <div className="max-w-[1046px]">
            <RevealText text="Strategists, writers, designers, filmmakers, and technologists redefining content creation for ambitious brands" />
          </div>
          <Button
            href="/about"
            className="font-bold mt-11 md:mt-16 w-full md:w-auto !inline-flex"
            suffix={<LineArrow hover />}
          >
            Learn more
          </Button>
        </div>
      </section>
      <TrustedBrandsSection className="bg-white pt-9 pb-18 md:pb-30 md:pt-15" />
      <SolutionsSection />
      <div id='featured-work' className="overflow-hidden bg-white py-18 md:pt-30 md:pb-15">
        <div className="container" id="work-section">
          <LineHeading className="mb-6 md:mb-9">FEATURED WORK</LineHeading>
          <h3 className="text-title md:text-title-md mb-12 md:mb-14 font-everett max-w-[778px] ">
            Take a look at work that worked
          </h3>
          <WorkSlider playWorks={playWorks} />
        </div>
      </div>
      <div id='open-popup' className='h-[1px] bg-transparent'/>
      <ArticleSection articles={articles} className="md:pt-15 pb-18 md:pb-30" />
      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="862303910"
      >
        <div className="relative max-w-[80%] w-full">
          {/* <button
            aria-label="close modal"
            onClick={() => setHerovideoOpen(false)}
            className="w-6 h-6 absolute top-3.5 right-3.5 bg-white/10 z-[1] flex items-center justify-center rounded-full"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.00098L1 9.00098"
                stroke="white"
                strokeWidth="1.30909"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1.00098L9 9.00098"
                stroke="white"
                strokeWidth="1.30909"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button> */}
          <video
            autoPlay
            muted
            loop
            playsInline
            // src="/img/home/showreel-full.mp4"
            src="/img/home/home.mp4"
            className="w-full"
            width="1920"
            height="1080"
          ></video>
          {/* <iframe
            src="https://player.vimeo.com/video/862303910?h=1383313c75&autoplay=1&title=0&byline=0&portrait=0"
            className="w-full aspect-video h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
      </VideoModal>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaHome)}
      </Script>
    </>
  )
}
export async function getStaticProps() {
  const {
    status,
    data: { works },
  } = await getPlaySliderData()
  // console.log(status)
  const playWorks = works?.nodes?.map((n) => ({
    key: n?.slug,
    type: 'play',
    title: n?.title,
    video: {
      src: n?.workDetails?.previewLink?.mediaItemUrl ?? '',
      width: n?.workDetails?.previewLink?.mediaDetails?.width ?? '',
      height: n?.workDetails?.previewLink?.mediaDetails?.height ?? '',
    },
    // href: `/work/play?work=${n?.slug}`,
    href: `?work=${n?.slug}`,
  }))
  const { data } = await getLatestArticle()
  return {
    props: {
      playWorks,
      articles: data?.posts?.nodes?.map(formateBlogPostFunc),
    },
  }
}
