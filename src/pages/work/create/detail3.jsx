import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  PostContent,
  PressSection,
  RollupNumber,
  SimilarPosts,
  StatsContainer,
  Testimonials,
  WorkHeroSection,
} from '@/components/shared'

import { ccs3, similarPosts } from '@/utils/dummy'
import { CommercialSection } from '@/components/pages/work'
import { createTestimonialData } from '@/pages/services/create'

function Detail() {
  const { logo, tags, featured, commercials, stats, press } = ccs3
  const socials = [
    {
      key: 0,
      href: '/',
      color: '#25D366',
      icon: <Whatsapp />,
    },
    {
      key: 1,
      href: '/',
      color: '#1DA1F2',
      icon: <Twitter />,
    },
    {
      key: 2,
      href: '/',
      color: '#0088cc',
      icon: <Telegram />,
    },
    {
      key: 3,
      href: '/',
      color: '#006699',
      icon: <Linkedin />,
    },
  ]
  return (
    <>
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        featured={featured}
      />
      <section className="bg-white overflow-hidden">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">commercials</LineHeading>
          <h3 className="!text-title md:!text-title-lg font-everett max-w-[800px]">
            {commercials?.title}
          </h3>
          {commercials?.excerpt && (
            <div className="mt-6 md:mt-14 text-base md:text-2xl text-rb-black/80 max-w-[914px]">
              {commercials?.excerpt}
            </div>
          )}
        </div>
        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>
      <section className="bg-white py-15 md:pb-30">
        <div className="container">
          <div className="rb-row pb-10 md:pb-16">
            <div className="lg:w-1/2">
              <LineHeading className="mb-6 md:mb-9">Results</LineHeading>
              <PostContent noMargin content={stats?.content} />
            </div>
          </div>
          <div className="rb-row font-everett">
            {stats?.points.map(({ stats, key }) => (
              <div className="w-full md:w-1/3 group" key={key}>
                <StatsContainer stats={stats} type="column" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <PressSection
        className="bg-rb-torch-red"
        title={press?.title}
        content={press?.content}
        image={press?.image}
      />
      <Testimonials
      title={'WHAT OUR CLIENTS SAY'}
        testimonialData={createTestimonialData}
        className="pt-15 md:pt-30 md:pb-15"
      />
      <SimilarPosts
        tag="EXPLORE MORE CASE STUDIES"
        className="py-15 md:pb-30"
        posts={similarPosts}
      />
    </>
  )
}
Detail.PageLayout = SCSLayout
export default Detail
