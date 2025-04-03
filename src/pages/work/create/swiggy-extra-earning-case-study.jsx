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
    alt:'metro wholesale ad',
    tags: ['Creative Ideation', 'Content Production', 'Content Production'],
    href: '/work/create/metro-wholesale-case-study',
  },
  {
    key: 1,
    name: 'Indeed for Indian SMBs',
    company: 'Indeed',
    image: '/img/works/indeed.jpg',
    alt: 'Indeed',
    tags: ['Ad Film', 'Creative Ideation', 'Production'],
    href: '/work/create/indeed-case-study',
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
    src: '/img/logos/swiggy-logo.webp',
    alt:'swiggy logo',
    width: '260',
    height: '105',
  },
  tags: ['Creative Ideation', 'Content Production'],
  desktopVideo: '/img/works/metro-wholesale-big.mp4',
  image: '/img/works/Swiggy-New-Earnings.jpg',
  alt:'Swiggy New Earnings',
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
        // company: 'METRO WHOLESALE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/metro.jpg',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '866814993',
        name: 'QUALITY  IN KITCHENWARE',
        // company: 'METRO WHOLESALE',
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



const commercials =
{
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
      vimeoId: '898345715',
      name: 'Pyaar ka EXTRA izehaar',
      // company: 'MY11CIRCLE',
      thumbnail: {
        width: 446,
        height: 265,
        src: '/img/case-study/Pyaar_ka_extra_izehaar.jpg',
      },
    },
    {
      key: 1,
      duration: 128,
      vimeoId: '898345381',
      name: 'The EXTRA surprise',
      // company: 'MY11CIRCLE',
      thumbnail: {
        width: 446,
        height: 265,
        src: '/img/case-study/The_Extra_Surpirse.jpg',
      },
    },
  ],
}
function MetroWholesale() {
  const { logo, tags, desktopVideo, mobileVideo, image, alt } = pageData
  const socials = [
    {
      key: 0,
      href: 'https://twitter.com/intent/post?url=redbangle.com%2Fwork%2Fcreate%2Fswiggy-extra-earning-case-study',
      color: '#000',
      icon: <Twitter />,
    },

    {
      type: 'linkedin',
      key: 1,
      href: 'https://www.redbangle.com/work/create/swiggy-extra-earning-case-study',
      color: '#006699',
      icon: <Linkedin />,
    },
  ]
  return (
    <>
      <SEO 
      title="Case Study: Swiggy | Creative Advertising & Digital Marketing Campaign | Red Bangle" 
      description="Explore how Red Bangle - Creative Advertising Agency, crafted creative video content for Swiggy's creative ad campaign & digital marketing campaign, using b2c marketing communication strategy. "
      />
      <WorkHeroSection
        title={'EXTRA Earnings Season with Swiggy'}
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
        alt={alt}
      // desktopVideo={desktopVideo}
      // mobileVideo={mobileVideo}
      />
      {/* <section className="bg-white pt-7.5 md:pt-15 overflow-hidden"> */}
      <div className="container pt-7.5 md:pt-15 overflow-hidden">
        <div className="cs-content max-w-[914px]">
          <div className="md:-mt-10 md:mb-20">
            <LineHeading className="mb-6 font-opensans">
              <span className='text-[20px]'>
                Background & Problem Statement
              </span>
            </LineHeading>

            <div className="text-base md:text-xl text-rb-black/80">
              <div className='leading-7 mb-[30px]'>
                The year-end is a time when we get together with family and friends, celebrate and feast. This is probably why Swiggy hits its peak orders season between Christmas and New Year’s.
              </div>
              <div className='leading-7 mb-[30px]'>
                In this super busy season, Swiggy relies heavily on Delivery Partners to handle the huge wave of incoming orders. They need all the Partners they already have, and then some! Think of it like “delivery partner wars”. Swiggy needed to engage its delivery partners with great offers and excite those from competing apps too. Their approach: awesome deals, bigger earnings, mega guarantees, and extra bonuses.
              </div>
              <div className='leading-7 mb-[30px]'>
                The brief was a digital campaign to spread the word on great seasonal benefits and encourage more Delivery Partner engagement as well as sign-ups. And the content needed to be super-relatable for the TG.
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-20">
            <LineHeading className="mb-6 font-opensans">
              <span className='text-[20px]'>
                Creative approach
              </span>
            </LineHeading>

            <div className='text-xl md:text-[32px] text-black mb-4 font-medium lg:leading-14 font-everett'>The Return of Pyaare Pankaj and Sweety</div>
            <div className="text-base md:text-xl text-rb-black/80 mb-8 md:mb-[30px] leading-7">
              Remember Pyaare Pankaj and Sweety from our <a href="/work/create/swiggy-winter-jacket-case-study" target="_blank" rel="noopener noreferrer"><span className='no-underline text-rb-red font-semibold'>&quot;Swiggy Wali Jacket&quot;</span></a> campaign? Well, this newly-wed couple turned out to be a hit! Their charm and relatability created a special place in the hearts of our target audience. And, we saw a fantastic opportunity to deepen this connection and continue their story with brand Swiggy, and to do something a little EXTRA.
            </div>
            <div className='text-xl md:text-[32px] text-black mb-4 font-medium lg:leading-14 font-everett'>Crafting the EXTRA campaign</div>
            <div className="text-base md:text-xl text-rb-black/80 leading-7">
              <div className='mb-4 md:mb-[30px] '>
                Well, time had passed since Pankaj and Sweety were newlyweds. All things given - theirs has grown to be a happy married life. And the romance is very much still alive.
              </div>
              <div className='mb-4 md:mb-[30px]'>
                So, to highlight the EXTRA incentives Swiggy was dishing out this festive season, we showed Pyaare Pankaj earning EXTRA with Swiggy, just to keep Sweety EXTRA happy.
              </div>
              <div className='mb-4 md:mb-[30px]'>
                Watch the two films and find out what Pyare Pankaj does to woo his Sweetie over and over again with a little EXTRA. These are just an inspiration for the many things a Delivery Partner could do with their EXTRA earnings with Swiggy.
              </div>
              <div className=''>
                The films significantly boosted Delivery Partner engagement during the busy year-end season. And new Partner sign-ups on the Swiggy app? Well, they grew EXTRA too!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        /> */}
      {/* </section> */}

      <CommercialSection
        sources={commercials?.sources}
        type={commercials?.type}
      />

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
