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
        name: 'Swiggy Wali Jacket',
        company: 'Swiggy',
        image: '/img/works/Swiggy_Wali_Jacket.png',
        alt: 'Swiggy Wali Jacket',
        tags: ['Creative Ideation', 'Content Production'],
        href: '/work/create/swiggy-winter-jacket-case-study',
      }
  
  ]

const pageData = {
    logo: {
        src: '/img/logos/indeed.webp',
        alt: 'indeed ad',
        width: '260',
        height: '105',
    },
    tags: ['Ad Film', 'Creative Ideation', 'Production'],
    desktopVideo: '/img/works/metro-wholesale-big2.mp4',
    mobileVideo: '/img/works/metro-wholesale.mp4',
    image: '/img/case-study/indeed/indeed_banner_visual.jpg',
    featured: {
        src: '/img/works/ccs_2x.webp',
        width: '2880',
        height: '1544',
    },
    commercials: {
        type: 'video',
        sources: [
            {
                key: 0,
                duration: 15,
                // vimeoId: '866815060',
                name: 'Radhika Apte for Indeed',
                company: 'INDEED',
                thumbnail: {
                    width: 642,
                    height: 430,
                    src: '/img/case-study/indeed/indeed_video_thumbnail.jpg',
                },
                url:"https://www.youtube.com/watch?v=xvvpNmP1G_4"
            }
        ],
    },
}

function Indeed() {
    const { logo, tags, commercials, image } = pageData
    const socials = [
        {
            key: 0,
            // href: 'https://x.com/intent/post?url=https%3A%2F%2Ftwitter.com%2Findeed-case-study',
            href: 'https://twitter.com/intent/post?url=redbangle.com%2Fwork%2Fcreate%2Findeed-case-study',
            color: '#000',
            icon: <Twitter />,
        },

        {
            type: 'linkedin',
            key: 1,
            href: 'https://www.redbangle.com/work/create/indeed-case-study',
            color: '#006699',
            icon: <Linkedin />,
        },
    ]
    return (
        <>
            <SEO
                title="Indeed for Indian SMBs case study"
                description="Explore how Red Bangle, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
            />
            <WorkHeroSection
                title={'Indeed for Indian SMBs'}
                logo={logo}
                socials={socials}
                tags={tags}
                image={image}
            />
            <section className="bg-white overflow-hidden">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-6">
                            <LineHeading className="mb-6 md:mb-9">
                                Background & Objectives
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 leading-7">
                                Small and Medium businesses in India’s smaller cities and towns have traditionally hired through word of mouth referrals. But with more of India’s talent migrating to the big cities and with SMBs now increasing in number and their growth ambitions, the age-old family-friends-and-community networks no longer deliver the talent required, when they are required. It’s time for India’s SMB Entrepreneurs to switch to an easy-to-use hiring platform that offers enough talent options in tier II and tier III cities too.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Creative approach
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                                We took a close look at the real challenges associated with network- and community-based hiring. And we decided, not only was it every SMB entrepreneur’s problem, but that the reality of it all was a bit funny and frustrating - for everyone involved!
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                                Armed with our cultural insights, we crafted a dialogue-rich culturally-relevant quirky script, and cast a celebrity protagonist as well as a popular second character - the all-important right-hand-man. With clean app graphics integrated for Indeed - our campaign film not only positioned Indeed as the answer to SMB hiring challenges, but also as an enabler for SMB growth ambitions.
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
Indeed.PageLayout = SCSLayout
export default Indeed