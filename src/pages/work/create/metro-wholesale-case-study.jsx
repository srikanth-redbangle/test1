import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  PostContent,
  PressSection,
  SEO,
  SimilarPosts,
  StatsContainer,
  Testimonials,
  WorkHeroSection,
} from '@/components/shared'

import { ccs, similarPosts } from '@/utils/dummy'
import { CommercialSection } from '@/components/pages/work'
import { createTestimonialData } from '@/pages/services/create'

export const similarPostsData = [
  {
    key: 0,
    name: 'Heroes at MyGate',
    company: 'MyGate',
    image: '/img/works/heros-mygate.jpg',
    alt:'heros at mygate ad',
    tags: ['Creative Ideation', 'Content Production', 'Content Production'],
    href: '/work/create/mygate-case-study',
  },
  {
    key: 1,
    name: 'Swiggy New Year Earning',
    company: 'Swiggy',
    image: '/img/works/Swiggy_NYE.png',
    alt: 'Swiggy NYE',
    tags: ['Creative Ideation', 'Content Production'],
    href: '/work/create/swiggy-extra-earning-case-study',
  },
  {
    key: 2,
    name: 'Try Ball Offer',
    company: ' My 11 Circle',
    image: '/img/works/my-11-circle.jpg',
    alt:'my 11 circle ',
    tags: ['Creative Ideation', 'Content Production', 'Content Production'],
    href: '/work/create/my11circle-case-study',
  },

]

const pageData = {
  logo: {
    src: '/img/logos/metro-wholesale.webp',
    alt:'metro wholesale ad',
    width: '260',
    height: '105',
  },
  tags: ['Creative Ideation', 'Content Production', 'Retail'],
  desktopVideo: '/img/works/metro-wholesale-big2.mp4',
  mobileVideo: '/img/works/metro-wholesale.mp4',
  featured: {
    src: '/img/works/ccs_2x.webp',
    width: '2880',
    height: '1544',
  },
  commercials: {
    title: (
      <>
        Portfolio of video projects that&nbsp;elevated brands and exceeded
        client expectations.
      </>
    ),
    excerpt:
      'Unlock the full potential of your brand with our commercial adaptations. We combine innovative ideas, expert production, and strategic messaging to create captivating commercials that leave a lasting impression.',
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '866815060',
        name: 'RANGE IN LUGGAGE',
        company: 'METRO WHOLESALE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/metro-thumb1.jpg',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '866814993',
        name: 'QUALITY  IN KITCHENWARE',
        company: 'METRO WHOLESALE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/metro-thumb2.jpg',
        },
      },
      {
        key: 2,
        duration: 128,
        vimeoId: '866814885',
        name: 'QUALITY IN ELECTRONICS',
        company: 'METRO WHOLESALE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/metro-thumb3.jpg',
        },
      },
      {
        key: 3,
        duration: 128,
        vimeoId: '869199397',
        name: 'RANGE IN HOME ESSENTIALS',
        company: 'METRO WHOLESALE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/metro-thumb4.jpg',
        },
      },
    ],
  },
}

function MetroWholesale() {
  const { logo, tags, commercials, desktopVideo, mobileVideo } = pageData
  const socials = [
    {
      key: 0,
      href: 'https://twitter.com/intent/tweet?url=redbangle.com%2Fcase-study%2Fmetro-wholesale&text=Metro%20Wholesale',
      color: '#000',
      icon: <Twitter />,
    },

    {
      type: 'linkedin',
      key: 1,
      href: 'https://www.redbangle.com/work/create/metro-wholesale-case-study',
      color: '#006699',
      icon: <Linkedin />,
    },
  ]
  return (
    <>
      <SEO 
      title="Case Study: Metro Wholesale | Creative Advertising & Digital Marketing Campaign | Red Bangle" 
      description="Explore how Red Bangle, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
      />
      <WorkHeroSection
      title={'5 STAR QUALITY AT WHOLESALE PRICES'}
        logo={logo}
        socials={socials}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
      />
      <section className="bg-white overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-6">
              <LineHeading className="mb-6 md:mb-9">
                Background & objective
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 leading-7">
                METRO Wholesale is a leading business-to-business wholesaler,
                serving the needs of traders, restaurants, small and medium
                businesses and more. The brand aimed to communicate a key USP:
                high quality products at unbelievably low prices. The challenge
                was to change the common perception that these two attributes
                seldom go hand in hand, and to communicate the message in a fun
                and engaging way.
              </p>
            </div>
            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                In India the term ‘5 star’ is commonly used as the gold standard
                of any product or service. So, we strategically leveraged this
                term in the campaign&apos;s central message.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                The creative strategy was to weigh in on the customer’s
                intelligence and price awareness, by not selling the
                unbelievable prices, but by calling them a mistake… well, at
                first. And this worked.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7">
                The films were made in Hindi and then dubbed to several regional
                languages for distribution on local news channels. The campaign
                increased brand awareness amongst the target audience and
                boosted store footfall by 36%.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

      <SimilarPosts
        tag="EXPLORE MORE CASE STUDIES"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      />
    </>
  )
}
MetroWholesale.PageLayout = SCSLayout
export default MetroWholesale
