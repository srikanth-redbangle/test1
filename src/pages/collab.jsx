import { useState } from 'react'
import {
  Marquee,
  SEO,
  Testimonials,
  TrustedBrandsSection,
} from '@/components/shared'
import { Accordion, Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
// import { Swiper, SwiperSlide } from 'swiper/react'
import { CollabForm } from '@/components/pages/collab/CollabForm'
import Script from 'next/script'
import { collabSchemna } from '@/components/schema/collab-schema'
import { CollabFormRecreate } from '@/components/pages/collab/CollabFormRecreate'

const TNC = [
  {
    key: 0,
    title: 'How do I sign up?',
    content:
      'To sign up, click on the "Sign Up" or "Register" button on the Red Bangle homepage and then follow the prompts to provide your information.',
  },
  {
    key: 1,
    title: 'What information do I need to provide during the sign-up process?',
    content:
      'You will typically need to provide basic details like your name, email address, and password.',
  },
  {
    key: 2,
    title: ' Is my information secure during the sign-up process?',
    content:
      'Yes, we take your privacy seriously and use industry-standard encryption to protect your data.',
  },
  {
    key: 3,
    title: 'Who can apply?',
    content:
      'We welcome individuals and independent studios with expertise in copy, design, production, direction, music composition and post production to sign up to our collaborative.',
  },
  {
    key: 4,
    title: 'Can businesses also apply?',
    content:
      'Absolutely! Independent studios and specialized creative businesses are welcome to apply and explore collaborative opportunities with us.',
  },
  {
    key: 5,
    title: 'What are the legal terms and conditions?',
    content:
      'When you sign up, you will be asked to accept our Terms and Conditions. Click on the document link to go through the same in detail. This document lays out terms that protect our clients, you and us.',
  },
  {
    key: 6,
    title: 'Can I edit my profile after submitting my application?',
    content:
      'Yes, you can edit your profile at any time after registering with us.',
  },
  {
    key: 7,
    title: 'How do I reset my password if I forget it?',
    content:
      'Using the “Forgot Password” button on the login page will lead you to the password reset process.',
  },
  {
    key: 8,
    title: 'What is an Incomplete profile?',
    content:
      'We would consider a profile incomplete if the email ID is not verified. Additionally, a profile will be classified as incomplete if it lacks vital information such as an active phone number, working portfolio links, etc.',
  },
  {
    key: 9,
    title: 'Is there a fee associated with signing up or using the platform?',
    content: 'No. Signing up with us is free.',
  },
]
const Agreement = [
  {
    key: 0,
    title: 'What services does Red Bangle provide?',
    content:
      'Red Bangle offers brand content solutions. This includes content strategy, creative insights and concepts, content production and content experiences through technology. Films and videos are a crucial part of our brand content services.',
  },
  {
    key: 1,
    title: 'How do you pick collaborators for your projects?',
    content:
      'We shortlist collaborators based on their previous work, expertise, fee and availability. Our selection process is meticulous, ensuring that each project is entrusted to the most qualified and capable professionals.',
  },
  {
    key: 2,
    title: "How will I be notified if I'm chosen for a project?",
    content:
      "If you're selected for a project, you'll receive notification via email and a Producer will call you to confirm the gig.",
  },
  {
    key: 3,
    title: "How will I be notified if I'm chosen for a project?",
    content:
      "If you're selected for a project, you'll receive notification via email and a Producer will call you to confirm the gig.",
  },
  {
    key: 4,
    title: 'What does a typical project workflow entail?',
    content: (
      <>
        <div>
          Our project workflow is designed for excellence at every stage and
          typically involves the following.
        </div>
        <div className="mt-4">
          <span className="font-bold">Project Briefing:</span> We brief you on
          everything you need to know to express your interest and availability
          for a project
        </div>
        <div className="mt-4">
          <span className="font-bold">Estimate and Confirmation:</span> Once you
          share a quote for your services, we’ll go through, have any follow on
          discussions and roll out the required paperwork to confirm the terms
          of engagement
        </div>
        <div className="mt-4">
          <span className="font-bold">Project Kick Off:</span> Our producers
          will be in touch with you with all the details necessary for you to
          get started on your work
        </div>
        <div className="mt-4">
          <span className="font-bold">Project Execution:</span> When you do the
          work and we support you with a schedule and any additional information
          you need
        </div>
        <div className="mt-4">
          <span className="font-bold">Reviews:</span> Depending on the type of
          project, there may be both internal and client reviews. Internal
          reviews will be by relevant creative leaders and supervisors at Red
          Bangle. The project schedule will detail out for you the number of
          reviews on a project.
        </div>
        <div className="mt-4">
          <span className="font-bold">Project Delivery:</span> We work on the
          cloud. So, our platform, emails, Google Drive and DropBox are all
          tools we use for specific aspects of a project. Edited videos are to
          be uploaded to our platform, and so are any music and other assets
          purchased - along with their license information.
        </div>
        <div className="mt-4">
          <span className="font-bold">Billing and Payment:</span> Once
          you&apos;ve emailed in your invoice, our producers will confirm that
          the project and files have been handed over, and the payment will be
          processed on the data committed to you.
        </div>
      </>
    ),
  },
  {
    key: 5,
    title: 'Can I publicly share the work I do with or for Red Bangle?',
    content:
      'As a general rule and as per our terms and conditions, collaborators are discouraged from sharing the work on any public domain. This is because we often have service agreements with clients that prevent us from publicly sharing any of the work we create for them. And if any specific work contains confidential client data, then everyone involved has to delete files after handing this over and the work can’t be shared on any public or private domain.',
  },
  {
    key: 6,
    title: 'What can I do on the Red Bangle Platform?',
    content:
      "When collaborating with Red Bangle, our platform offers convenient access to all your project information. You can upload, download, and review project files, including briefs, raw footage, and final outputs directly on the platform. It's the central hub for seamless project workflow between you, our clients and us.",
  },
]
const FAQ = [
  {
    key: 0,
    title: 'What documents are required for vendor empanelment?',
    content:
      'Vendor empanelment with Red Bangle is a straightforward process. We only need two essential documents: a Master Services Agreement and your bank account details.',
  },
  {
    key: 1,
    title: 'What is your payment procedure?',
    content:
      'Payment terms vary between regions and based on the type of engagement. Typically, for a production crew - we pay 50% in advance, and the balance after the shoot is done. In other cases, there may be more phased payments or a single and final payment at the end of the project. Payment terms will be defined in the project confirmation email you will receive.',
  },
  {
    key: 2,
    title: 'What is your standard payment cycle?',
    content:
      'For advances and for final payments  - our payment terms vary based on regions and project type. The specific payment terms on each project are outlined in the project confirmation email you will receive and will be adhered to.',
  },
  {
    key: 3,
    title: 'What happens if there is a delay in the payment due to you?',
    content:
      'We try our best to pay you on the committed dates and we hope that you have delivered on the project on time. In the odd chance that a payment is delayed - it is either due to a miscommunication or because of a technical glitch. Either way, as soon as we become aware of the issue, our Producers will get in touch to discuss a solution. In case you do not hear from us, please reach out to our Producers for a resolution and we will be happy to help.',
  },
]

const createTestimonialData = [
  {
    key: 0,
    quote:
      "We love collaborating with Red Bangle on shoots in NYC and beyond! Their briefs are clear, they're always available when we need them, they adhere to the highest standards of professionalism, and they always pay on time. Red Bangle is exactly the type of company we love working with. Two thumbs way up for Red Bangle!",
    name: 'Max Rosen',
    designation: 'CEO',
    company: 'Indigo Productions, NY',
    image: {
      srcSet:
        '/img/collab/collaborator5.webp 533w, /img/collab/collaborator5.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 1,
    quote:
      'I was contacted by Red Bangle to help produce a livestream in Ho Chi Minh City, Vietnam. Communication was very easy throughout. That was very helpful while working 3000 kilometers apart. The team is young and motivated. Payment was done swiftly. Definitely a great partner to be working with!',
    name: 'Hugo Leenhardt',
    designation: 'Cinematographer',
    company: 'Vietnam',
    image: {
      srcSet:
        '/img/collab/collaborator4.webp 533w, /img/collab/collaborator4.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },

  {
    key: 2,
    quote:
      'I got to work with an amazing team, it was a very smooth and fun experience, the Red Bangle personnel had a really good energy about them and they did their best to ensure everyone was in a good mindset to do the project. It was a really good experience.',
    name: 'Karthik Krishnan',
    designation: 'Cinematographer',
    company: 'India',
    image: {
      srcSet:
        '/img/collab/collaborator10.webp 533w, /img/collab/collaborator10.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 3,
    quote:
      'At Red Bangle there is an opportunity to explore diverse topics. Be it a documentary, digital ad or even a simple corporate film; they have allowed me to go about a creative approach respecting my style of making films.',
    name: 'Gowri Neelavar',
    designation: 'Director',
    company: 'India',
    image: {
      srcSet:
        '/img/collab/collaborator3.webp 533w, /img/collab/collaborator3.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 4,
    quote:
      'Well, we have to say, that working with Red Bangle is always like a very very kind and impersonated manual. You can always ask anything anytime and you get the answer. You are always up to date, very well briefed and also the people at the shooting site are aware and know when and what to do. We as Filmschere, love that.',
    name: 'Mert Beken',
    designation: 'Cinematographer',
    company: 'Germany',
    image: {
      srcSet:
        '/img/collab/collaborator9.webp 533w, /img/collab/collaborator9.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 5,
    quote:
      'This year we had the pleasure of working with the Red Bangle team on two different projects in Las Vegas. Their people were great to work with, and a special shout out to the producers who were our main point of contact for them both. The shoots went off without a hitch, and I believe all parties were very satisfied with the end result. Looking forward to working with them many more times in the future.',
    name: 'Mike Levy',
    designation: 'Levy Production Group',
    company: 'USA',
    image: {
      srcSet:
        '/img/collab/collaborator11.webp 533w, /img/collab/collaborator11.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

const sliderCards = [
  {
    key: 1,
    imgurl: 'img/collab/icon-01.svg',
    alt: 'icon-01',
    title: 'Gigs for you',
    desc: 'Get gigs that suit your skill, experience and location. We curate, so you don’t have to.',
  },
  {
    key: 2,
    imgurl: 'img/collab/icon-02.svg',
    alt: 'icon-02',
    title: 'Top-notch brands',
    desc: 'Work with top-notch brands to create content for marketing, PR and more.',
  },
  {
    key: 3,
    imgurl: 'img/collab/icon-03.svg',
    alt: 'icon-03',
    title: 'On-time Pay',
    desc: 'Our international billings and payments process ensure you get paid on-time.',
  },
  {
    key: 4,
    imgurl: 'img/collab/icon-04.svg',
    alt: 'icon-04',
    title: 'Professionally-run Projects',
    desc: 'Our Creative Project Managers and processes support every workflow - so you can focus on creativity.',
  },
  {
    key: 5,
    imgurl: 'img/collab/icon-05.svg',
    alt: 'icon-05',
    title: 'Collaborate on the cloud',
    desc: 'Our custom-built technology enables easy onboarding, briefing and file sharing.',
  },
  {
    key: 6,
    imgurl: 'img/collab/icon-06.svg',
    alt: 'icon-06',
    title: 'Your Experience Matters',
    desc: 'We believe in long-term relationships and mutual growth. And we bring this attitude to projects with you.',
  },
]

const collaborators = [
  {
    id: 1,
    imgurl: 'img/collab/collaborator1.webp',
    width: '153',
    height: '34',
    alt: 'collaborator1',
    className: 'md:w-[298px] w-[138px]',
    name: 'Najihah Rahim',
    designation: 'Producer',
  },
  {
    id: 2,
    imgurl: 'img/collab/collaborator2.webp',
    width: '153',
    height: '34',
    alt: 'collaborator2',
    className: 'md:w-[298px] w-[138px]',
    name: 'Bryan Kopta',
    designation: 'VO artist',
  },
  {
    id: 3,
    imgurl: 'img/collab/collaborator3.webp',
    width: '153',
    height: '34',
    alt: 'collaborator3',
    className: 'md:w-[298px] w-[138px]',
    name: 'Gowri Neelavar',
    designation: 'Director',
  },
  {
    id: 4,
    imgurl: 'img/collab/collaborator4.webp',
    width: '153',
    height: '34',
    alt: 'collaborator4',
    className: 'md:w-[298px] w-[138px]',
    name: 'Hugo Leenhardt',
    designation: 'DOP',
  },
  {
    id: 5,
    imgurl: 'img/collab/collaborator5.webp',
    width: '153',
    height: '34',
    alt: 'collaborator5',
    className: 'md:w-[298px] w-[138px]',
    name: 'Max Rosen',
    designation: 'CEO,indigo productions',
  },
  {
    id: 6,
    imgurl: 'img/collab/collaborator6.webp',
    width: '153',
    height: '34',
    alt: 'collaborator6',
    className: 'md:w-[298px] w-[138px]',
    name: 'Kimberly Young',
    designation: 'VO artist',
  },
  {
    id: 7,
    imgurl: 'img/collab/collaborator7.webp',
    width: '153',
    height: '34',
    alt: 'collaborator7',
    className: 'md:w-[298px] w-[138px]',
    name: 'Kostis Nikolas',
    designation: 'DOP',
  },
  {
    id: 8,
    imgurl: 'img/collab/collaborator8.webp',
    width: '153',
    height: '34',
    alt: 'collaborator8',
    className: 'md:w-[298px] w-[138px]',
    name: 'Luke Milano',
    designation: 'DOP',
  },
  {
    id: 9,
    imgurl: 'img/collab/collaborator9.webp',
    width: '153',
    height: '34',
    alt: 'collaborator9',
    className: 'md:w-[298px] w-[138px]',
    name: 'Mert Beken',
    designation: 'Producer',
  },
  {
    id: 10,
    imgurl: 'img/collab/collaborator10.webp',
    width: '153',
    height: '34',
    alt: 'collaborator10',
    className: 'md:w-[298px] w-[138px]',
    name: 'Karthik Krishnan',
    designation: 'DOP',
  },
  {
    id: 11,
    imgurl: 'img/collab/collaborator11.webp',
    width: '153',
    height: '34',
    alt: 'collaborator11',
    className: 'md:w-[298px] w-[138px]',
    name: 'Mike Levy',
    designation: 'Producer',
  },
  {
    id: 6,
    imgurl: 'img/collab/collaborator12.webp',
    width: '153',
    height: '34',
    alt: 'collaborator12',
    className: 'md:w-[298px] w-[138px]',
    name: 'Toby Ricketts',
    designation: 'VO artist',
  },
]

const steps = [
  {
    id: 1,
    number: '01',
    header: 'Sign Up: ',
    text: 'Begin your journey with the sign-up form. This form serves as your gateway to becoming a part of our global collaborative.',
  },
  {
    id: 2,
    number: '02',
    header: 'Login: ',
    text: 'Once you sign up, you will receive an email invite from us. Use this to login to our platform, where you can create a profile that’s visible to our Producers and Project Managers.',
  },
  {
    id: 3,
    number: '03',
    header: 'Create Your Profile: ',
    text: 'Fill in the profile section on our platform by sharing your skills, portfolio, fees and contact details. The more details you add, the easier it gets for our team to match you to future projects.',
  },
  {
    id: 4,
    number: '04',
    header: 'Meet and Greet: ',
    text: 'We handpick the folks we work with. Therefore, once you’ve created a complete profile, one of our Producers will get in touch to get to know you and your work.',
  },
  {
    id: 5,
    number: '05',
    header: 'Getting Gigs: ',
    text: 'For every client brief, we curate collaborators that match the skill, experience and location requirement (if any). So sit back, while lady luck gets us collaborating soon.',
  },
  {
    id: 6,
    number: '06',
    header: 'Stay in Touch: ',
    text: 'We love hearing from our collaborators. And we know that you are always up to new things, so feel free to write in to our Producers and share your latest work and location.',
  },
]

const Collab = () => {
  const [modal, setModal] = useState(false)

  const modalTrigger = () => {
    setModal((state) => !state)
    if (modal) {
      document.body.style.overflow = 'hidden' // Lock scroll
    } else {
      document.body.style.overflow = 'visible' // Unlock scroll
    }
  }

  return (
    <>
      <SEO
        title="Join The Collab | Bring Brand Communication & Creative Advertising to life for brands across the globe."
        description="Collaborate with us to create video content, brand marketing content for integrated marketing campaigns with creative advertising - wherever you are, whether you are a studio or a freelancer."
        url="www.redbangle.com/film-and-video-collaborative-network"
      />
      <section className="py-14 md:py-24 bg-rb-mercury">
        <div className="container">
          <h1 className="uppercase mb-6 md:mb-18 font-everett font-medium text-[56px] leading-[1.07] tracking-[-0.89px] md:text-[110px] md:leading-[122px] md:tracking-[-1.76px] ">
            GET CREATING FOR GLOBAL BRANDS
          </h1>
          <div style={{ display: 'none' }}>
            <h2>Work With Us In Creative Agency As A Collaborator</h2>
            <h2>Join Our Global Network Of Collaborators</h2>
            <h2>
              Collaboration, Freelancing, Creative Gigs, Video Production, Film
              Production
            </h2>
          </div>

          <p className="md:text-[32px] font-semibold md:leading-10 leading-5 tracking-[-0.56px] md:tracking-[-1.28px]">
            From directors and cinematographers to writers and graphic designers - we are always on the lookout for amazing independent talent. Collaborate with us on professionally-run projects.
          </p>
          <div className="flex md:flex-row flex-col gap-3 mt-10 md:mt-16">
            <Button
              onClick={modalTrigger}
              className="font-bold  w-full md:w-auto !inline-flex uppercase"
              suffix={<LineArrow hover />}
            >
              Collab with us
            </Button>
            <Button
              className="font-bold  w-full md:w-auto !inline-flex uppercase "
              intent="p-secondary"
              href="https://collab.redbangle.com/login"
              target="_blank"
              suffix={<LineArrow hover />}
            >
              Login to account
            </Button>
          </div>
        </div>
      </section>
      <TrustedBrandsSection
        className="bg-white py-12 md:py-30"
        heading="COLLABORATE FOR AMBITIOUS BRANDS"
      />
      <section className="py-14 md:py-24 bg-rb-mercury overflow-hidden">
        <div className="container">
          <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
            Join our Global Film Collaborative
          </div>

          <div className="flex gap-6 md:flex-row flex-col-reverse">
            <div className="w-full md:w-8/12 grid md:grid-cols-2 grid-cols-1 gap-6">
              {sliderCards.map(({ key, imgurl, alt, title, desc }) => (
                <div
                  key={key}
                  className="bg-white py-6 md:py-8 px-5 md:px-6 rounded-md md:rounded-lg "
                >
                  <div className=" text-black">
                    <img src={imgurl} alt={alt} />
                    <div className="mt-4 mb-2 md:mb-[6px] text-[16px] leading-[1.1] font-medium font-everett md:text-input-large">
                      {title}
                    </div>
                    <div className="text-sm md:text-[16px] md:leading-[1.5] opacity-80">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:h-full h-auto md:w-4/12">
              <picture>
                <source
                  srcSet="img/collab/global-collaborators.webp"
                  media="(min-width:768px)"
                />
                <img
                  className="overflow-hidden object-cover"
                  src="img/collab/global-collaborators-mweb.webp"
                  alt="global collaborators"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-30 overflow-hidden">
        <div className="container">
          <div className="text-title md:text-title-md font-everett ">
            Featured Collaborators
          </div>
        </div>
        <div className="mt-8 md:mt-16">
          <Marquee duration={60}>
            <div className="flex items-center">
              {collaborators
                .slice(0, collaborators.length / 2)
                .map(
                  ({
                    id,
                    imgurl,
                    width,
                    height,
                    className,
                    alt,
                    name,
                    designation,
                  }) => (
                    <div key={id} className="mx-5">
                      <img
                        src={imgurl}
                        loading="lazy"
                        alt={alt}
                        width={width}
                        height={height}
                        className={className}
                      />
                      <div className="text-[22px] leading-[1.09] font-everett font-medium text-black my-2">
                        {name}
                      </div>
                      <div className="text-[16px] leading-[1.12] font-opensans text-[#808080] uppercase">
                        {designation}
                      </div>
                    </div>
                  )
                )}
            </div>
          </Marquee>
          <div className="mt-8"></div>

          <Marquee duration={60} direction={-1}>
            <div className="flex items-center">
              {collaborators
                .slice(collaborators.length / 2)
                .map(
                  ({
                    id,
                    imgurl,
                    width,
                    height,
                    className,
                    alt,
                    name,
                    designation,
                  }) => (
                    <div key={id} className="mx-5">
                      <img
                        src={imgurl}
                        loading="lazy"
                        alt={alt}
                        width={width}
                        height={height}
                        className={className}
                      />
                      <div className="text-[22px] leading-[1.09] font-everett font-medium text-black my-2">
                        {name}
                      </div>
                      <div className="text-[16px] leading-[1.12] font-opensans text-[#808080] uppercase">
                        {designation}
                      </div>
                    </div>
                  )
                )}
            </div>
          </Marquee>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="text-title md:text-title-md font-everett text-center md:text-left md:max-w-[830px] mb-12 md:mb-20">
            Working together is an easy process. Here&apos;s how you can get
            started.
          </div>
          <div className="flex  md:flex-row flex-col md:gap-[48px] gap-[32px] items-stretch">
            <div className="w-full md:w-5/12 ">
              <div className="h-full">
                <img
                  src="img/collab/get-started.webp"
                  alt="get-started"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12">
              {steps.map(({ id, number, header, text }) => (
                <div
                  key={id}
                  className="mb-8 last:mb-10 text-[16px] leading-[26px] md:text-[20px] tracking-[-0.16px] font-medium font-everett"
                >
                  <span className="text-rb-red">{number}</span>&nbsp;
                  <span className="text-black">{header}</span>
                  <span className="tracking-[-0.256px] font-opensans font-normal text-[#808080]">
                    {text}
                  </span>
                </div>
              ))}
              <Button
                onClick={modalTrigger}
                className="font-bold uppercase w-full md:w-auto !inline-flex"
                suffix={<LineArrow hover />}
              >
                Collab with us now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Testimonials
        title={'WHAT OUR COLLABORATORS SAY'}
        className="py-12 md:py-30"
        testimonialData={createTestimonialData}
        type="semi"
      />
      <section className="bg-rb-mercury py-12 md:py-24">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-5/12">
              <div className="static md:sticky top-[100px]">
                <h3 className="max-w-[250px] mb-8 text-title-md-tight font-everett text-rb-black">
                  Frequently Asked Questions
                </h3>
                {/* <div className="text-[16px] md:text-[20px] leading-[1.5] text-rb-black/80">
                  For any queries please contact us at{' '}
                  <a className="text-rb-red" href="mailto:hello@redbangle.com">
                    hello@redbangle.com
                  </a>
                </div> */}
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <div className="text-[16px] leading-[1.12] tracking-[-0.64px] md:text-accordion-large font-medium uppercase font-everett md:mt-0 md:mb-6 mt-13 mb-5">
                Joining our Collaborative
              </div>
              <Accordion
                data={TNC?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />

              <div className="text-[16px] leading-[1.12] tracking-[-0.64px] md:text-accordion-large font-medium uppercase font-everett md:mt-16 md:mb-6 mt-8 mb-5">
                WORKING WITH RED BANGLE
              </div>
              <Accordion
                data={Agreement?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />
              <div className="text-[16px] leading-[1.12] tracking-[-0.64px] md:text-accordion-large font-medium uppercase font-everett md:mt-16 md:mb-6 mt-8 mb-5">
                PAYMENTS
              </div>
              <Accordion
                data={FAQ?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <div
        data-lenis-prevent
        className={`fixed bg-white z-[9999] inset-0 w-full h-full full-width-modal cursor-auto ${modal ? 'modal-open' : ''
          }`}
      >
        {/* <CollabForm modalTrigger={modalTrigger} /> */}
        <CollabFormRecreate modalTrigger={modalTrigger} />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(collabSchemna)}
      </Script>
    </>
  )
}

Collab.PageLayoutProps = {
  hasContactForm: false,
}

export default Collab
