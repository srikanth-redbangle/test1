import React from 'react'
import { Marquee, SEO } from '@/components/shared'
import { partners } from '@/content/partners'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import Link from 'next/link'
import usePagination from '@/hooks/usePagination'
import Script from 'next/script'
import { partnersSchema } from '@/components/schema/partners-schema'

const Partners = () => {
  const { loadMore, hasMore, data } = usePagination(partners)
  return (
    <>
      {' '}
      <SEO
        title="Red Bangle Partners for Holistic Marketing Communication Strategy, Branded Content & Integrated Marketing Campaigns"
        description="Have a look at Red Bangle's trusted partners, who assist Red Bangle provide comprehensive support for your brand communication with creative advertising content and integrated marketing campaigns. "
        url="www.redbangle.com/partners"
      />
      <section className="pt-14 md:pt-30 md:pb-20 overflow-hidden bg-white">
        <h1 className="invisible pointer-events-none absolute">
          OUR GLOBAL PARTNERS
        </h1>
        <div style={{ display: 'none' }}>
          <h2>Trusted Collaborators</h2>
          <h2>Content Creation Partners</h2>
          <h2>Web/App Ux Design And Development</h2>
          <h2>Search Engine Optimization (SEO)</h2>
          <h2>Written Content Creation (Blog/Article)</h2>
          <h2>Social Media Management</h2>
          <h2>Digital Performance Marketing</h2>
          <h2>Public Relations</h2>
          <h2>Brand Identity Design & Development</h2>
          <h2>Celebrity & Influencer Partnerships</h2>
          <h2>Media Planning & Buying</h2>
          <h2>Event Planning And Experiential Marketing</h2>
          <h2>Augmented Reality (AR) And Virtual Reality (VR)</h2>
          <h2>Translations And Subtitles</h2>
          <h2>Live Streaming And Virtual Event Production</h2>
        </div>
        <Marquee duration={16}>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            OUR PARTNERS
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/partner-pill.webp"
              width="562"
              height="210"
              alt="partner pill"
            />
          </div>
        </Marquee>
        <div className="container">
          <div className="w-full text-sm md:text-accordion-large font-semibold mt-12 md:mt-16">
            Great things come from good partnerships. From app design, to media
            planning and PR - we have the right partners to provide holistic
            support for your brand content and communication goals.
          </div>
        </div>
      </section>
      <section className="bg-white py-20 md:pb-30">
        <div className="container">
          <div className="grid gap-x-6 gap-y-4 md:gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map(({ icon, title, content, href, tags }, index) => (
              <div
                key={index}
                className="bg-rb-service-grey p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-[150px] h-[150px] rounded-lg bg-white p-2 flex justify-center items-center">
                    <img
                      src={icon}
                      alt={title}
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="pt-4.5 md:pt-6 pb-3 font-medium font-everett text-xl leading-6 md:text-accordion">
                    {title}
                  </h3>
                  <p className="mb-6 text-xs md:text-base text-rb-black/80">
                    {content}
                  </p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 items-center text-rb-red font-bold md:font-semibold text-xs leading-4.5 md:text-base md:leading-5"
                  >
                    Read More
                    <LineArrow className="max-w-[16px]" />
                  </a>
                </div>
                {/* <div className="mt-8 md:mt-14 pt-5 md:pt-6 border-t border-t-black/10 font-everett text-sm font-normal text-rb-dune/60 tracking-[-0.56px] md:tracking-normal">
                  {tags.join(', ')}
                </div> */}
              </div>
            ))}
          </div>
          {hasMore && (
            <Button
              className="mt-12 md:mt-16 mx-auto"
              intent="p-secondary"
              onClick={loadMore}
            >
              VIEW ALL
            </Button>
          )}
        </div>
      </section>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(partnersSchema)}
      </Script>
    </>
  )
}

export default Partners
