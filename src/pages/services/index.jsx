import { Button } from '@/components/ui'
import {
  Marquee,
  Scrollspy,
  TrustedBrandsSection,
  WorkListHeroSection,
} from '@/components/shared'
import { LineArrow } from '@/components/icons'
import { services } from '@/content/services'
// import { AwardsSection } from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import { serviceSchema } from '@/components/schema/serviceSchema'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const ServicesIndex = ({setisPopupOpen}) => {

  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('trusted-popup'); // Replace 'section-id' with the ID of your section
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
        title="Get Holistic Marketing Communication, Branded Content Strategy, Creative Ad Campaigns, Digital Marketing Campaigns, Integrated Marketing Campaigns, Marketing Content Services | Red Bangle - Creative Advertising Agency"
        description="Red Bangle offers Holistic Marketing Communication, Campaign & Content Strategy for B2C & B2B Marketing Communication, Integrated Marketing Campaigns, Creative Advertising Campaigns and more! Drive exponential growth for your brand communication with strategic thinking, creative ideation and effortless brand marketing content."
        url="www.redbangle.com/creative-agency-services-for-brand-content"
      />

      <section
        className={`py-18 md:pt-30 md:pb-[162px] overflow-hidden bg-rb-service-grey`}
      >
        {/* <h1 className="hidden">what we do</h1> */}

        <div style={{ display: 'none' }}>
          <h2>Integrated Marketing Agency Expertise</h2>
          <h2>Holistic Marketing Agency Solutions</h2>
          <h2>Brand Strategy Services</h2>
          <h2>Content Production Agency</h2>
          <h2>Brand Strategy Solutions</h2>
          <h2>Content Production Services</h2>
          <h2>Content Production Solutions</h2>
          <h2>Content Production Expertise</h2>
          <h2>What We Do</h2>
          <h2>Creative Agency</h2>
          <h2>Best Creative Agency Service</h2>
        </div>
        <Marquee duration={20}>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            what we do
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/services/service-pill-1.webp"
              width="562"
              height="210"
              alt="service pill"
            />
          </div>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            what we do
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/services/service-pill-2.webp"
              width="562"
              height="210"
              alt="Service pill"
            />
          </div>
        </Marquee>
        <div className="container">
          <div className="w-full text-base leading-[21px] md:text-[32px] md:leading-9.5 md:tracking-[-1.28px] mt-10 md:mt-18 font-semibold max-w-[968px]">
            <h1 className="inline">
              Strategic thinking, creative ideation and scalable global
              production
            </h1>
            &nbsp;that can drive exponential growth for your brand.
          </div>

          <Button
            href="/contact"
            suffix={<LineArrow hover />}
            className="w-full md:w-auto mt-10 md:mt-16 md:max-w-max"
          >
            WORK WITH US
          </Button>
        </div>
      </section>
      <Scrollspy centered>
        {services.map((s, si) => (
          <section
            key={s.key}
            data-spy-id={s.key}
            data-spy-title={s.label}
            className={`overflow-hidden group ${
              si != 0 ? 'mt-15 md:mt-30' : ''
            }`}
          >
            <div className="xl:flex md:justify-center md:px-4 xl:px-0">
              <div className="flex px-4 md:px-0 md:-mx-4 lg:-mx-8 flex-wrap group-odd:flex-row-reverse">
                <div className="w-full md:px-4 md:w-1/2 lg:px-8 self-center flex-shrink-0">
                  <div className="md:h-full md:group-even:float-right md:group-odd:float-left overflow-hidden">
                    {/* <img alt="" {...s.image} className="w-full" /> */}
                    <video
                      {...s.video}
                      className="cover-video max-w-max"
                      autoPlay
                      muted
                      playsInline
                      loop
                    />
                  </div>
                </div>
                <div className="w-full md:px-4 md:w-1/2 lg:px-8 self-center md:max-w-[578px]">
                  <h3 className="font-everett font-medium mt-5 md:mt-0 mb-3 md:mb-4 text-xl leading-5.5 tracking-[-0.8px] md:text-[32px] md:leading-9.5 md:tracking-[-1.28px]">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-lg md:leading-6.5 tracking-[-0.28px] md:tracking-[-0.36px] md:max-w-[471px]">
                    {s.content}
                  </p>
                  <div className="gap-x-7 items-end grid md:grid-cols-2 my-7 md:my-10 text-sm md:text-base md:leading-5 tracking-[-0.16px] font-semibold">
                    <div>
                      {s.steps
                        .slice(0, Math.ceil(s.steps.length / 2))
                        .map((step, i) => (
                          <div
                            key={i}
                            className="py-4 md:py-5 border-b border-b-rb-black border-opacity-15"
                          >
                            {/* {(i + 1).toString().padStart(2, '0')}
                        <span className="text-rb-red">.</span>  */}
                            {step}
                          </div>
                        ))}
                    </div>

                    <div>
                      {s.steps
                        .slice(Math.ceil(s.steps.length / 2))
                        .map((step, i) => (
                          <div
                            key={i}
                            className="py-4 md:py-5 border-b border-b-rb-black border-opacity-15"
                          >
                            {/* {(i + 1).toString().padStart(2, '0')}
                        <span className="text-rb-red">.</span> */}
                            {step}
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-[15px] md:gap-3">
                    <Button
                      href={s.detail}
                      suffix={<LineArrow hover />}
                      sameLine
                      className="md:w-auto"
                    >
                      FIND OUT MORE
                    </Button>
                    {s.work ? (
                      <Button
                        href={s.work}
                        sameLine
                        intent="p-secondary"
                        suffix={<LineArrow hover />}
                        className="md:w-auto"
                      >
                        EXPLORE OUR WORK
                      </Button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Scrollspy>
      <div className="" id="trusted-popup">
      <TrustedBrandsSection className="py-15 md:py-30" />
      </div>
      {/* <AwardsSection className="pb-15 md:pb-30" /> */}
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
    </>
  )
}

export default ServicesIndex
