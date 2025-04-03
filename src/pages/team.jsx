import { teamSchema } from '@/components/schema/team-schema'
import { LineHeading, RollupNumber } from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import styles from '@/styles/sections/StatsSection.module.scss'
import { useLenis } from '@studio-freight/react-lenis'
import Script from 'next/script'
import { Fragment, useEffect, useState } from 'react'

const teamData = [
  {
    name: 'Lakshmi Rebecca',
    title: 'Co-founder',
    img: '/img/our-team/lakshmi-rebecca.webp',
    lgimg: '/img/our-team/lakshmi-rebecca_2x.webp',
    content: (
      <>
        Storyteller, visionary, award-winning YouTuber and ex-model.
        <br />
        <br />
        Lakshmi’s career started as social work in education and transitioned to
        social research and investigative journalism for documentary films for
        the BBC and Discovery. After briefly dabbling with modelling, she moved
        into content - anchoring international business events, crafting a
        YouTube series on social enterprises in India and running a production
        house.
        <br />
        <br />
        Drawing upon these experiences in storytelling and content across the
        United Kingdom, India and Sri Lanka - Lakshmi founded Red Bangle. Her
        vision is for Red Bangle to grow into a global tech-enabled creative
        enterprise.
        <br />
        <br />
        Lakshmi is a strong believer in individual potential, collaboration and
        customer-centric solutioning.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/lakshmirebecca/',
  },
  {
    name: 'Sunil Patrapati',
    title: 'Co-founder',
    img: '/img/our-team/sunil-patrapati.webp',
    lgimg: '/img/our-team/sunil-patrapati_2x.webp',
    content: (
      <>
        22 years of building technology innovations across gaming, content
        production and more. A sharp mind with the need for deep enquiry and
        context-driven problem-solving through technology.
        <br />
        <br />
        Sunil’s past successes include developing games, and building technology
        solutions for multinational pharma and manufacturing companies as well
        as a nation-wide technology-driven solution for adult literacy amongst
        several other achievements. He’s an avid researcher on many things tech,
        a passionate biker and foodie, and a great people and programme manager.
        <br />
        <br />
        Sunil has a keen eye on the future, and takes a holistic approach to
        growth. He believes in risk-taking - all while adopting a frugal
        approach to business growth. His vision is to create the CISCO of brand
        content - global, agile and bold.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/sunil-patrapati-020023a/',
  },
  {
    name: 'Vivek Chandra Shenoy',
    title: 'Vice President - Strategy & Marketing',
    img: '/img/our-team/vivek-chandra-shenoy.webp',
    lgimg: '/img/our-team/vivek-chandra-shenoy_2x.webp',
    content: (
      <>
        Joyful, ambitious. A corporate leader who loves cutting through the
        bullshit. Vivek loves crafting effective communication strategies and
        steering business units to success.  <br />
        <br />
        Vivek has worked in advertising for 16 years - in organisations such as
        JWT, McCann, RK Swamy BBDO, and Ogilvy. And solutioned for brands like
        Louis Philippe, Allen Solly, Diageo, ITC Foods, TVS Motors, Himalaya,
        and Mars Petcare. He’s also dabbled with a food truck business.  <br />
        <br />
        He’s a people person who loves reading about human behaviour and
        psychology.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/vivekchandrashenoy/',
  },
  {
    name: 'Rimona Ganapathy',
    title: 'Senior Vice President - Creative Services',
    // img: '/img/our-team/RIMONA_GANAPATHY.jpg',
    img: '/img/our-team/RIMONA0.jpg',
    lgimg: '/img/our-team/RIMONA_GANAPATHY.jpg',
    content: (
      <>
        Instinctive, insightful, and easily excitable, nothing gives Rimona a bigger kick than watching the collaborative process result in great work.
        <br />
        <br />
        She has a combined experience of 25 years from her career in advertising and as co-founder of a D2C personal care brand she strongly believes that building desirability and impactful storytelling are the key to a brand’s success.
        <br />
        <br />
        During her time leading creative communications at agencies like MullenLowe Lintas and Temple Advertising she played a pivotal role in creating memorable and effective campaigns for Indian consumer brands like Swiggy, Britannia, Tanishq, Fastrack, Indigo Nation, and Jealous 21.
        <br />
        <br />
        She now heads the Creative Services team at Red Bangle and is learning new things and unlearning old in equal measure.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/rimona-ganapathy-92b74520a/',
  },
  {
    name: 'Ankur Bora',
    title: 'Senior Vice President - Client Services',
    img: '/img/our-team/ankur-bora.webp',
    alt: 'Ankur Bora',
    lgimg: '/img/our-team/ankur-bora_2x.webp',
    content: (
      <>
        Full of warmth and ambition. A dedicated and intuitive leader, and a
        great conflict manager.
        <br />
        <br />
        Ankur has a wealth of experience in marketing communications. He has
        helped solution for clients ranging from Coca-Cola and Samsung
        Electronics to Yamaha, Maruti Suzuki, Uber, Airtel and more. He thrives
        on the dynamic landscape of consumer and tech trends.
        <br />
        <br />
        He grew up living all over the world, and is passionate about keeping
        the narrative relevant.
        <br />
        <br />
        He loves client servicing because he loves meeting new people, building
        new relationships and creating breakthrough solutions.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/ankur-bora-73bb4515/',
  },
  {
    name: 'Mandira Naidoo',
    title: 'Partner - Design',
    img: '/img/our-team/mandira-naidoo.webp',
    lgimg: '/img/our-team/mandira-naidoo_2x.webp',
    content: (
      <>
        The force behind continuous creative quality improvement. She’s always
        absorbing new content and trends, and nudging everyone else to up their
        game.
        <br />
        <br />
        Mandy’s got 20 years of experience in visual communication, branding,
        and design education. She started out as an amazing artist - who won
        early accolades and international showcases. She then switched over to
        advertising - working with agencies like MAA and JWT. She’s tried her
        hand at running her own boutique practice too.
        <br />
        <br />
        Today, Mandy heads up design at Red Bangle. In fact, she’s been doing
        this since 2017 and is now a custodian for our Brand and part of a core
        team that drives our culture. Mandy’s passionate about Indian
        philosophy, travel and cats. She’s super work proud and so is her entire
        team.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/mandiranaidoo/',
  },
  {
    name: 'Tejasvi Mani',
    title: 'Partner - Post Production',
    img: '/img/our-team/tejasvi-mani.webp',
    lgimg: '/img/our-team/tejasvi-mani_2x.webp',
    content: (
      <>
        A problem-solver, a quiet and confident leader, and always a learner.
        <br />
        <br />
        Tejas has been at the forefront of creative innovation in
        post-production for over a decade. He’s mostly self-taught and how! His
        reputation is built on his extraordinary attention to detail across
        Computer Animation, VFX, CGI, Motion Graphics and Video Editing.
        <br />
        <br />
        Tejas was our first employee in Post Production. Today, he has recruited
        a dedicated team - which he heads and mentors. He’s one of our most
        dependable young leaders, and he’s high on EQ.
        <br />
        <br />
        When he’s not busy crafting a film or managing his team, he’s busy in
        gaming tournaments and motorsports entertainment.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/tejasvi-mani-84b53177/',
  },
  {
    name: 'Jaya Loganathan',
    title: 'Partner - Technology',
    img: '/img/our-team/jaya-loganathan.webp',
    lgimg: '/img/our-team/jaya-loganathan_2x.webp',
    content: (
      <>
        The quiet one who is always observant and insightful. Jaya asks all the
        good questions that drive technology development at Red Bangle.
        <br />
        <br />
        She’s excited about tackling complex human challenges through technology
        and building innovative solutions.
        <br />
        <br />
        Jaya has worked in software solutioning with Tech Mahindra, Symantec and
        HCL. She joined Red Bangle in the first few months of our own beginning
        when she was nursing her new baby. Today, he’s 7 and so is Jaya’s
        relationship with Red Bangle.
        <br />
        <br />
        Jaya works closely with Sunil, and heads our dynamic technology team.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/jayaloganathan/',
  },
  {
    name: 'Debarti Banerjee',
    title: 'Head - Recruitment & Project Delivery',
    img: '/img/our-team/debarti-banerjee.webp',
    lgimg: '/img/our-team/debarti-banerjee_2x.webp',
    content: (
      <>
        Deeply passionate about organisational culture, processes and animal
        welfare.
        <br />
        <br />
        Debarti started out as a recruiter and moved into operations to support
        the creation of IP in content and events. She was on the core team that
        developed Royal Stag’s Large Short Films.
        <br />
        <br />
        Today, Debarti heads Red Bangle&apos;s recruitment and project
        management, and takes a keen interest in building new processes. She
        also rescues and feeds nearly 700 stray dogs and cats in the city of
        Mumbai.
        <br />
        <br />
        Clarity of intent, the right people for the right job, and the right
        processes everytime are things she’s always got an eye on.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/debarti-banerjee-2899b7249/',
  },
  {
    name: 'Raj Dutta',
    title: 'National Creative Director',
    img: '/img/our-team/raj_dutta.jpg',
    lgimg: '/img/our-team/raj_dutta.jpg',
    content: (
      <>
        A creative leader and writer with 23 years in the business,
        Raj has spent long stints with agencies like Ogilvy, Leo Burnett,
        McCann Erickson and Rediffusion in India and Hong Kong.
        <br />
        <br />
        Over a long and layered career, he has crafted several notable campaigns for brands
        like Airtel, Vodafone, Ajio, TVS Motors, IBM, Levi’s,  American Express and Unilever,
        winning awards at Cannes, New York Festivals, Spikes Asia, Abbys,
        and other advertising festivals.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/rajdutta/',
  },
  {
    name: 'Rituparna Sarkar',
    title: 'Creative Director, Design - Video',
    img: '/img/our-team/ritu_parna.jpg',
    lgimg: '/img/our-team/ritu_parna.jpg',
    content: (
      <>
        Rituparna has worked in the television and visual media industry for over 15 years.
        She has worked with brands like Red Bull, WHO, Disney, News Corp, Asian Paints,
        Goodearth, Viacom, OXFAM, etc.
        <br />
        <br />
        She has been a Design Director on several award-winning projects across Branding,
        2D, Stop Motion, & Live Action.
      </>
    ),
    linkedIn: 'https://www.linkedin.com/in/rituparna-sarkar-a612a3a4/',
  },
]

const stats = [
  {
    id: 0,
    heading: 'Achievements',
    data: [
      {
        id: 0,
        countUpProps: {
          value: 150,
          suffix: <span className="text-rb-red">+</span>,
        },
        text: <span className="max-w-[188px]">Satisfied businesses</span>,
      },
      {
        id: 1,
        countUpProps: {
          value: 500,
          suffix: <span className="text-rb-red">+</span>,
        },
        text: (
          <span className="max-w-[188px]">
            Projects completed <br /> successfully
          </span>
        ),
      },
      {
        id: 2,
        countUpProps: {
          value: 10,
          suffix: (
            <span className="inline-flex">
              M <span className="text-rb-red">+</span>
            </span>
          ),
        },
        text: (
          <span className="md:max-w-[188px]">
            Streams on various <br /> streaming platforms
          </span>
        ),
      },
    ],
  },
  {
    id: 1,
    heading: 'Milestones',
    data: [
      {
        id: 0,
        countUpProps: {
          value: 10,
          suffix: <span className="text-rb-red">+</span>,
        },
        text: (
          <span className="md:max-w-[188px]">
            Years of <br /> experience
          </span>
        ),
      },
      {
        id: 1,
        countUpProps: {
          value: 800,
          suffix: <span className="text-rb-red">+</span>,
        },
        text: (
          <span className="max-w-[188px]">
            Nominations for <br /> numerous awards
          </span>
        ),
      },
      {
        id: 2,
        countUpProps: {
          value: 1,
          suffix: (
            <span className="inline-flex">
              M<span className="text-rb-red">+</span>
            </span>
          ),
        },
        text: (
          <span className="md:max-w-[188px]">
            Video content <br /> created till date
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    heading: 'Awards',
    data: [
      {
        id: 0,
        countUpProps: {
          value: 2022,
          suffix: '',
        },
        text: (
          <span className="md:max-w-[188px]">
            Studio of <br />
            the Month
          </span>
        ),
      },
      {
        id: 1,
        countUpProps: {
          value: 2021,
          suffix: '',
        },
        text: (
          <span className="md:max-w-[188px]">
            Excellence in
            <br />
            Visual Storytelling
          </span>
        ),
      },
      {
        id: 2,
        countUpProps: {
          value: 2021,
          suffix: '',
        },
        text: (
          <span className="md:max-w-[188px]">
            Best Promotional <br />
            Campaign
          </span>
        ),
      },
    ],
  },
]

const OurTeam = () => {
  const lenis = useLenis()
  const [bioModal, setBioModal] = useState({
    open: false,
    data: null,
  })
  useEffect(() => {
    if (bioModal.open) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [bioModal.open, lenis])
  return (
    <>
      <SEO
        title="Meet the Red Bangle Team: Creative Experts in Holistic Marketing Communication, Integrated Marketing Campaigns, Branded Content & Marketing Content"
        description="Meet our diverse global team: Creative experts in holistic marketing communication, exceptional content strategy, creative ad campaigns & impactful brand marketing content. Get ready to achieve brand growth in India & across the globe with Red Bangle. "
        url="www.redbangle.com/global-team-for-holistic-marketing"
      />

      <section className="py-14 md:py-24 bg-rb-mercury">
        <div className="container">
          <h1 className="uppercase pb-6 md:pb-18 font-everett font-medium text-[32px] leading-9 tracking-[-0.512px] md:text-[120px] md:leading-[122px] md:tracking-[-1.92px] xl:w-[105%]">
            MEET THE THINKERS, CREATORS AND MAKERS
          </h1>
          <div className="w-full h-px mb-6 md:mb-8 bg-rb-davy-grey opacity-50"></div>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6">
            <div className="w-full md:max-w-[50%]">
              <p className="md:text-lg text-sm font-normal">
                We are Red Bangle - a brand content production agency
              </p>
            </div>
            <div className="w-full md:max-w-[50%]">
              <p className="md:text-[32px] font-semibold md:leading-10 leading-5 tracking-[-0.56px] md:tracking-[-1.28px]">
                We&apos;re a funky mix of individuals who have come together to
                create compelling brand content. We are strategists, writers,
                designers, filmmakers and technologists driving growth for
                ambitious brands. We love bold new ambitions, lively debates,
                empathy, hard work and honesty.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: 'none' }}>
        <h2>Global Team for Holistic Marketing</h2>
        <h2>International Experts Marketing Agency</h2>
        <h2>Diverse Professionals for Marketing Content Strategy</h2>
        <h2>Meet Our Team</h2>
        <h2>Multicultural Team for Digital Brand Management</h2>
        <h2>Global Expertise Marketing Content Strategy</h2>
        <h2>Team Members Marketing Agency</h2>
        <h2>International Presence</h2>
        <h2>Collaborative Team for Creative Content Marketing</h2>
        <h2>Our People</h2>
      </div>
      <section className="py-14 md:py-24 bg-white">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">LEADERSHIP</LineHeading>
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-4">
            {teamData.map((d) => (
              <div
                className="w-full flex flex-col gap-3 md:gap-5 md:mb-24 mb-10"
                key={d.name}
              >
                <button
                  data-rb-cursor
                  data-rb-cursor-type="bio"
                  className="md:max-w-[405px] md:max-h-[454px] max-w-[162px]"
                  onClick={() => setBioModal({ open: true, data: d })}
                >
                  <picture>
                    <source srcSet={d.img} media="(min-width:768px)" />
                    <img
                      className="overflow-hidden object-cover"
                      src={d.img}
                      alt={d.name}
                    />
                  </picture>
                </button>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="md:text-[32px] text-base font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.64px] leading-6">
                    {d.name}
                  </span>
                  <span className="md:text-2xl opacity-60 text-sm font-medium md:leading-7 leading-5 tracking-[-0.56px] md:tracking-[-0.96px]">
                    {d.title}
                  </span>
                </div>
                <button
                  className="flex items-center gap-2 md:hidden"
                  onClick={() => setBioModal({ open: true, data: d })}
                >
                  <span className="font-bold text-rb-red text-xs font-opensans">
                    Read More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3013_987)">
                      <path
                        d="M9.70274 10.703C9.90863 10.4973 9.90876 10.1636 9.70303 9.95772L6.35042 6.60249C6.14469 6.3966 5.811 6.39647 5.6051 6.6022C5.39921 6.80794 5.39908 7.14163 5.60481 7.34752L8.58491 10.3299L5.60249 13.31C5.3966 13.5158 5.39647 13.8495 5.6022 14.0554C5.80794 14.2612 6.14163 14.2614 6.34752 14.0556L9.70274 10.703ZM-0.326678 10.8535L9.33002 10.8572L9.33043 9.80321L-0.326268 9.79946L-0.326678 10.8535Z"
                        fill="#EF001C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3013_987">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* <h2 className="text-[26px] w-full md:max-w-[70%] font-medium md:leading-[54px] leading-7 tracking-[-0.52px] md:tracking-[-1.04px] md:text-[52px]">
            Showcasing Our Remarkable Achievements and Milestones
          </h2>
          <div className="md:py-18 py-10">
            {stats.map((s) => (
              <Fragment key={s.id}>
                <div className="w-full h-px my-6 md:my-8 bg-rb-davy-grey opacity-50"></div>

                <div
                  key={s.id}
                  className="flex md:justify-between gap-0 md:gap-6"
                >
                  <div className=" w-[50%] md:w-[20%]">
                    <p className="md:text-xl text-base font-medium tracking-[-0.64px] md:tracking-normal">
                      {s.heading}
                    </p>
                  </div>
                  <div className="flex w-[50%] md:w-[80%] justify-start flex-col md:flex-row overflow-hidden gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 ">
                    {s.data.map((s) => (
                      <div
                        className={`w-full text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}`}
                        key={s.id}
                      >
                        <div className="">
                          <RollupNumber {...s.countUpProps} />
                          <div className="text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett">
                            {s.text}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Fragment>
            ))}
          </div> */}
        </div>
      </section>
      {bioModal.open && (
        <div className="fixed cursor-auto left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 z-[9998]">
          <div
            className="max-h-full w-full max-w-[90%] bg-white h-[85vh] overflow-auto CustomScrollBar"
            data-lenis-prevent
          >
            <div className="w-full relative p-5 md:p-15">
              <button
                className="w-[107px] h-auto py-1.5 px-4 hidden md:block absolute top-4.5 right-[75px] text-white bg-black rounded-full"
                onClick={() =>
                  setBioModal((prev) => ({ ...prev, open: false }))
                }
              >
                Close
              </button>
              <button
                className="w-6 h-6 grid place-items-center md:hidden absolute top-9 right-9 text-white bg-black z-[1] rounded-full"
                onClick={() =>
                  setBioModal((prev) => ({ ...prev, open: false }))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="12" fill="#111010" />
                  <path
                    d="M16 8L8 16"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8L16 16"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row items-center  md:items-stretch gap-4 md:gap-12">
                <div className="w-full md:w-1/3 relative h-auto flex-shrink-0">
                  <picture>
                    <source
                      srcSet={bioModal?.data?.img}
                      media="(min-width:768px)"
                    />
                    <img
                      className="md:absolute w-auto h-full object-cover"
                      src={bioModal?.data?.img}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-2">
                      <h2 className="md:text-[32px] text-lg font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.72px] leading-[22px]">
                        {bioModal?.data?.name}
                      </h2>
                      <span className="md:text-2xl opacity-60 text-sm font-medium md:leading-7 leading-5 tracking-[-0.56px] md:tracking-[-0.96px]">
                        {bioModal?.data?.title}
                      </span>
                    </div>
                    <div className="py-4 md:w-[90%px] md:pt-5 md:mb-12">
                      <p className="md:text-lg w-full md:max-w-[80%] text-sm font-normal opacity-80">
                        {bioModal?.data?.content}
                      </p>
                    </div>
                    <div className="w-full h-px my-4 bg-rb-davy-grey opacity-50"></div>
                    <div className="flex w-full flex-col-reverse md:flex-row md:gap-6">
                      <div className="flex w-full md:w-[40%] flex-col">
                        <span className="md:text-lg text-base font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.64px] leading-4.5">
                          Social Connect
                        </span>
                        <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-0">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={bioModal?.data?.linkedIn}
                            className="flex items-center gap-2 py-1.5 md:py-5"
                          >
                            <svg
                              className="text-[#006699] transition-all w-5 h-5 md:w-10 md:h-10"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="20"
                                cy="20"
                                r="19.375"
                                fill="white"
                                stroke="currentColor"
                                strokeWidth="1.25"
                              />
                              <path
                                d="M12 12.8009C12 12.2789 12.1871 11.8482 12.5612 11.5089C12.9353 11.1696 13.4216 11 14.0202 11C14.6081 11 15.0837 11.167 15.4472 11.5011C15.8213 11.8456 16.0083 12.2945 16.0083 12.8478C16.0083 13.349 15.8266 13.7665 15.4632 14.1006C15.0891 14.4451 14.5974 14.6174 13.9881 14.6174H13.9721C13.3842 14.6174 12.9086 14.4451 12.5451 14.1006C12.1817 13.7561 12 13.3229 12 12.8009ZM12.2084 26.5031V16.0424H15.7678V26.5031H12.2084ZM17.7399 26.5031H21.2993V20.662C21.2993 20.2966 21.3421 20.0148 21.4276 19.8164C21.5772 19.4615 21.8044 19.1613 22.109 18.916C22.4136 18.6706 22.7957 18.548 23.2554 18.548C24.4525 18.548 25.0511 19.3362 25.0511 20.9126V26.5031H28.6105V20.5054C28.6105 18.9604 28.2364 17.7885 27.4882 16.9898C26.7399 16.1912 25.7512 15.7919 24.522 15.7919C23.1431 15.7919 22.0689 16.3713 21.2993 17.5301V17.5614H21.2833L21.2993 17.5301V16.0424H17.7399C17.7613 16.3765 17.772 17.4153 17.772 19.1587C17.772 20.9022 17.7613 23.3503 17.7399 26.5031Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="text-[#006699] text-sm md:text-lg">
                              Linkedin
                            </span>
                          </a>
                          <div className="bg-rb-dune opacity-20 w-[5px] h-[5px] md:hidden rounded-full"></div>
                          {/* <div className="flex items-center gap-2">
                            <svg
                              className="w-5 h-5 md:w-10 md:h-10"
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                d="M39.375 20C39.375 30.7006 30.7005 39.3751 20 39.3751C9.29949 39.3751 0.625 30.7006 0.625 20C0.625 9.2995 9.29948 0.625 20 0.625C30.7005 0.625 39.375 9.2995 39.375 20Z"
                                fill="white"
                                stroke="black"
                                stroke-width="1.25"
                              />
                              <path
                                d="M12.039 13L18.2267 21.2734L12 28H13.4015L18.853 22.1106L23.2576 28H28.0265L21.4906 19.2614L27.2864 13H25.8849L20.8645 18.4239L16.808 13H12.039ZM14.0999 14.0322H16.2908L25.9653 26.9678H23.7745L14.0999 14.0322Z"
                                fill="black"
                              />
                            </svg>
                            <span className="text-sm md:text-lg">X</span>
                          </div> */}
                        </div>
                      </div>
                      {/* <div className="flex w-full md:w-[40%] flex-col">
                        <div className="w-full h-px my-4 bg-rb-davy-grey opacity-50"></div>
                        <span className="md:text-lg text-base font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.64px] leading-4.5">
                          Interest Areas
                        </span>
                        <ul className="flex md:flex-col gap-2 md:gap-0 items-center md:items-start text-sm font-normal md:text-lg">
                          <li className="pt-1.5 md:pt-5 pb-1.5 opacity-80">
                            Dancing
                          </li>
                          <li className="md:hidden">
                            <div className="w-[5px] h-[5px] rounded-full bg-rb-dune opacity-20"></div>
                          </li>
                          <li className="py-1.5 opacity-80">Reading</li>
                          <li className="md:hidden">
                            <div className="w-[5px] h-[5px] rounded-full bg-rb-dune opacity-20"></div>
                          </li>
                          <li className="py-1.5 opacity-80">Writing</li>
                          <li className="md:hidden">
                            <div className="bg-rb-dune opacity-20 w-[5px] h-[5px] rounded-full"></div>
                          </li>
                          <li className="py-1.5 opacity-80">Long Drives</li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(teamSchema)}
      </Script>
    </>
  )
}

export default OurTeam
