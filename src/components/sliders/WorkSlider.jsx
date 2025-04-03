import { cx } from 'class-variance-authority'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useFilterObserver } from '@/hooks'
import { useRouter } from 'next/router'
import {
  DropdownFilter,
  DropdownList,
  VideoMetaModal,
} from '@/components/shared'
import { LineArrow } from '@/components/icons'
import { Button, SliderButton } from '@/components/ui'
import { useAppDispatch, refreshCursor } from '@/context'
import { useLenis } from '@studio-freight/react-lenis'
import { ArrowButtonSlider } from './ArrowButtonSlider'
import { getPlayWorkDetails } from '@/utils/graphql'
gsap.registerPlugin(ScrollTrigger)

const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
}

const WORK_TYPES = [
  {
    text: 'Create',
    value: 'create',
  }
]
const allWorks = [
  {
    key: 1,
    type: 'create',
    title: 'L74 Cider',
    image: '/img/works/l74-placeholder.jpg',
    alt: 'Trip Different with L74 Cider',
    thumbnail: {
      src: '/img/works/l74-placeholder.jpg',
      width: '606',
      height: '874',
    },
    href: '/work/l74-case-study'
  },
  {
    key: 2,
    type: 'create',
    title: 'Indeed',
    image: '/img/works/indeed_homepage_thumbnail.jpg',
    alt: 'Indeed',
    thumbnail: {
      src: '/img/works/indeed_homepage_thumbnail.jpg',
      width: '606',
      height: '874',
    },
    href: '/work/create/indeed-case-study'
  },
  {
    key: 3,
    type: 'create',
    title: 'Taneira',
    image: '/img/works/taneira_homepage.jpg',
    alt: 'Taneira',
    thumbnail: {
      src: '/img/works/taneira_homepage.jpg',
      width: '606',
      height: '874',
    },
    href: '/work/project-loom',
  },
  {
    key: 4,
    type: 'create',
    title: 'METRO WHOLESALE',
    image: '/img/works/metro-wholesale.jpg',
    alt: 'metro wholesale ad',
    video: {
      poster: '/img/works/metro-wholesale.jpg',
      src: '/img/works/metro-wholesale.mp4',
      width: '606',
      height: '874',
    },
    href: '/work/create/metro-wholesale-case-study',
  },
  {
    key: 5,
    type: 'create',
    title: 'MYGATE',
    image: '/img/works/heros-mygate.jpg',
    alt: 'heros at mygate ad',
    video: {
      poster: '/img/works/heros-mygate.jpg',
      src: '/img/works/heros-mygate.mp4',
      width: '606',
      height: '874',
    },
    href: '/work/create/mygate-case-study',
  }
  // {
  //   key: 7,
  //   type: 'create',
  //   title: 'Swiggy Wali Jacket',
  //   // image: '/img/works/Swiggy_Wali_Jacket.png',
  //   // video: { src: '/img/works/wandm.webm', width: '3840', height: '2160' },
  //   video: {
  //     // poster: '/img/works/Swiggy_Wali_Jacket.png',
  //     src: '/img/works/Swiggy_Wali_Jacket.mp4',
  //     width: '606',
  //     height: '874',
  //   },
  //   href: '/work/create/swiggy-winter-jacket-case-study',
  // },
  // {
  //   key: 8,
  //   type: 'create',
  //   title: 'Swiggy New Year Earning',
  //   // image: '/img/works/Swiggy_NYE.png',
  //   // video: { src: '/img/works/wandm.webm', width: '3840', height: '2160' },
  //   video: {
  //     // poster: '/img/works/Swiggy_NYE.png',
  //     src: '/img/works/Swiggy_New_Year_Earning.mp4',
  //     width: '606',
  //     height: '874',
  //   },
  //   href: '/work/create/swiggy-extra-earning-case-study',
  // },
]
function WorkSlider({ playWorks = [] }) {
  const [modal, setModal] = useState(INIT_MODAL)
  const [toggle, setToggle] = useState(false)
  const [workType, setWorkType] = useState(WORK_TYPES[0].value)
  const sliderRef = useRef()
  const swiperRef = useRef()
  // const works = useMemo(() => [...allWorks, ...playWorks], [playWorks])
  const works = allWorks
  const isMounted = useRef(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 767
  const lenis = useLenis()
  const router = useRouter()
  const pathname = router.pathname

  const slides = works.filter((w) => w.type === workType)
  const { ref, ...filterProps } = useFilterObserver()

  // console.log('slides',playWorks)

  useEffect(() => {
    if (router.query?.work) {
      setModal((prev) => ({ ...prev, loading: true, open: true }))
      getPlayWorkDetails(router.query?.work)
        .then((data) => {
          if (data.status == 'success') {
            setModal((prev) => ({
              ...prev,
              loading: false,
              video: data?.data?.work,
            }))
          }
        })
        .catch((err) => {
          setModal(INIT_MODAL)
        })
    } else {
      setModal(INIT_MODAL)
    }
  }, [router.query])

  const dispatch = useAppDispatch()
  useEffect(() => {
    isMounted.current = true
    if (!isMobile) {
      const mm = gsap.matchMedia()
      mm.add('(min-width:768px)', () => {
        const slidesRef = [...sliderRef.current?.querySelectorAll('.group')]
        const tl = gsap.timeline({
          scrollTrigger: {
            scrub: false,
            trigger: sliderRef.current,
            // markers: true,
          },
        })
        gsap.set(slidesRef, { x: 200, opacity: 0 })
        tl.to(slidesRef, {
          x: 0,
          opacity: 1,
          stagger: {
            each: 0.124,
          },
        })
        return () => {
          tl.kill()
        }
      })
      return () => {
        isMounted.current = false
        try {
          mm.kill()
        } catch (error) { }
      }
    }
  }, [isMobile, toggle])

  return (
    <>
      {/* <div className="mb-17.5 gap-x-3 hidden md:flex">
        {WORK_TYPES.map(({ text, value }) => (
          <button
            data-rb-cursor
            // data-rb-cursor-blend={workType == value ? 'lighten' : 'initial'}
            // data-rb-cursor-blendclick={workType != value ? 'lighten' : ''}
            // data-state="open"
            data-rb-cursor-state={'invisible'}
            key={value}
            onClick={() => { 
              setWorkType(value) ;
              setToggle(!toggle)
            }}
            className={cx(
              'text-base px-6 py-3.5 rounded-6xl border transition-colors font-semibold',
              workType == value
                ? 'text-white bg-black border-rb-black/30'
                : 'text-black bg-white border-rb-black hover:bg-rb-black/10 hover:border-transparent'
            )}
          >
            {text}
          </button>
        ))}
      </div> */}
      <Swiper
        ref={sliderRef}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="swiper-overflow-visible hidden md:block"
        spaceBetween={24}
        slidesPerView={3}
        // onSlideChange={() => console.log('slide change')}
        onUpdate={(swiper) => {
          swiper.slideTo(0)
          if (isMounted.current) {
            dispatch(refreshCursor())
          }
        }}
      >
        {slides.map(({ key, title, href, video, type, thumbnail }, i) => (
          <SwiperSlide className="relative" key={key}>

            {thumbnail && (
              <a
                href={href}
                className="group block"
                data-rb-cursor
                data-rb-cursor-type='view'
              >
                <div className="aspect-[404/582] relative flex flex-col w-full h-full justify-end overflow-hidden">
                  <img {...thumbnail} className="h-full absolute max-w-[105%] left-1/2 -translate-x-1/2" />
                  <span className="relative z-[1] px-5 py-4.5 text-white text-reveal-small leading-normal bg-gradient-to-t from-[#000] via-[#000]/20  overflow-hidden uppercase mix-blend-normal ">
                    {title}
                  </span>
                </div>
              </a>
            )}

            {video && (
              <a
                href={href}
                className="group block"
                data-rb-cursor
                data-rb-cursor-type='view'
                onMouseEnter={(e) => {
                  e?.currentTarget?.querySelector('video')?.play()
                }}
                onMouseOut={(e) => {
                  const vid = e?.currentTarget?.querySelector('video')
                  if (vid) {
                    vid.pause()
                    vid.currentTime = 0
                  }
                }}
              >
                <div className="aspect-[404/582] relative flex flex-col w-full h-full justify-end overflow-hidden">
                  <video
                    {...video}
                    playsInline
                    muted
                    loop
                    className="h-full absolute max-w-[105%] left-1/2 -translate-x-1/2"
                  ></video>
                  <span className="relative z-[1] px-5 py-4.5 text-white text-reveal-small leading-normal bg-gradient-to-t from-[#000] via-[#000]/20  overflow-hidden uppercase mix-blend-normal ">
                    {title}
                  </span>
                </div>
              </a>
            )}

          </SwiperSlide>
        ))}
        <SwiperSlide className="relative">
          <a
            href={`/work/${workType}`}
            className="group block"
            data-rb-cursor
            data-rb-cursor-type="view"
          >
            <div className="aspect-[404/582] font-medium font-everett text-[44px] leading-[48px] bg-[#FF0000] text-white relative flex flex-col w-full h-full justify-center items-center overflow-hidden text-center">
              ALL
              <br />
              PROJECTS
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                className="block mt-6 flex-shrink-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.6996 33.6997C56.6379 32.7614 56.638 31.2402 55.6997 30.3019L40.4098 15.011C39.4716 14.0726 37.9503 14.0726 37.012 15.0109C36.0737 15.9491 36.0736 17.4704 37.0119 18.4087L50.6029 32.0006L37.011 45.5916C36.0726 46.5299 36.0726 48.0511 37.0109 48.9895C37.9491 49.9278 39.4704 49.9278 40.4087 48.9896L55.6996 33.6997ZM10.0006 34.4019L54.0006 34.4034L54.0008 29.5981L10.0008 29.5966L10.0006 34.4019Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
      <div className="hidden md:block mt-10">
        <SliderButton
          left
          onClick={() => {
            swiperRef.current.slidePrev()
          }}
        />
        <SliderButton
          className="ml-1"
          onClick={() => {
            swiperRef.current.slideNext()
          }}
        />
      </div>

      {/* Mobile View  */}
      <div className="grid md:hidden grid-cols-1 gap-y-5" ref={ref}>
        {slides.map(({ key, title, href, video, thumbnail }) => (
          <div className="relative" key={key}>

            {thumbnail && (
              <a
                href={href}
                className="group block"
                data-rb-cursor
                data-rb-cursor-type='view'
              >
                <div className="aspect-[404/582] relative flex flex-col w-full h-full justify-end overflow-hidden">
                  <img {...thumbnail} className="h-full absolute max-w-[105%] left-1/2 -translate-x-1/2" />
                  <span className="relative z-[1] px-5 py-4.5 text-white text-reveal-small leading-normal bg-gradient-to-t from-[#000] via-[#000]/20  overflow-hidden uppercase mix-blend-normal ">
                    {title}
                  </span>
                </div>
              </a>
            )}

            {video && (
              <a
                href={href}
                className="group block"
                data-rb-cursor
                data-rb-cursor-type= 'view'
                onMouseEnter={(e) => {
                  e?.currentTarget?.querySelector('video')?.play()
                }}
                onMouseOut={(e) => {
                  const vid = e?.currentTarget?.querySelector('video')
                  if (vid) {
                    vid.pause()
                    vid.currentTime = 0
                  }
                }}
              >
                <div className="aspect-[404/582] relative flex flex-col w-full h-full justify-end overflow-hidden">
                  <video
                    {...video}
                    autoPlay
                    playsInline
                    muted
                    loop
                    className="h-full absolute max-w-[105%] left-1/2 -translate-x-1/2"
                  ></video>
                  <span className="relative z-[1] px-5 py-4.5 text-white text-reveal-small leading-normal bg-gradient-to-t from-[#000] via-[#000]/20  overflow-hidden uppercase mix-blend-normal ">
                    {title}
                  </span>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
      {/* <DropdownFilter
        fade
        text={WORK_TYPES.find((w) => w.value === workType).text}
        {...filterProps}
      >
        <div className="fixed bottom-10.5 left-1/2 -translate-x-1/2 max-w-max">
          <DropdownList
            className="w-[270px] whitespace-nowrap"
            options={WORK_TYPES}
            onClose={filterProps.onClose}
            onChange={(o) => {
              setWorkType(o.value)
              if (typeof window !== 'undefined' && window.innerWidth > 767) {
                lenis?.scrollTo('#work-section')
              }
            }}
            selected={workType}
          />
        </div>
      </DropdownFilter> */}
      <Button
        href={`/work/${workType}`}
        className="w-full md:hidden mt-[30px]"
        suffix={<LineArrow />}
      >
        EXPLORE ALL
      </Button>
      <VideoMetaModal
        loading={modal.loading}
        open={modal.open}
        video={modal.video}
        setOpen={(v) => {
          router.push(`${pathname}`, undefined, { shallow: true })
          setModal((m) => ({ ...m, open: v }))
        }}
      />
    </>
  )
}

export default WorkSlider