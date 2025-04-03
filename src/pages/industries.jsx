import { LineArrow } from '@/components/icons'
import { WorkListHeroSection } from '@/components/shared'
import React from 'react'

const Industries = () => {
  return (
    <>
      <WorkListHeroSection
        className="!text-rb-black"
        type="re-imagined industries"
        content="From agriculture, e-commerce, edtech and enterprise solutions to fintech, healthcare, hospitality, IOT and HR solutions, we have designed it all."
      />

      <section className="pt-5 md:py-25">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-20">
            {[
              {
                id: 0,
                img: '/img/industries/fintech.webp',
                title: 'Fintech',
                subtitle: 'Branding Strategy & Voice / Content / Campaigns',
                description:
                  'From online payments to investments we have simplified digital experiences that have touched a million lives.',
                url: '#!',
              },
              {
                id: 1,
                img: '/img/industries/fintech.webp',
                title: 'Fintech',
                subtitle: 'Branding Strategy & Voice / Content / Campaigns',
                description:
                  'From online payments to investments we have simplified digital experiences that have touched a million lives.',
                url: '#!',
              },
              {
                id: 2,
                img: '/img/industries/fintech.webp',
                title: 'Fintech',
                subtitle: 'Branding Strategy & Voice / Content / Campaigns',
                description:
                  'From online payments to investments we have simplified digital experiences that have touched a million lives.',
                url: '#!',
              },
              {
                id: 3,
                img: '/img/industries/fintech.webp',
                title: 'Fintech',
                subtitle: 'Branding Strategy & Voice / Content / Campaigns',
                description:
                  'From online payments to investments we have simplified digital experiences that have touched a million lives.',
                url: '#!',
              },
              {
                id: 4,
                img: '/img/industries/fintech.webp',
                title: 'Fintech',
                subtitle: 'Branding Strategy & Voice / Content / Campaigns',
                description:
                  'From online payments to investments we have simplified digital experiences that have touched a million lives.',
                url: '#!',
              },
              {
                id: 5,
                img: '/img/industries/fintech.webp',
                title: 'Fintech',
                subtitle: 'Branding Strategy & Voice / Content / Campaigns',
                description:
                  'From online payments to investments we have simplified digital experiences that have touched a million lives.',
                url: '#!',
              },
            ].map(({ id, img, title, subtitle, description, url }) => (
              <div key={id}>
                <div className="h-[175px] md:h-[272px] overflow-hidden mb-6">
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt={title || ""}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-2xl mb-2 font-everett">
                    {title}
                  </h3>
                  <p className="font-everett text-rb-dune font-medium text-base mb-2">
                    {subtitle}
                  </p>
                  <p className="opacity-90 mb-8 text-base">{description}</p>

                  <a
                    href={url}
                    className="inline-flex gap-2 items-center text-rb-red font-semibold group"
                  >
                    Continue reading
                    <LineArrow className=" max-w-[20px] duration-300 ease-out group-hover:translate-x-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-title md:text-title-md font-bold mb-8 md:mb-18">
            Thoughtfully constructed, <br />
            carefully fashioned
          </h2>

          <div className="flex -mx-4 flex-wrap">
            <div className="w-full md:w-1/3 px-4">
              <h3 className="font-everett font-medium text-xl md:text-3xl mb-4 md:mb-6">
                Fintech
              </h3>

              <div>
                <p className="opacity-80 mb-1 text-sm md:text-base">
                  Brand Strategy
                </p>
                <p className="opacity-80 mb-1 text-sm md:text-base">
                  Content Creation
                </p>
                <p className="opacity-80 mb-1 text-sm md:text-base">
                  Events & Activations
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/3 px-4 ">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-0">
                {[
                  {
                    id: 0,
                    logo: '/img/industries/dummy-logo.svg',
                    companyName: 'Ferns & Petals',
                    companyDescription: 'Television Commercial, Digital Film',
                  },
                  {
                    id: 1,
                    logo: '/img/industries/dummy-logo.svg',
                    companyName: 'Ferns & Petals',
                    companyDescription: 'Television Commercial, Digital Film',
                  },
                  {
                    id: 2,
                    logo: '/img/industries/dummy-logo.svg',
                    companyName: 'Ferns & Petals',
                    companyDescription: 'Television Commercial, Digital Film',
                  },
                  {
                    id: 3,
                    logo: '/img/industries/dummy-logo.svg',
                    companyName: 'Ferns & Petals',
                    companyDescription: 'Television Commercial, Digital Film',
                  },
                  {
                    id: 4,
                    logo: '/img/industries/dummy-logo.svg',
                    companyName: 'Ferns & Petals',
                    companyDescription: 'Television Commercial, Digital Film',
                  },
                  {
                    id: 5,
                    logo: '/img/industries/dummy-logo.svg',
                    companyName: 'Ferns & Petals',
                    companyDescription: 'Television Commercial, Digital Film',
                  },
                ].map(({ id, logo, companyName, companyDescription }) => (
                  <div
                    key={id}
                    className="bg-rb-mercury rounded-lg md:px-4 md:py-12 md:text-center p-4"
                  >
                    <img
                      src={logo}
                      alt={companyName}
                      className="inline-block mb-3 md:mb-8 max-h-8 md:max-h-15 "
                    />
                    <h4 className="font-everett text-sm md:text-xl">
                      {companyName}
                    </h4>
                    <p className=" text-xs md:text-sm text-rb-dune">
                      {companyDescription}
                    </p>
                  </div>
                ))}

                <button className="bg-rb-mercury rounded-lg p-4 md:px-4 md:py-12 text-left md:text-center flex-col md:flex items-center justify-center gap-6">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    className="w-8 md:w-auto h-auto md:inline-block mb-3 md:mb-0"
                  >
                    <circle cx="30" cy="30" r="30" fill="#EF001C" />
                    <path
                      d="M29.781 18.394v23.65M17.956 30.219h23.65"
                      stroke="#fff"
                      strokeWidth="1.752"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h4 className="font-everett text-sm md:text-xl text-rb-red">
                    View all
                  </h4>
                  <p className=" text-xs md:text-sm text-rb-dune">
                    Check out all works in Fintech industry
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Industries
