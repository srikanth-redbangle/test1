import React, { useEffect, useState } from 'react'
import { LineArrow } from '@/components/icons'
import { schemaccsCreate } from '@/components/schema/ccs-create-schema'
import {
  LineHeading,
  TrustedBrandsSection,
  WorkListHeroSection,
} from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui'
import { ccsPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import { useFilterObserver } from '@/hooks'
import Script from 'next/script'

export default function CCS({setisPopupOpen}) {
  const _posts = ccsPosts.map(postsMapper)

  const { ref, ...filterProps } = useFilterObserver({
    threshold: 0.3,
  })
  const [filterPopup, setfilterPopup] = useState(0)
  const [careerFilterTabs, setcareerFilterTabs] = useState(0)

  const [selectedIndustry, setSelectedIndustry] = useState([])
  const [selectedBrand, setSelectedBrand] = useState([])

  const clearSelection = () => {
    setSelectedIndustry([])
    setSelectedBrand([])
  }

  const handleCheckboxIndustry = (industry) => {
    if (selectedIndustry.includes(industry)) {
      setSelectedIndustry(selectedIndustry.filter((item) => item !== industry))
    } else {
      setSelectedIndustry([...selectedIndustry, industry])
    }
  }
  const handleCheckboxBrand = (brand) => {
    if (selectedBrand.includes(brand)) {
      setSelectedBrand(selectedBrand.filter((item) => item !== brand))
    } else {
      setSelectedBrand([...selectedBrand, brand])
    }
  }

  function workFilterTabsTrigger(value) {
    return () => {
      setcareerFilterTabs(value)
    }
  }

  const toggleFilterPopup = () => {
    setfilterPopup((filterPopup) => !filterPopup)

    const bodyElement = document.body

    if (!filterPopup) {
      // If the filterPopup is open, adding disable-scroll class
      bodyElement.classList.add('disable-scroll')
      bodyElement.setAttribute('data-lenis-prevent', '')
    } else {
      // If the filterPopup is closed, removing disable-scroll class
      bodyElement.classList.remove('disable-scroll')
      bodyElement.removeAttribute('data-lenis-prevent')
    }
  }

  const uniqueBrands = ['Swiggy', 'Nike', 'Nuebank', 'Vartizo', 'Gucci']
  const uniqueIndustries = [
    'Marketing',
    'Direction',
    'Client Servicing',
    'Creative',
  ]

  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('create-brand'); // Replace 'section-id' with the ID of your section
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
        title="Creative Advertising Agency Portfolio | Red Bangle - Creative Ad Campaigns & Integrated Marketing Campaigns with Exceptional Branded Content & Marketing Communication"
        description="Explore Red Bangle's creative advertising portfolio, showcasing exceptional content strategy , campaign strategy & advertising strategy for creative advertising campaigns & brand communication. Explore our innovative work that drives brand success and engages audiences."
        url="www.redbangle.com/work/creative-campaigns-for-brand-promotions"
      />

      <WorkListHeroSection
        className="bg-rb-torch-red"
        type="create"
        typeTwo="Work Showcase"
        contentClassName="md:max-w-[1025px]"
        pillImg="/img/create-pill.webp"
        alt='ad for pill production company'
        content={
          <>
            Go from creative insights to{' '}
            <h1 className="inline">
              campaign ideas, end-to-end content production
            </h1>
            &nbsp;and distribution in one seamless journey.
          </>
        }
      />
      <div style={{ display: 'none' }}>
        <h2>Creative Agency</h2>
        <h2>Creative Campaigns</h2>
        <h2>Brand Promotions</h2>
        <h2>Ad Campaigns</h2>
        <h2>Advertising Solutions</h2>
      </div>

      <section className="bg-white pt-15 md:pt-30 pb-7.5 md:pb-15">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">
            Explore Case Studies
          </LineHeading>
          <h3 className="text-title md:text-title-md mb-10 md:mb-14 md:max-w-[576px] md:tracking-[-2.08px] font-everett">
            Campaigns and content that moved the needle
          </h3>
          <Button
            suffix={<LineArrow />}
            href="/contact"
            className="w-full md:w-auto !inline-flex"
          >
            CREATE WITH US TODAY
          </Button>
          <div ref={ref}>
            <div
              data-state={filterProps.inView ? 'open' : 'closed'}
              data-visible={filterProps.state == 'closed'}
              className={
                'fixed bottom-10 left-0 right-0 transition-all group opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible flex justify-center z-40'
              }
              style={{ display: 'none' }}
            >
              <Button
                className="justify-between min-w-[180px] !bg-black"
                int
                onClick={() => {
                  filterProps.onOpen()
                  toggleFilterPopup()
                }}
              >
                FILTER
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-24 mt-16 md:mt-18">
              {_posts.map((p) => (
                <ContentPostCard key={p.key} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div id="create-brand">
      <TrustedBrandsSection className="bg-white pt-7.5 pb-15 md:pt-15 md:pb-30" />
      </div>

      <div
        className={`fixed w-full h-full bg-black/20 backdrop-blur-lg inset-0 flex justify-center items-center z-10  ${
          filterPopup
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="bg-white cursor-auto p-4 pt-[70px] md:p-6 rounded-2xl z-[999] flex gap-6 md:gap-10 max-w-[95%] md:max-w-[600px] w-full relative">
          <button
            className="absolute right-18 top-6 border-b-[1px] border-[#111010B2] text-[#111010B2]"
            onClick={clearSelection}
          >
            Clear
          </button>

          <button
            onClick={() => {
              filterProps.onClose()
              toggleFilterPopup()
            }}
            className="w-8 h-8 rounded-full bg-rb-mercury flex items-center justify-center  absolute right-7 top-6"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M11 1 1 11M1 1l10 10"
                stroke="#000"
                strokeWidth="1.667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="pr-6 border-r border-r-rb-stroke">
            <button
              onClick={workFilterTabsTrigger(0)}
              className={`uppercase font-medium text-base md:text-xl mb-4 block duration-300 ease-out ${
                careerFilterTabs === 0 ? 'text-rb-red' : ''
              }`}
            >
              BRANDS
            </button>
            <button
              onClick={workFilterTabsTrigger(1)}
              className={`uppercase font-medium text-base md:text-xl mb-4 block duration-300 ease-out ${
                careerFilterTabs === 1 ? 'text-rb-red' : ''
              }`}
            >
              INDUSTRIES
            </button>
          </div>
          <div
            className={`max-h-[450px] overflow-auto flex-1 ${
              careerFilterTabs === 0 ? '' : 'hidden'
            }`}
            data-lenis-prevent
          >
            {uniqueBrands.map((brand) => (
              <div className="custom-checkbox mb-5" key={brand}>
                <input
                  type="checkbox"
                  name="brand"
                  id={brand}
                  onChange={() => handleCheckboxBrand(brand)}
                  checked={selectedBrand.includes(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>
          <div
            className={`max-h-[360px] md:max-h-[450px] overflow-auto flex-1 ${
              careerFilterTabs === 1 ? '' : 'hidden'
            }`}
            data-lenis-prevent
          >
            {uniqueIndustries.map((industry, index) => (
              <div className="custom-checkbox mb-5" key={index}>
                <input
                  type="checkbox"
                  name="industry"
                  id={industry}
                  onChange={() => handleCheckboxIndustry(industry)}
                  checked={selectedIndustry.includes(industry)}
                />
                <label htmlFor={industry}>{industry}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaccsCreate)}
      </Script>
    </>
  )
}
