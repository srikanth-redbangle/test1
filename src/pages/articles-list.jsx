import { LineArrow } from '@/components/icons'
import { LineHeading, NewsletterField } from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards'
import { SEO } from '@/components/shared/SEO'
import GetUpdates from '@/components/shared/sections/GetUpdatesSection/GetUpdates'
import { ArrowButton, Button } from '@/components/ui'
import React from 'react'

const Articles = () => {
  return (
    <>
      <SEO
        title="Our blogs for latest trends in content and culture"
        description="Go through the best blogs and must read articles and stay updated on latest content trends and marketing insights"
        keywords="Explore The World Of Red Bangle Productions, Read Our Latest Articles, Stay Updated With Latest News And Insights, Marketing Blogs, Content Marketing Insights, Brand Content Resources"
        url="www.redbangle.com/marketing-blogs-brand-content-resources"
      />

      <section className="bg-rb-mercury py-23">
        <div className="container">
          <h1 className="font-everett text-[32px] md:text-[64px] xl:text-[120px] font-normal mb-8 md:mb-18 leading-[100%]">
            LATEST ARTICLES
          </h1>

          <div style={{ display: 'none' }}>
            <h2>Explore the World of Red Bangle Productions</h2>
            <h2>Read our latest Articles</h2>
            <h2>Stay updated with Latest News and Insights</h2>
            <h2>Marketing Blogs</h2>
            <h2>Content Marketing Insights</h2>
            <h2>Brand Content Resources</h2>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center mb-13 border-b border-b-rb-davy-grey pb-13">
            <div className="flex-1 md:text-[32px] font-semibold tracking-[-1.28px] mb-0">
              <h1 className="inline">
                Discover the latest trends in content and culture.{' '}
              </h1>
              Gain valuable insights to keep your brand ahead of the game.
            </div>

            <NewsletterField />
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="h-[315px] overflow-hidden relative">
                <img
                  src="/img/blog-thumb.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />

                <div className="absolute border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white">
                  Strategic Content Solution
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-4">
                <span className="text-[14px] md:text-[16px]">May 22, 2023</span>
                <span className="text-[14px] md:text-[16px]">|</span>
                <span className="text-[14px] md:text-[16px]">John Doe</span>
              </div>

              <h3 className="text-[26px] md:text-[32px] leading-[120%] font-semibold mb-4 tracking-[-1.28px]">
                Interviews with industry leaders in the world of video
                production
              </h3>

              <p className="mb-10">
                Gain valuable insights from industry leaders in the dynamic
                world of video production. Discover their strategies,
                experiences, and secrets to success, empowering you to take your
                own video projects to new heights.
              </p>

              <a
                href="#!"
                className="inline-flex gap-2 items-center text-rb-red font-semibold"
              >
                Continue reading
                <LineArrow className=" max-w-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">Discover more</LineHeading>

          <h2 className="text-title md:text-title-md mb-8 font-everett">
            Explore the latest updates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-8">
            {[
              {
                id: 0,
              },
              {
                id: 1,
              },
              {
                id: 2,
              },
              {
                id: 3,
              },
              {
                id: 4,
              },
              {
                id: 5,
              },
            ].map(({ id }) => (
              <div key={id}>
                <a
                  href="#!"
                  className="h-[384px] block md:h-[272px] overflow-hidden relative mb-4"
                >
                  <img
                    src="/img/blog-thumb.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <div className="absolute border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white">
                    Strategic Content Solution
                  </div>
                </a>

                <div>
                  <div className="flex gap-2 mb-4">
                    <span className="text-[14px] md:text-[16px]">
                      May 22, 2023
                    </span>
                    <span className="text-[14px] md:text-[16px]">|</span>
                    <span className="text-[14px] md:text-[16px]">John Doe</span>
                  </div>

                  <h3 className="text-[16px] md:text-[24px] leading-[120%] font-semibold mb-8 tracking-[-0.96px]">
                    How a visual artist redefines success in graphic design
                  </h3>

                  <a
                    href="#!"
                    className="inline-flex gap-2 items-center text-rb-red font-semibold"
                  >
                    Continue reading
                    <LineArrow className=" max-w-[20px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-16 text-center">
            <Button href="#!" className="!inline-flex" intent="p-secondary">
              View All
            </Button>
          </div>
        </div>
      </section>

      <GetUpdates />
    </>
  )
}

export default Articles
