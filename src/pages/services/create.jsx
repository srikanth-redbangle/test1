import {
  ServiceCardSection,
  ServiceHeroSection,
  Testimonials,
  ExploreMoreSection,
  RedbangleWaySection,
  FeaturedWorkSection,
} from '@/components/shared'
import { schemaScsCreate } from '@/components/schema/scs-create-schema'
import { SEO } from '@/components/shared/SEO'
import {
  capabilitiesCreate,
  redbanglewayCreate,
  serviceVideos,
} from '@/content/services'
import { similarPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export const createTestimonialData = [
  {
    key: 0,
    quote:
      'We worked on 2 films with Red Bangle and I can confidently say that the output exceeded our expectations. The team was able to come up with a concept that combined the strong recall of popular culture and at the same time incorporated the brand messaging clearly in the campaign. I would highly recommend them as a reliable and kickass creative partner',
    name: 'BHARAT VIRMANI',
    designation: 'Marketing Manager',
    company: 'Games24x7',
    image: {
      srcSet:
        '/img/testimonials/bharat.webp 533w, /img/testimonials/bharat.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 1,
    quote:
      'The Red Bangle team is fantastic to work with! They add value not just from a creative standpoint but also in terms of communication strategy.',
    name: 'ROSHAN CARIAPPA ',
    designation: 'VICE-PRESIDENT MARKETING',
    company: 'VYMO',
    image: {
      srcSet:
        '/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },

  {
    key: 2,
    quote:
      'Red Bangle’s work has been exemplary for the Season of Joy Campaign. The video does what it set out to do – touch people’s hearts.',
    name: 'PEARLRAJ CANNIVADY',
    designation: 'VICE PRESIDENT - MARKETING',
    company: 'SPAR HYPERMARKETS',
    image: {
      srcSet:
        '/img/testimonials/pearlraj.webp 533w, /img/testimonials/pearlraj.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

const ServiceCCS = ({setisPopupOpen}) => {
  const _posts = similarPosts.map(postsMapper)
  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('create-explore'); // Replace 'section-id' with the ID of your section
        if (section && window.scrollY > section.offsetTop) {
          setisPopupOpen(true);
          setstopVisible(true)
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [stopVisible]);
  return (
    <>
      <SEO
        title="Fuel Brand Growth with Integrated Marketing Campaigns | Go from Campaign Strategy to Creative Advertising Campaigns with Red Bangle - Your Global Brand Communication Partner"
        description="Red Bangle is leading creative advertising agency globally. With creative ad campaigns, Red Bangle boosts your brand communication game. Get in touch with our creative experts for exceptional integrated marketing campaigns, advertising strategy & campaign strategy."
        url="www.redbangle.com/service/creative-marketing-agency-for-brand-campaigns"
      />

      <ServiceHeroSection
        className="bg-rb-torch-red"
        type="create"
        video={serviceVideos.create.video}
        fullVideo={serviceVideos.create.fullVideo}
        ctaText="Create with us"
        ctaLink="/contact"
        content={
          <>
            <h1 className="inline">Creative content solutions</h1>&nbsp;that
            fuel brand growth. Go from creative insights to campaign ideas and
            end-to-end content production in one seamless journey. And, leverage
            our media services to deliver the right conversations to the right
            audiences.
          </>
        }
      />
      <div style={{ display: 'none' }}>
        <h2>Content Marketing Strategy</h2>
        <h2>Best Creative Agency</h2>
        <h2>Digital Brand Management</h2>
        <h2>Creative Content Marketing</h2>
        <h2>Marketing Agency Near Me</h2>
        <h2>Digital Media Marketing</h2>
        <h2>Content Marketing Strategy</h2>
        <h2>Brand Campaigns</h2>
      </div>
      <ServiceCardSection
        tag="Our Capabilities"
        iconClassName="w-15 h-15"
        title={
          <>Leverage our extensive toolkit for your&nbsp;brand content needs</>
        }
        cards={capabilitiesCreate}
        pageSpecificLayout="grid-cols-2"
      />
      <RedbangleWaySection
        title={
          <div className="md:max-w-[720px]">
            Our creative approach to producing exceptional content
          </div>
        }
        data={redbanglewayCreate}
        image={{
          src: '/img/services/create-process.webp',
          alt: 'create process',
          width: '614',
          height: '774',
        }}
      />
      <FeaturedWorkSection posts={_posts} href="/work/create" />
      <Testimonials
        title={'WHAT OUR CLIENTS SAY'}
        className="py-7.5 md:py-15"
        testimonialData={createTestimonialData}
        type="semi"
      />
      <div id="create-explore">
        <ExploreMoreSection
          type="create"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaScsCreate)}
      </Script>
    </>
  )
}
export default ServiceCCS
