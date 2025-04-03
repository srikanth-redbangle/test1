import {
  ServiceCardSection,
  ServiceHeroSection,
  Testimonials,
  ExploreMoreSection,
  FeaturedPlayWorkSection,
  RedbangleAdvantageSection,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
  // approach,
  capabilitiesPlay,
  playStats,
  serviceVideos,
  playAdvantage,
} from '@/content/services'
import { formatPlayPosts } from '@/utils/formate'
import { ecsPlaySchema } from '@/components/schema/ecs-play-schema'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { getPlayWorks } from '@/utils/graphql'
import { StatsPlay } from '@/components/shared/sections/StatsPlay'
import { useEffect, useState } from 'react'

const ServiceECS = ({ works, tags, setisPopupOpen }) => {
  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('play-explore'); // Replace 'section-id' with the ID of your section
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
        title="Creative Advertising Agency | Best In Branded Content, Video Content, Marketing Content & Brand Communication | Red Bangle"
        description="Red Bangle is an integrated brand content agency specializing in creative advertising campaigns & branded marketing content, with comprehensive content strategy for your integrated marketing campaigns. Connect with Red Bangle to elevate your brand story with top-tier branded communication."
        url="www.redbangle.com/service/video-production-agency-for-corporate-video"
      />

      <ServiceHeroSection
        className="bg-rb-rosa"
        type="play"
        video={serviceVideos.play.video}
        fullVideo={serviceVideos.play.fullVideo}
        ctaText="Work with us"
        ctaLink="/contact"
        content={
          <>
            Power every play button with brand content that rocks. Our{' '}
            <h1 className="inline">
              storytellers, producers and technology fuel campaigns
            </h1>
            &nbsp;and content across audiences and languages. Scale your content
            with us.
          </>
        }
      />

      <div style={{ display: 'none' }}>
        <h2>Video Production Agency</h2>
        <h2>Corporate Video</h2>
        <h2>Explainer Video Companies</h2>
        <h2>Animated Video Explainer</h2>
        <h2>Ad Film Makers</h2>
      </div>
      <StatsPlay data={playStats} className="pt-15 md:pt-30" />
      <ServiceCardSection
        tag="Our Capabilities"
        title={
          <div className="md:max-w-[700px]">
            End-to-end film and video production to fuel your brand
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesPlay}
        pageSpecificLayout="grid-cols-2"
      />
      <RedbangleAdvantageSection data={playAdvantage} />
      <FeaturedPlayWorkSection works={works ?? []} featuredTitle tags={tags} />

      <Testimonials title={'WHAT OUR CLIENTS SAY'} className="py-7.5 md:py-15" type="semi" />
      <div id="play-explore">
        <ExploreMoreSection
          type="play"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(ecsPlaySchema)}
      </Script>
    </>
  )
}
// export async function getStaticProps() {
//   const { data } = await getFeaturedPlayWorks()

//   return {
//     props: {
//       works: formatPlayPosts(data?.works?.nodes),
//     },
//   }
// }
export async function getStaticProps() {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes)
  const tags = works.reduce((prev, w) => {
    w.tags?.forEach((t) => (prev[t.slug] = t.name))
    return prev
  }, {})
  const tagProp = Object.entries(tags).map(([k, v], index) => ({
    key: index,
    label: v,
    value: k,
  }))
  const filtered = tagProp.filter((f) => f.value != 'featured-work').sort()

  return {
    props: {
      works,
      tags: [tagProp.find((t) => t.value == 'featured-work'), ...filtered],
    },
  }
}
export default ServiceECS
