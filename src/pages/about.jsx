import { LineArrow } from '@/components/icons'
import { aboutSchema } from '@/components/schema/about-schema'
import {
  ArticleSection,
  Marquee,
  WorkListHeroSection,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import { AboutNewsRoom } from '@/components/shared/sections/ArticleSection/AboutNewsRoom'
// import  AboutNewsRoom  from '@/components/shared/sections/ArticleSection/AboutNewsRoom'
import { Button } from '@/components/ui'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

const WhoWeAre = () => {
  return (
    <>
      <SEO
        title="Best Branded Content, Marketing Content for Holistic Marketing Communication & Creative Ad Campaigns | About Red Bangle - Creative Advertising Agency"
        description="Learn about Red Bangle, a leading creative content production, content development and integrated digital campaign marketing agency. Discover our journey, values, and commitment to delivering impactful content for brands in India, USA, UK, UAE, AUS & worldwide."
        url="www.redbangle.com/brand-content-production-agency"
      />


      <section className="py-14 md:py-23  overflow-hidden bg-rb-mercury text-rb-black ">
        <Marquee duration={20}>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            WHO WE ARE
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/who-we-are/about-pill.webp"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            WHO WE ARE
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/who-we-are/about-pill-2.webp"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
        </Marquee>
        <div className="container">
          <div className="max-w-[1100px] w-full text-base leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:mt-16 text-rb-black">
            We are a fast-growing agency that&apos;s passionate about crafting
            bold strategies, unique campaigns and fresh content for brands in
            India.
          </div>
        </div>
      </section>

      <section className="py-15 md:py-30">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <h1 className="font-everett text-2xl md:text-7xl mb-8">
                What do we do?
              </h1>

              <p className="text-sm md:text-xl mb-0">
                We began as a technology-enabled, global film and video
                collaborative. In the past six years, we&apos;ve produced over
                4000 pieces of audio-visual content for 50 brands, across 25
                countries. Today, we have expanded to offer comprehensive
                end-to-end brand content solutions to businesses in India. Our
                growth is fueled by our talent in marketing, creativity and
                technology. <br /> <br />
                Be it a growth gap that we solve for or a digital campaign to
                drive seasonal sales - we&apos;ve got the knowhow and the
                experience.{' '}
                <span className="font-semibold">
                  Explore our services here:{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/leap"
                  >
                    Leap
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/create"
                  >
                    Create
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/play"
                  >
                    Play
                  </Link>
                  .
                </span>
              </p>
            </div>

            <div className="w-full md:w-1/2 pt-8 md:pt-0 md:pl-[8%]">
              <img src="/img/who-we-are/what-we-do-collage.webp" alt="Explore our services here: Leap, Create, Play" />
            </div>
          </div>
        </div>
      </section>

      <div style={{ display: 'none' }}>
        <h2>Brand content production agency</h2>
        <h2>Integrated marketing agency</h2>
        <h2>Holistic marketing agency</h2>
        <h2>Brand strategy</h2>
        <h2>Content production agency</h2>
        <h2>Integrated agency</h2>
        <h2>Creative agency</h2>
        <h2>Digital marketing company</h2>
        <h2>Advertising agency</h2>
        <h2>Global team</h2>
        <h2>Brand content</h2>
      </div>

      <section className="py-15 md:py-30 bg-rb-mercury">
        <div className="container">
          <h2 className="font-everett text-2xl md:text-7xl mb-6 md:mb-18">
            What makes us unique
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-18">
            {[
              {
                id: 0,
                title: 'Cutting through the noise',
                description:
                  'We listen, question, deep dive and solve. We believe that ambitious growth demands open minds and hearts.',
              },
              {
                id: 1,
                title: 'Winning for the client',
                description:
                  'In everything we do, we look to deliver meaningful value for our clients and move them closer to fulfilling their business goals.',
              },
              {
                id: 2,
                title: 'Staying on the ball',
                description:
                  'We don’t take relationships for granted - not after 5 months and not after 5 years. We work on a project-to-project basis, so every delivery means a win for you and us. ',
              },
              {
                id: 3,
                title: 'Thinking deep, thinking long term',
                description:
                  'To us, success is in the details, in preparedness, in building long term relationships and in healthy communication. We seek feedback and we’ll be happy to share some too.',
              },
              {
                id: 4,
                title: 'Collaboration and ownership',
                description:
                  'Our business model was inspired by collaboration, but driven by ownership. No matter how many talented individuals or teams we collaborate with, the buck stops with us.',
              },
            ].map(({ id, title, description }) => (
              <div key={id}>
                <h4 className="font-everett mb-1 text-7xl md:text-[86px]">
                  0{id + 1}
                  <span className="text-rb-red">.</span>
                </h4>
                <p className="text-lg font-semibold mb-2">{title}</p>

                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30">
        <div className="container">
          <div className="border border-rb-stroke-dark rounded-3xl p-4 lg:p-10 flex flex-col-reverse lg:flex-row flex-wrap items-center">
            <div className="w-full lg:w-3/5 p-0 lg:pr-5 xl:px-10">
              <h2 className="text-2xl md:text-[52px] leading-[100%] font-semibold mb-8">
                {' '}
                Meet our team and partners who drive growth
              </h2>
              <p className="text-sm md:text-lg mb-10 opacity-80">
                At our core, we thrive on collaboration, innovation, and
                synergy. Our passionate team and valued partners unite to craft
                solutions, fostering remarkable growth within and beyond our
                organisation.
              </p>

              <div className="flex gap-3 flex-wrap">
                <Button
                  href="/team"
                  className="w-full md:w-auto"
                  suffix={<LineArrow hover />}
                >
                  MEET OUR LEADERS
                </Button>
                <Button
                  intent="p-secondary"
                  // onClick={loadMore}
                  className="w-full md:w-auto"
                  suffix={<LineArrow hover />}
                  href="/partners"
                >
                  VIEW OUR PARTNERS
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-2/5 mb-10 lg:mb-0">
              <img src="/img/who-we-are/discover-partner.webp" alt="discover partner" />
            </div>
          </div>
        </div>
      </section>
      {/* <div className="pb-30">
        <ArticleSection
          hideSubscribe
          lineheading="NEWSROOM"
          heading="Media highlights and press roundup"
        />
      </div> */}
      <div className="pb-30">
        <AboutNewsRoom
        hideSubscribe
        lineheading="NEWSROOM"
        heading="Media highlights and press roundup"
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}

export default WhoWeAre
