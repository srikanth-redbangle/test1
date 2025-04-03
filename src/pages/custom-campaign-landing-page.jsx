import React, { useEffect, useState } from 'react'
import {
  FeaturedPlayWorkSection,
  Marquee,
  RedbangleAdvantageSection,
  SEO,
  StatsSection,
  Testimonials,
  VideoModal,
  icons,
} from '@/components/shared'
import { playAdvantage, playStats, serviceVideos } from '@/content/services'
import { useRouter } from 'next/router'
import { getPlayWorkDetails, getPlayWorks } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'
import Script from 'next/script'
import { endToEndVideoProdSchema } from '@/components/schema/end-to-end-vp-schema'
import { StatsETE } from '@/components/shared/sections/StatsETE'
import { EndToEndContactForm } from '@/components/end-to-end-video-production/EndToEndContactForm'
import { ExploreSolutions } from '@/components/end-to-end-video-production/ExploreSolutions'
import Team from '@/components/end-to-end-video-production/Team'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { ContactSection } from '@/components/end-to-end-video-production/ContactSection'
import CreateContent from '@/components/end-to-end-video-production/CreateContent'

const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
}
const EndToEndVideoProduction = ({ works, tags }) => {
  const [modal, setModal] = useState(INIT_MODAL)
  const router = useRouter()
  const pathname = router.pathname

  useEffect(() => {
    if (router.query?.work) {
      setModal((prev) => ({ ...prev, loading: true, open: true }))
      getPlayWorkDetails(router.query?.work)
        .then((data) => {
          if (data.status == 'success') {
            setModal((prev) => ({
              ...prev,
              loading: false,
              video: data?.data?.work,
            }))
          }
        })
        .catch((err) => {
          setModal(INIT_MODAL)
        })
    } else {
      setModal(INIT_MODAL)
    }
  }, [router.query])

  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }
  return (
    <>
      <SEO
        title="Full-service Film and Video Production Agency"
        description="We are a premier film & video production agency, offering end-to-end services for all your video content needs. From concept to final cut, we’ve got you covered"
        url="www.redbangle.com/end-to-end-video-production/"
        keywords="Film And Video Production Agency, End To End Video Production Agency, Video Production Agency In India"
      />
      <section className="bg-rb-mercury py-15">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 px-4 my-auto">
              <h1 className="text text-[32px] md:text-[48px] lg:text-[60px] text-[#111010CC] font-everett mb-6 tracking-[-0.65px] md:tracking-[-1.15px] font-medium leading-[100%] uppercase max-w-[538px]">
                Transforming Your <span className='text-[#EF001C]'>Digital</span> Presence
              </h1>
              <div style={{ display: 'none' }}>
                <h2>Make ad films, corporate films, explainer videos, YouTube content and more with Red Bangle. We&apos;ve got the storytellers, filmmakers, producers and the tech-enabled workflows to fuel brand growth.</h2>
              </div>

              <p className="text-base max-w-[433px] font-semibold tracking-[-1px]">
                Make ad films, corporate films, explainer videos, YouTube content and more with Red Bangle. We&apos;ve got the storytellers, filmmakers, producers and the tech-enabled workflows to fuel brand growth.
              </p>

              <div className="pt-12 overflow-hidden">
                <div className="marquee-side-blur">
                  <Marquee duration={40}>
                    <div className="flex items-center">
                      {icons
                        .slice(0, icons.length / 2)
                        .map(({ name, id, ...rest }) => (
                          <div key={id} className="mx-6 md:mx-12">
                            <img
                              src={`/img/logos/${name}`}
                              loading="lazy"
                              alt=""
                              {...rest}
                            />
                          </div>
                        ))}
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 px-4 mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-lg md:text-2xl font-semibold mb-8">
                  Share your details and we&apos;ll reach out to you within 24
                  hours
                </h3>
                <EndToEndContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ExploreSolutions />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <CreateContent/>
      </div>
      <div>
        <ContactSection/>
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(endToEndVideoProdSchema)}
      </Script>
    </>
  )
}
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
      // tags: [tagProp.find((t) => t.value == 'featured-work'), ...filtered],
    },
  }
}
export default EndToEndVideoProduction