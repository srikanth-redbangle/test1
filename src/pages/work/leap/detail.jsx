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

import { Accordion } from '@/components/ui/Accordion'

import { scs, similarPosts } from '@/utils/dummy'

function Detail() {
  const {
    logo,
    tags,
    featured,
    problem,
    work,
    approach,
    steps,
    result,
    press,
  } = scs
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
      <section className="bg-white py-7.5 md:py-15">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">problem statement</LineHeading>
          <h3 className="lg:w-10/12">{problem?.title}</h3>
          <PostContent content={problem?.content} />
        </div>
      </section>
      <section className="bg-white  py-7.5 md:py-15">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">the work</LineHeading>
          <h3 className="mb-10 md:mb-30 lg:w-10/12">{work?.title}</h3>
          <PostContent content={work?.content} />
        </div>
      </section>
      <section className="bg-white py-7.5 md:py-15">
        <div className="container">
          <div className="rb-row md:justify-between md:items-center">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <LineHeading className="mb-6 md:mb-9">THE Approach</LineHeading>
              <h3>
                At Red Bangle, we believe in the power of creative collaboration
                to drive impactful results.
              </h3>
            </div>
            <div className="w-full md:w-1/2 lg:w-7/12 lg:max-w-[600px]">
              <PostContent content={approach?.content} noMargin />
            </div>
          </div>
          <div className="rb-row mt-10 mb-15 md:my-30">
            <div className="w-full md:w-1/2 aspect-[618/461]">
              <img
                className="w-full h-full object-cover"
                src={approach.image1}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 aspect-[618/461] mt-4 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={approach.image2}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="rb-row justify-end">
            <PostContent
              className="w-full lg:w-1/2"
              noMargin
              content={approach?.secondaryContent}
            />
          </div>
          {approach?.secondaryImage && (
            <img
              className="w-full mt-10 md:mt-30"
              alt=""
              loading="lazy"
              {...approach.secondaryImage}
            />
          )}
        </div>
      </section>
      <section className="bg-white py-7.5 md:py-15">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-1/2">
              <h3 className="max-w-[482px] mb-10 md:mb-0">
                By following these steps, we transform your strategic content
                plan into a reality.
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <Accordion
                hasNumber
                data={steps?.content?.map((c) => ({
                  key: `${c.key}`,
                  heading: (
                    <div dangerouslySetInnerHTML={{ __html: c?.title }}></div>
                  ),
                  content: (
                    <div dangerouslySetInnerHTML={{ __html: c?.content }}></div>
                  ),
                }))}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-2.5 pb-7.5 md:py-15 bg-white">
        <div className="container">
          <div className="rb-row ">
            <div className="w-full md:w-1/2 aspect-[618/461]">
              <img
                className="w-full h-full object-cover"
                src={approach.image1}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 aspect-[618/461] mt-4 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={approach.image2}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-7.5 pb-15 md:py-15 md:pb-30 bg-white">
        <div className="container">
          <div className="rb-row md:justify-between">
            <div className="w-full md:w-5/12">
              <LineHeading className="mb-6 md:mb-9">results</LineHeading>
              <PostContent content={result?.content} />
            </div>
            <div className="w-full md:w-1/2 md:pt-6">
              {result?.points?.map(({ key, stats }) => (
                <StatsContainer stats={stats} key={key} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <PressSection
        className="bg-rb-scarlet"
        title={press?.title}
        content={press?.content}
        image={press?.image}
      />
      <Testimonials
      title={'WHAT OUR CLIENTS SAY'}
      className="pt-15 md:pt-30 md:pb-15" />
      <SimilarPosts
        tag="EXPLORE MORE CASE STUDIES"
        className="pt-15 pb-15 md:pb-30"
        posts={similarPosts}
      />
    </>
  )
}
Detail.PageLayout = SCSLayout
export default Detail
