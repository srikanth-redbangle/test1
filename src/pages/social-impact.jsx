import React, { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { LineHeading, SEO, Testimonials, VideoModal } from '../components/shared'
import { Swiper, SwiperSlide } from 'swiper/react'
import { csrSchema } from '@/components/schema/csr-schema'
import { ArrowButtonSlider } from '@/components/sliders/ArrowButtonSlider'
import { SliderButton } from '@/components/ui'

const videoList = [
  {
    id: 0,
    title: 'Industree ',
    youtubeThumbnail: '/img/csr/industree.webp',
    alt: 'Industree',
    url: 'https://www.youtube.com/embed/4pxJSzRnH28?si=aCfgT9BwRNn74ZjS&autoplay=1',
  },
  {
    id: 1,
    title: 'Frontier Markets',
    youtubeThumbnail: '/img/csr/frontier-markets.webp',
    alt: 'Frontier Markets',
    url: 'https://www.youtube.com/embed/OGTd7CntCJ8?si=vn2fXJjRT7rwKSeL&autoplay=1',
  },
  {
    id: 2,
    title: 'Garv Toilets',
    youtubeThumbnail: '/img/csr/garv-toilets.webp',
    alt: 'garv toilets',
    url: 'https://www.youtube.com/embed/GrWVORRgE2w?si=ZHGw4ZhnXjYtByYc&autoplay=1',
  },
  {
    id: 3,
    title: 'India Hikes',
    youtubeThumbnail: '/img/csr/india-hikes.webp',
    alt: 'India Hikes',
    url: 'https://www.youtube.com/embed/ZcBEya8vjhM?si=tIfoC7qH-tyRWY7a&autoplay=1',
  },
  // {
  //   id: 4,
  //   title: 'Seva Mob',
  //   youtubeThumbnail: '/img/csr/ep-128.webp',
  //   url: 'https://sevamob.com/&autoplay=1',
  // },
  {
    id: 5,
    title: 'Menstrual Educator',
    youtubeThumbnail: '/img/csr/menstrual-educator.webp',
    alt: 'Menstrual Educator',
    url: 'https://www.youtube.com/embed/yrDCYypBW2o?si=WWum5PBdtC7tJ95l&autoplay=1',
  },
  {
    id: 6,
    title: 'iKure',
    youtubeThumbnail: '/img/csr/ikure.webp',
    alt: 'ikure',
    url: 'https://www.youtube.com/embed/WAVkQAKMMIA?si=vLw0FJpTHpFTen0C&autoplay=1',
  },
  {
    id: 7,
    title: 'Pollinate Energy',
    youtubeThumbnail: '/img/csr/pollinate-energy.webp',
    alt: 'pollinate energy',
    url: 'https://www.youtube.com/embed/3PpzG7Qd8gA?si=Y3lD_CPZF2SLCbR5&autoplay=1',
  },
  {
    id: 8,
    title: 'Dream a Dream',
    youtubeThumbnail: '/img/csr/dream-a-dream.webp',
    alt: 'dream a dream',
    url: 'https://www.youtube.com/embed/u7oeKM-6SWM?si=YWUfzLw0knpiBdcQ&autoplay=1',
  },
  {
    id: 9,
    title: 'Enable India',
    youtubeThumbnail: '/img/csr/enable-india.webp',
    alt: 'enable India',
    url: 'https://www.youtube.com/embed/O-Nw-ZnCcco?si=epEZHW0KAQ8NAbGs&autoplay=1',
  },
  {
    id: 10,
    title: 'Afforest',
    youtubeThumbnail: '/img/csr/afforest.webp',
    alt: 'The Afforestter',
    url: 'https://www.youtube.com/embed/BVoifmZCfNc?si=Vt3TWvLs25nxJV-Z&autoplay=1',
  },
]

const TestimonialData = [
  {
    key: 0,
    quote:
      'What can I say about Chai with Lakshmi? Firstly it was a pleasure talking to Lakshmi. She created space for a genuine conversation in a high quality production setting that made people sit up and notice! The subsequent viewership helped many people to truly know the substance that Enable India stands for! This was in our early days and was pivotal in our journey to where we have reached today! For me what stands out is that she is ahead of her times to give social innovators such spaces to communicate..',
    name: 'Shanti Raghavan',
    designation: 'Founder',
    company: 'Enable India',
    image: {
      srcSet:
        '/img/testimonials/Shanti.jpg 533w, /img/testimonials/Shanti.jpg 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 1,
    quote:
      'My interview with you helped me to articulate my scattered thoughts and make a roadmap for the future. Though we were in a super early stage, you gave us a chance and treated me as if I had already made it big. We spoke about the larger mission, going global, institutionalizing our work, none of it was done, but it was up there in our thoughts. Now I watch our interaction and realize that you helped me articulate and later manifest things that are happening right now. Thanks a lot again for giving me that opportunity in the early days of Afforestt.',
    name: 'Shubhendu Sharma',
    designation: 'Founder',
    company: 'Afforestt',
    image: {
      srcSet:
        '/img/testimonials/shubhendu-sharma.jpg 533w, /img/testimonials/shubhendu-sharma.jpg 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 2,
    quote:
      `I am deeply thankful for the opportunity to have been featured on The Lakshmi Rebecca Show. The interview was not just a chance to talk about Frontier Markets; it was an authentic reflection of my journey and the passion driving our mission. Lakshmi's storytelling captured the heart of our work, resonating with viewers in a profound way. The episode has been invaluable in raising awareness about Frontier Markets and fostering connections with a much wider audience. I am truly grateful for the platform and highly recommend The Lakshmi Rebecca Show to fellow changemakers seeking to share their story.`,
    name: 'Ajaita Shah',
    designation: 'Founder',
    company: 'Frontier Markets',
    image: {
      srcSet:
        '/img/testimonials/Ajaita-Shah.jpg 533w, /img/testimonials/Ajaita-Shah.jpg 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

export const CSRPage = () => {
  const [youTubeUrl, setYouTubeUrl] = useState(null)
  const [herovideoOpen, setHerovideoOpen] = useState(false)

  const onModalOpen = (e, url) => {
    setHerovideoOpen(true)
    setYouTubeUrl(url)
    e.stopPropagation()
  }

  useEffect(() => {
    if (!herovideoOpen) {
      setYouTubeUrl(null)
    }
  }, [herovideoOpen])

  const sliderRef = useRef()

  return (
    <>
      <SEO
        title="Inspiring Social Impact with Creative Ad Campaigns | Red Bangle"
        description="Take a look at Red Bangle's powerful social impact videos content & brand communicaton. We create compelling content that drives positive change in our environment and communities."
        url="www.redbangle.com/social-impact"
      />
      <section className="bg-white py-15 md:py-30">
        <div className="container">
          <h1 className="text-[56px] tracking-[-1px] md:text-[72px] lg:text-[120px] uppercase leading-[100%] md:tracking-[-1.92px] font-everett font-medium">
            CONTENT FOR SOCIAL IMPACT
          </h1>
          <p className="text-sm md:text-accordion-large font-semibold max-w-[1153px] mt-4 md:mt-20">
            While we are busy supporting your growth with strategic brand
            content, we also make time to inspire social change through digital
            content. Take a look at our social impact project.
          </p>

          <div style={{ display: 'none' }}>
            <h2>Stories Of Social Impact</h2>
            <h2>Impact Entrepreneurship</h2>
            <h2>Lakshmi Rebecca Show</h2>
            <h2>Talk Show</h2>
            <h2>Volunteering</h2>
            <h2>Interviewing Entrepreneurs</h2>
            <h2>Volunteering Work</h2>
            <h2>ESG</h2>
            <h2>Social Responsibility</h2>
            <h2>CSR</h2>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-rb-service-grey py-15 md:pt-0 md:pb-24">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="block md:hidden px-4">
              <LineHeading className="mb-6 md:mb-9">
                meet the showstopper
              </LineHeading>
              <h3 className=" text-title md:text-title-md font-everett font-medium mb-6 md:mb-8">
                The Lakshmi Rebecca&nbsp;Show
              </h3>
            </div>
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/img/csr/lakshmi_2x.webp"
                width="1416"
                height="1580"
              />
              <img
                src="/img/csr/lakshmi.webp"
                alt="Lakshmi Rebecca"
                width="708"
                height="790"
                className="w-full"
              />
            </picture>
          </div>
          <div className="w-full md:w-1/2 pt-12 md:pt-0 px-4 md:pl-14 max-w-[586px]">
            <div className="hidden md:block">
              <LineHeading className="mb-6 md:mb-9">
                Storytelling for change
              </LineHeading>
              <h3 className=" text-title md:text-title-md font-everett font-medium mb-6 md:mb-8">
                The Lakshmi Rebecca&nbsp;Show
              </h3>
            </div>
            <p className="text-lg text-rb-black/80">
              Positive social change is a shared goal at Red Bangle. We believe
              that a good, true story can inspire a hundred more. That’s why
              we’ve been creating an inspiring YouTube series on social
              entrepreneurs in India. Hosted by Lakshmi Rebecca (Co-founder, Red
              Bangle), the series features handpicked stories of sustainable,
              scalable and proven impact businesses. We invest up to a month in
              crafting each episode to bring you an engaging, information-filled
              and moving story of the business, its beneficiaries and the
              entrepreneur. The Lakshmi Rebecca Show has over 10Mn views across
              platforms and is funded by Red Bangle.
            </p>
          </div>
        </div>
        <div className="bg-white py-16 md:py-24 ">
          <div className="container">
            <div className="flex gap-6 justify-between mb-10">
              <div className="flex-1 text-xl md:text-4xl font-medium tracking-[-0.8px] md:tracking-[-1.44px] font-everett">
                Catch Some Inspiration
              </div>

              <div className="">
                <SliderButton
                  left
                  onClick={() => {
                    sliderRef.current.slidePrev()
                  }}
                />
                <SliderButton
                  className="ml-1"
                  onClick={() => {
                    sliderRef.current.slideNext()
                  }}
                />
              </div>
            </div>

            <Swiper
              onSwiper={(swiper) => (sliderRef.current = swiper)}
              spaceBetween={12}
              slidesPerView={1}
              className="swiper-overflow-visible"
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
            // onSwiper={(swiper) => (sliderRef.current = swiper)}
            >
              {videoList.map(({ id, title, url, youtubeThumbnail, alt }) => (
                <SwiperSlide key={id}>
                  <button
                    data-rb-cursor
                    data-rb-cursor-type="play"
                    onClick={(e) => onModalOpen(e, url)}
                    className="w-full block"
                  >
                    <div className="h-[240px] overflow-hidden mb-4 relative">
                      {/* <div className=" absolute top-4 left-4 border border-white text-white rounded-full py-2 px-4">
                      EP 148
                    </div> */}
                      <img
                        src={youtubeThumbnail}
                        className="w-full h-full object-cover"
                        alt={alt || ''}
                      />
                    </div>

                    <h3 className="font-everett text-base md:text-2xl font-medium">
                      {title}
                    </h3>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            {youTubeUrl && (
              <VideoModal
                youtubeVideo={youTubeUrl}
                open={herovideoOpen}
                setOpen={setHerovideoOpen}
              >
                <iframe
                  className="youtube-iframe w-full aspect-video max-w-[95%] md:max-w-[80%]"
                  src="https://www.youtube.com/embed/4pxJSzRnH28?si=aCfgT9BwRNn74ZjS"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </VideoModal>
            )}
          </div>
        </div>
        <Testimonials
          title={'WHAT GUESTS SAY'}
          className="py-7.5 md:py-15"
          testimonialData={TestimonialData}
          type="semi"
        />
      </section>


      <section className="py-16 md:py-28 overflow-hidden hidden">
        <div className="container">
          <h2 className="text-title md:text-title-md mb-10 font-everett md:mb-18">
            Measuring our Social Impact
          </h2>

          <Swiper
            spaceBetween={12}
            slidesPerView={1.2}
            className="swiper-overflow-visible"
            breakpoints={{
              768: {
                slidesPerView: 2.1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 24,
              },
            }}
          // onSwiper={(swiper) => (sliderRef.current = swiper)}
          >
            {[
              {
                id: 0,
                title: 'Promoting Girl Education',
                date: 'June 20, 2023',
                image: 'girl-education.jpg',
                alt: 'Girl Education'
              },
              {
                id: 1,
                title: 'Community Health Camps',
                date: 'Jan 13, 2023',
                image: 'community-health-camps.jpg',
              },
              {
                id: 2,
                title: 'Sustainable Healthcare P',
                date: 'Jan 15 , 2023',
                image: 'sustainable-healthcare.jpg',
              },
            ].map(({ id, title, date, image }) => (
              <SwiperSlide key={id}>
                <div className="border border-black/10">
                  <div className="p-6">
                    <p className="text-lg opacity-60 mb-2">{date}</p>

                    <h3 className="font-everett font-medium text-xl md:text-3xl tracking-[-1.12px]">
                      {title}
                    </h3>
                  </div>

                  <div className="h-[175px] md:h-[424px] overflow-hidden">
                    <img
                      src={`/img/csr/${image}`}
                      className="w-full h-full object-cover"
                      alt={title || ""}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(csrSchema)}
      </Script>
    </>
  )
}

export default CSRPage
