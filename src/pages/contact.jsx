import { useState } from 'react'
import { Marquee } from '@/components/shared'
import { ClientInquiryForm } from '@/components/pages/contact/ClientInquiryForm'
import { JobInquiryForm } from '@/components/pages/contact/JobInquiryForm'
import { CornerArrow } from '../components/icons'
import { SEO } from '@/components/shared/SEO'
import { contactSchema } from '@/components/schema/contact-schema'
import Script from 'next/script'
import Link from 'next/link'
const form = {
  'Client Inquiry': <ClientInquiryForm />,
  'Job Inquiry': <JobInquiryForm />,
}
const Contact = () => {
  const [activeInquiry, setActiveInquiry] = useState('Client Inquiry')

  return (
    <>
      <SEO
        title="Contact Red Bangle for Holistic Marketing Communication, Content Strategy, Integrated Marketing Campaigns & Branded Content Services"
        description="Reach out to Red Bangle the creative advertising agency that offers holistic marketing communication, brand content strategy & brand communication for tailored marketing content – your path to brand growth starts here."
        url="www.redbangle.com/contact-your-creative-agency"
      />

      <section
        className={`py-18 md:pt-23 md:pb-23 overflow-hidden bg-rb-service-grey`}
      >
        <h1 className="invisible pointer-events-none absolute">CONTACT US</h1>
        <div style={{ display: 'none' }}>
          <h2>Contact your Holistic Marketing Agency</h2>
          <h2>Meet your Content Production Agency</h2>
          <h2>Contact your Brand Strategy Solutions provider</h2>
          <h2>Reach your Content Production Services provider</h2>
          <h2>Contact your Content Production Solutions provider</h2>
        </div>
        <Marquee duration={20}>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            Let&apos;s talk
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/lets-talk.webp"
              width="562"
              height="210"
              alt="lets talk"
            />
          </div>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            Contact Us
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/contact-pill.webp"
              width="562"
              height="210"
              alt="contact pill"
            />
          </div>
        </Marquee>
      </section>
      <section className="bg-white">
        <div className="container">
          <ul className="flex gap-4 md:gap-15 py-8 text-sm leading-4 font-medium whitespace-nowrap md:text-5xl font-everett overflow-x-auto">
            {['Client Inquiry', 'Job Inquiry'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveInquiry(item)}
                  className={`${
                    activeInquiry === item
                      ? 'text-rb-red border-b-rb-red'
                      : 'text-rb-black opacity-50 md:opacity-20 border-transparent'
                  }  hover:text-rb-red hover:opacity-100 transition-all border-b-2 md:border-b-0 pb-2 md:pb-0`}
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/collab"
                className="text-rb-black opacity-50 md:opacity-20 hover:opacity-100 focus:opacity-100 transition-all hover:text-rb-red focus:text-rb-red flex items-center justify-center gap-1"
              >
                Collab Inquiry <CornerArrow className="w-5 h-5 md:w-8 md:h-8" />
              </Link>
            </li>
          </ul>
          <div>{form[activeInquiry]}</div>
        </div>
      </section>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(contactSchema)}
      </Script>
    </>
  )
}
Contact.PageLayoutProps = {
  hasContactForm: false,
}
export default Contact
