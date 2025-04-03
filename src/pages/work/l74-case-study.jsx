import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
    LineHeading,
    PressSection,
    WorkHeroSection,
    SEO,
    Testimonials
} from '@/components/shared'

const createTestimonialData = [
    {
        key: 1,
        quote:
            'Working with Red Bangle has been an excellent experience. Their team was able to effortlessly transform our communication needs into a well crafted campaign. They have been perceptive in understanding our needs as a business, this is what I believe allowed them to come up with creative ideas for the campaign. The team has smoothly executed the plan for us in a short amount of time, with commendable agility for on the fly changes.',
        name: 'Kalp Patel & Ayush Patel',
        designation: 'Founders',
        company: 'Wild Harvest Brewing Company (Craft Cider - L74)',
        image: {
            srcSet:
                '/img/testimonials/kalp-patel_ayush-patel.jpg 533w, /img/testimonials/kalp-patel_ayush-patel.jpg 1066w',
            sizes: '(max-width:768px) 533px, 1066px',
        },
    },

]

const pageData = {
    logo: {
        src: '/img/case-study/l74/l74-logo.jpeg',
        width: 'auto',
        alt: 'L74',
        width: '100px',
    },
    title: 'Trip Different with L74 Cider',
    image: '/img/case-study/l74/l74_case_study_banner_visual_new.jpg',
    tags: ['Brand Strategy', 'Campaign Strategy', 'Creative Concepts', 'Content Production', 'Alcobev'],
    presstitle: 'Campaign',
    press: {
        title: 'Here’s how we brought our strategic solution to life through the creative campaign for L74.',
        image: {
            src: '/img/case-study/l74/manifesto-reel.mp4',
            width: '820px',
            height: '430px',
            bgColor: '#000000',
        },
        content:
            "While most travelers are content with the usual sightseeing spots, lounging in shacks with a beer, or hitting up the same old clubs, there are those who crave something different. Those who truly want to experience the other side. Those who believe magic is to be found along the less-traveled road. <br><br> L74 Cider is crafted for dreamers and explorers who crave a refreshingly different trip down to the last drop.",
        href: '#!',
        type: 'videogallery',
        thumbnail: '/img/case-study/l74/manifesto-thumbnail-100.jpg',
        readmore: false,
        sources: [
            {
              key: 0,
              duration: 15,
              vimeoId: '1027634347',
              url:'https://vimeo.com/1027634347',
              name: 'Pack, Pop, Trip Different',
              thumbnail: {
                width: 446,
                height: 265,
                src: '/img/case-study/l74/suitcase_reel_thumbnail_1.jpg',
              },
            },
            {
              key: 1,
              duration: 128,
              vimeoId: '1027634505',
              url:'https://vimeo.com/1027634505',
              name: 'Ready, Set, Trip Different!',
              thumbnail: {
                width: 446,
                height: 265,
                src: '/img/case-study/l74/fridge_reel_thumbnail_2.jpg',
              },
            },
            {
              key: 2,
              duration: 128,
              vimeoId: '1027634616',
              url:'https://vimeo.com/1027634616',
              name: 'Trip Different with L74',
              thumbnail: {
                width: 446,
                height: 265,
                src: '/img/case-study/l74/backpack_reel_thumbnail_1.jpg',
              },
            },
            {
              key: 3,
              duration: 128,
              vimeoId: '1028366703',
              url:'https://vimeo.com/1028366703',
              name: 'Bored of Beer?',
              thumbnail: {
                width: 446,
                height: 265,
                src: '/img/case-study/l74/trip_different_from_beer_thumbnail_3.jpg',
              },
            },
            {
                key: 4,
                duration: 15,
                vimeoId: '1027634673',
                url:'https://vimeo.com/1027634673',
                name: 'Craft Apple Cider',
                thumbnail: {
                  width: 446,
                  height: 265,
                  src: '/img/case-study/l74/craft_pple_cider_thumbnail.jpg',
                },
              },
              {
                key: 5,
                duration: 128,
                vimeoId: '1027634760',
                url:'https://vimeo.com/1027634760',
                name: 'Craft Citrus Cider',
                thumbnail: {
                  width: 446,
                  height: 265,
                  src: '/img/case-study/l74/craft_citrus_cider_thumbnail.jpg',
                },
              },
              {
                key: 6,
                duration: 128,
                vimeoId: '1027634827',
                url:'https://vimeo.com/1027634827',
                name: 'Craft Coffee Cider',
                thumbnail: {
                  width: 446,
                  height: 265,
                  src: '/img/case-study/l74/craft_coffee_cider_thumbnail.jpg',
                },
              },
              {
                key: 7,
                duration: 128,
                vimeoId: '1027634931',
                url:'https://vimeo.com/1027634931',
                name: ' For Adventurers, Dreamers, Wanderers',
                thumbnail: {
                  width: 446,
                  height: 265,
                  src: '/img/case-study/l74/manifesto_reel_thumbnail.jpg',
                },
              }
          ],
        
    }
}

function L74() {
    const { logo, title, tags, press, image } = pageData
    const socials = [
        {
            key: 0,
            href: 'https://twitter.com/intent/post?url=redbangle.com%2Fwork%2Fl74-case-study',
            color: '#000',
            icon: <Twitter />,
        },

        {
            type: 'linkedin',
            key: 1,
            href: 'https://www.redbangle.com/work/l74-case-study',
            color: '#006699',
            icon: <Linkedin />,
        }
    ]
    return (

        <>
            <SEO title="Case Study | L74" />
            <WorkHeroSection
                logo={logo}
                title={title}
                socials={socials}
                tags={tags}
                image={image}
            />

    <div className="container overflow-hidden">
        <div className="cs-content max-w-[914px]">

         <div className="mt-6">
            <LineHeading className="mb-6 md:mb-9">
              Challenge
            </LineHeading>

            <div className='text-xl md:text-[32px] text-black mb-4 font-medium lg:leading-10'>With beer reigning supreme in the Indian market, it’s a challenge for cider to make a mark.</div>

            <div className="text-base md:text-xl text-rb-black/80 mt-8">
              <p className='leading-7 mb-[30px]'>The Indian beer and cider market is an absolute jungle, with well-established beer brands crushing the scene. Non-craft beer accounts for 98.8% of the market, leaving only 1.2% for craft beer, cider, and other alternatives combined*. </p>
              <p className='leading-7 mb-[30px]'> Cider, in particular, has barely made a dent in the market, leaving no elbow room for new players . Low consumer awareness, overwhelming preference for beer, and confusion between craft beer and cider are all factors that take the fizz out of new product adoption.</p>
              <p className='leading-7 mb-[30px]'>*2022 Euromonitor Report</p>
            </div>
        </div>


        <div className="mt-6 md:mt-20">
             <LineHeading className="mb-6 md:mb-9">
              Approach
             </LineHeading>

            <div className='text-xl md:text-[32px] text-black mb-4 font-medium lg:leading-10'>We crafted a fun strategy to position cider as the better alternative to beer.</div>

            <div className="text-base md:text-xl text-rb-black/80 mt-8">
              <p className='leading-7 mb-[30px]'>By positioning beer as the ‘been there done that’ option, we inspired our audience to view L74 cider as a cooler, yummier, more refreshing alternative. An upgrade. Not just a change. </p>
            </div>
          </div>

          <div className="mt-6 md:mt-20">
            <LineHeading className="mb-6 md:mb-9">
               Solution
            </LineHeading>

            <div className='text-xl md:text-[32px] text-black mb-4 font-medium lg:leading-10'>Explore a new &#x2018;cider&#x2019; you.</div>
            
            <div className="text-base md:text-xl text-rb-black/80 mt-8">
              <p className='leading-7 mb-[30px]'>The proposition - <span className='font-bold'>Explore a new &#x2018;cider&#x2019; you</span>, creatively articulated as <span className='font-bold'>Trip Different</span>, encourages consumers to embrace new experiences. This approach made the unexplored world of L74 cider feel fun, cool, and different, capturing the product’s vibrant, bubbly personality, and superior taste.</p>
            </div>
          </div>

        </div>
    </div>

    <PressSection
         className="bg-rb-torch-red mt-14"
         title={press?.title}
         content={press?.content}
         type={press?.type}
         readmore={press?.readmore}
         sources= {press?.sources}
         presstitle= {pageData?.presstitle}
    />

    <Testimonials
        title={'WHAT OUR CLIENT SAYS'}
        testimonialData={createTestimonialData}
        className="pt-16 md:pt-24 md:pb-30 pb-16"
    />

    </>

    )
}
L74.PageLayout = SCSLayout
export default L74