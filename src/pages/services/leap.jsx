import { scsThinkSchema } from '@/components/schema/scs-think-schema'
import {
  ServiceCardSection,
  ServiceHeroSection,
  ExploreMoreSection,
  RedbangleWaySection,
  FeaturedWorkSection,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
  capabilitiesSCS,
  redbanglewayThink,
  serviceVideos,
} from '@/content/services'
import { similarPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const ServiceSCS = ({setisPopupOpen}) => {
  const _posts = similarPosts.map(postsMapper)
  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('leap-explore'); // Replace 'section-id' with the ID of your section
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
        title="Best Creative Advertising Agency Globally | Red Bangle - Get B2C & B2B Marketing Communication Strategy, Content Strategy, Marketing Campaigns, Branded Content & more."
        description="Best global creative advertising agency across US, UK, UAE, AUS, IND. Red Bangle offers expert b2c & b2b marketing communication strategy & branded content strategy for creative ad campaigns, integrated marketing campaigns services that boost your brand engagement & visibility"
        url="www.redbangle.com/service/holistic-marketing-agency-for-creative-content-marketing"
      />
      <ServiceHeroSection
        className="bg-rb-scarlet"
        type="LEAP"
        video={serviceVideos.think.video}
        fullVideo={serviceVideos.think.fullVideo}
        ctaText="BOOK A DISCOVERY CALL"
        ctaLink="/contact"
        content={
          <>
            <h1 className="inline">Strategic content solutions</h1>&nbsp;for
            your brand. We combine our knowledge of integrated marketing
            solutions with analysis and creativity, to offer concrete strategy
            blueprints, expand audience reach and fuel brand growth.
          </>
        }
      />
      <div style={{ display: 'none' }}>
        <h2>Marketing Agency</h2>
        <h2>Holistic Marketing</h2>
        <h2>Marketing Content Strategy</h2>
        <h2>Digital Brand Management</h2>
        <h2>Creative Content Marketing</h2>
        <h2>Marketing Agency Near Me</h2>
        <h2>Digital Media Marketing</h2>
        <h2>Content Marketing Strategy</h2>
        <h2>Full Service Advertising Agency</h2>
      </div>
      <ServiceCardSection
        tag="Our Capabilities"
        title={
          <div className="md:max-w-[620px]">
            Unlocking strategic growth for your business
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesSCS}
      />
      <RedbangleWaySection
        data={redbanglewayThink}
        image={{
          src: '/img/services/think-process.gif',
          alt:'think process',
          width: '500',
          height: '500',
        }}
      />
      {/* <FeaturedWorkSection posts={_posts} href="/leap" /> */}
      {/* <Testimonials className="py-7.5 md:py-15" /> */}
      <div id="leap-explore">
        <ExploreMoreSection
          type="think"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(scsThinkSchema)}
      </Script>
    </>
  )
}
export default ServiceSCS
