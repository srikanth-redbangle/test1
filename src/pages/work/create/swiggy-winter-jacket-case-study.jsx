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
    name: 'Heroes at MyGate',
    company: 'MyGate',
    image: '/img/works/heros-mygate.jpg',
    alt:'heros at mygate ad',
    tags: ['Creative Ideation', 'Content Production', 'Content Production'],
    href: '/work/create/mygate-case-study',
  },
  {
    key: 2,
    name: 'Indeed for Indian SMBs',
    company: 'Indeed',
    image: '/img/works/indeed.jpg',
    alt: 'Indeed',
    tags: ['Ad Film', 'Creative Ideation', 'Production'],
    href: '/work/create/indeed-case-study',
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
  image:'/img/works/Swiggy-Winter-Wali-Jacket-Banner.jpg',
  alt:'Swiggy-Winter-Wali-Jacket-Banner',
  mobileVideo: '/img/works/metro-wholesale.mp4',
  featured: {
    src: '/img/works/ccs_2x.webp',
    width: '2880',
    height: '1544',
  },
}
const commercials= {
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
      vimeoId: '898345095',
      name: 'Pyaar Wali Jacket',
      company: 'METRO WHOLESALE',
      thumbnail: {
        width: 446,
        height: 265,
        src: '/img/case-study/Pyaar_Wali_Jacket.jpg',
      },
    },
    {
      key: 1,
      duration: 128,
      vimeoId: '898345127',
      name: 'Rahat Wali Jacket',
      company: 'METRO WHOLESALE',
      thumbnail: {
        width: 446,
        height: 265,
        src: '/img/case-study/Rahat_Wali_Jacket.jpg',
      },
    },
    {
      key: 2,
      duration: 128,
      vimeoId: '898344993',
      name: 'Bachat Wali Jacket',
      company: 'METRO WHOLESALE',
      thumbnail: {
        width: 446,
        height: 265,
        src: '/img/case-study/Bachat_Wali_Jacket.jpg',
      },
    },
    // {
    //   key: 3,
    //   duration: 128,
    //   vimeoId: '869199397',
    //   name: 'RANGE IN HOME ESSENTIALS',
    //   company: 'METRO WHOLESALE',
    //   thumbnail: {
    //     width: 446,
    //     height: 265,
    //     src: '/img/case-study/metro-thumb4.jpg',
    //   },
    // },
  ],
}

function MetroWholesale() {
  const { logo, tags, desktopVideo, mobileVideo, image, alt } = pageData
  const socials = [
    {
      key: 0,
      href: 'https://twitter.com/intent/post?url=redbangle.com%2Fwork%2Fcreate%2Fswiggy-winter-jacket-case-study',
      color: '#000',
      icon: <Twitter />,
    },

    {
      type: 'linkedin',
      key: 1,
      href: 'https://www.redbangle.com/work/create/swiggy-winter-jacket-case-study',
      color: '#006699',
      icon: <Linkedin />,
    },
  ]
  return (
    <>
      <SEO 
      title="Case Study: Swiggy | Creative Advertising & Digital Marketing Campaign | Red Bangle"
      description="Explore how Red Bangle, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Swiggy using b2c marketing campaign strategy." 
      />
      <WorkHeroSection
        title={'Swiggy Wali Winter Jacket Campaign'}
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
        alt={alt}
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
      />
      <section className="bg-white pt-7.5 overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="">
              <LineHeading className="mb-6 font-opensans">
                <span className='text-[20px]'>
                Background & Problem Statement
                </span>
              </LineHeading>

              <div className="md:text-xl text-rb-black/80 mb-[80px] font-opensans text-base">
                <div className='mb-4'>
                Swiggy, one of India&apos;s leading food delivery giants, is pretty awesome at keeping both its customers, and delivery partners happy.
                </div>
                <div className='mb-4'>
                During the summers, one can&apos;t miss the Swiggy crew. They&apos;re out there in their bright orange T-shirts, giving Swiggy a lot of visibility on the roads. But when winters come around, things change. Those cheerful orange T-Shirts get covered up in all kinds of oddly-coloured winter jackets.
                </div>
                <div className='mb-4'>
                Enter Swiggy&apos;s Winter Jackets - they are not just warm and comfy, but come at a price friendly to delivery partners, and bring back that pop of Swiggy orange in the winters. It&apos;s a smart move to keep the brand visible all-year-round, while protecting Delivery Partners during North India&apos;s harsh winters. 
                </div>
                <div className=''>
                Swiggy&apos;s brief to us: launch the winter jacket and popularize it amongst the Delivery Partners. The client primarily wanted to use the videos on the Swiggy Delivery Partner app, to drive product purchase.
                </div>
              </div>
            </div>
            <div className="">
              <LineHeading className="mb-6 md:mb-9 font-opensans">
                <span className='text-[20px]'>
                Creative approach
                </span>
              </LineHeading>
              <div className="text-base md:text-xl text-rb-black/80 mb-4 font-opensans">
                The Red Bangle creative team understood that the Delivery Partners were always on the move, and lengthy ads just wouldn&apos;t cut it. So to communicate the best features of the jacket - warmth, practicality, and affordability - in an interesting manner, we went with snackable duration of 30-second ads, and created a cool gang of characters that helped us show off the product in a fun way.
              </div>
              <div className="text-base md:text-xl text-rb-black/80 mb-4 font-opensans">
                Take a look at the characters that inspired love for the “Swiggy wali jacket”.
              </div>
                <ul className='list-disc ml-10 font-opensans'>
                  <li className='text-sm md:text-xl text-rb-black/80 mb-4'>Pyare Pankaj - the one who wants to keep his new bride warm and cozy.
                  </li>
                  <li className='text-sm md:text-xl text-rb-black/80 mb-4'>Bhulakkad Babloo - the guy who&apos;s always misplacing stuff, and needs many pockets to save his day. </li>
                  <li className='text-sm md:text-xl text-rb-black/80 mb-4'>Bachat Ram - the one who&apos;s always on the lookout for a bargain. He&apos;s been hunting for a winter jacket that&apos;s easy on the wallet but tough as nails.</li>
                </ul>
              <div className="text-base md:text-xl text-rb-black/80 mb-8 md:mb-12 font-opensans">
              Three characters, three distinct films - collectively formed the Swiggy Wali Jacket digital campaign. Watch the light and heart-warming films, and you might want a Swiggy Winter Jacket yourself! 
              </div>
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
