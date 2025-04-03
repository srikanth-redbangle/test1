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
    name: '5 STAR QUALITY',
    company: 'Metro Wholesale',
    image: '/img/works/metro-wholesale.jpg',
    alt: 'Metro Wholesale',
    tags: ['Creative Ideation', 'Content Production', 'Content Production'],
    href: '/work/create/metro-wholesale-case-study',
  },
  {
    key: 1,
    name: 'Heroes at MyGate',
    company: 'MyGate',
    image: '/img/works/heros-mygate.jpg',
    alt:'heros at mygate ad',
    alt: 'Heroes at MyGate',
    tags: ['Creative Ideation', 'Content Production', 'Content Production'],
    href: '/work/create/mygate-case-study',
  },
  {
    key: 2,
    name: 'Swiggy Wali Jacket',
    company: 'Swiggy',
    image: '/img/works/Swiggy_Wali_Jacket.png',
    alt: 'Swiggy Wali Jacket',
    tags: ['Creative Ideation', 'Content Production'],
    href: '/work/create/swiggy-winter-jacket-case-study',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/my11circle.webp',
    alt:'my11circle',
    width: '260',
    height: '105',
  },
  desktopVideo: '/img/works/My11Cicrle-hero.mp4',
  mobileVideo: '/img/works/my-11-circle.mp4',
  tags: ['Creative Ideation', 'Content Production', 'Online Fantasy Sports'],
  // featured: {
  //   src: '/img/works/ccs_2x.webp',
  //   width: '2880',
  //   height: '1544',
  // },

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
        vimeoId: '866814707',
        name: 'TRY-BALL OFFER FILM',
        company: 'MY11CIRCLE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/try-ball-offer.jpg',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '866814631',
        name: 'BAAZIGAR OFFER FILM',
        company: 'MY11CIRCLE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/ddljfinalwithoutcoupon.jpg',
        },
      },
    ],
  },
}

function My11Circle() {
  const {
    logo,
    tags,
    alt,
    featured,
    commercials,
    stats,
    press,
    desktopVideo,
    mobileVideo,
  } = pageData
  const socials = [
    {
      key: 0,
      href: 'https://twitter.com/intent/post?url=redbangle.com%2Fwork%2Fcreate%2Fmy11circle-case-study',
      color: '#000',
      icon: <Twitter />,
    },

    {
      type: 'linkedin',
      key: 1,
      href: 'https://www.redbangle.com/work/create/my11circle-case-study',
      color: '#006699',
      icon: <Linkedin />,
    },
  ]
  return (
    <>
      <SEO 
      title="Case Study: My11Circle | Creative Advertising & Digital Marketing Campaign | Red Bangle" 
      description="Explore how Red Bangle, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for My11Circle using b2c marketing campaign strategy. "
      />
      <WorkHeroSection
        title={'CRICKET MEETS BOLLYWOOD AT MY11CIRCLE'}
        logo={logo}
        socials={socials}
        alt={alt}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
      />
      <section className="bg-white overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-6">
              <LineHeading className="mb-6 md:mb-9 lg:text-xl">
                Background &amp; problem statement
              </LineHeading>

              <p className="text-base md:text-xl text-rb-black/80 leading-7 mb-[30px]">
                My11Circle is a leading real money fantasy sports game that
                rewards users for their knowledge of the sport of cricket and
                their analytical abilities.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7">
                The brand team wanted to increase new user trials. New user
                trials were low due to users already using similar app-based
                cricket-centric games, and due to user fears of losing money in
                the first game. The brand decided to offer the first game at
                zero losses to every new player.
              </p>
            </div>
            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                Red Bangle’s creative strategy leveraged the two beloved aspects
                of Indian culture - Cricket and Bollywood - to effectively
                invite new users. We used the phrase “Try Ball Offer” to
                communicate a zero-loss first game to new users. Our scripts
                took typical failure and heartbreak scenarios in sports and
                Bollywood and turned them on their head - suggesting that when
                there’s a second chance, why sweat over the first.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                The films helped My11Circle differentiate themselves in a
                crowded market and drive new user sign ups.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
        <Testimonials
          title={'WHAT OUR CLIENTS SAY'}
          // type='semi'
          testimonialData={createTestimonialData.slice(0, -2)}
          className="pt-15 md:pt-30 md:pb-15"
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
My11Circle.PageLayout = SCSLayout
export default My11Circle
