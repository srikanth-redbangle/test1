import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Header.module.scss'
import { Button } from './Button'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap'

const cursorProps = {
  'data-rb-cursor': '',
  'data-rb-cursor-blend': 'darken',
  'data-rb-cursor-blendclick': 'darken',
  'data-state': 'open',
}

const dropDownArrow = (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path
      d="m1.625 15.375 13.75-13.75m0 0H1.625m13.75 0v13.75"
      stroke="#111010"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const outsideLinks = [
  {
    title: 'Services',
    menu: [
      { title: 'All', href: '/services' },
      { title: 'Leap', href: '/services/leap' },
      { title: 'Create', href: '/services/create' },
      { title: 'Play', href: '/services/play' },
    ],
  },
  {
    title: 'Work',
    menu: [
      // { title: 'All', href: '#!' },
      // { title: 'Think', href: '/work/leap' },
      { title: 'Create', href: '/work/create' },
      { title: 'Play', href: '/work/play' },
      // { title: 'Leap (L74 Case study)', href: '/work/l74-case-study' },
    ],
  },
  {
    title: 'About',
    menu: [
      // { title: 'All', href: '#!' },
      { title: 'Who We Are', href: '/about' },
      { title: 'Team', href: '/team' },
      { title: 'Partners', href: '/partners' },
      { title: 'Social Impact', href: '/social-impact' },
    ],
  },
]

export const Header = () => {
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 70)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const lenis = useLenis()
  const headerTimeline = useRef()
  const contentlenisRef = useRef()

  const [mainMenu, setmainMenu] = useState(false)
  const [dropdownMenu, setdropdownMenu] = useState(false)

  const router = useRouter()
  const { asPath } = router

  const mainMenuTrigger = () => {
    setmainMenu((state) => !state)
  }
  useEffect(() => {
    headerTimeline.current = gsap.timeline({ paused: true })
    headerTimeline.current.fromTo(
      '.nav-menu-image',
      { scale: 0.4 },
      { scale: 1 }
    )
    headerTimeline.current.fromTo(
      contentlenisRef.current,
      {
        y: () => (window.innerWidth > 767 ? -300 : 0),
      },
      { y: 0 },
      0
    )

    const onEsc = (e) => {
      if (e.keyCode === 27) {
        setmainMenu(false)
      }
    }
    window.document.addEventListener('keydown', onEsc)
    return () => {
      window.document.removeEventListener('keydown', onEsc)
    }
  }, [])
  useEffect(() => {
    if (mainMenu) {
      setTimeout(() => {
        document.body.style.overflow = 'hidden'
      }, 100)
      lenis?.stop()
    } else {
      document.body.style.overflow = 'visible'
      lenis?.start()
    }
    return () => {
      document.body.style.overflow = 'visible'
      lenis?.start()
    }
  }, [mainMenu, lenis])

  function dropDownTrigger(value) {
    return () => {
      if (window.innerWidth <= 768)
        setdropdownMenu((state) => (state === value ? null : value))
    }
  }

  useEffect(() => {
    setmainMenu(0)
    setdropdownMenu(false)
    lenis?.start()
  }, [asPath, lenis])

  useEffect(() => {
    const element = contentlenisRef.current?.virtualScroll?.element
    if (element && window.innerWidth >= 768) {
      if (!mainMenu) {
        contentlenisRef.current?.scrollTo('#lastlink')
      } else {
        contentlenisRef.current?.scrollTo('#firstlink')
      }
    }
    if (window.innerWidth >= 768 && headerTimeline.current) {
      if (mainMenu) {
        headerTimeline.current.play()
      } else {
        headerTimeline.current.reverse()
      }
    }
  }, [mainMenu])
  return (
    <>
      <header className="relative">
        <div className="flex items-center h-[60px] md:h-[85px] border-b border-b-black/10 bg-rb-mercury">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <div className="md:w-1/4">
                <Link href="/">
                  <img
                    className={styles.image}
                    width="190"
                    height="44"
                    src="/logo.svg"
                    alt="Red Bangle"
                  />
                </Link>
              </div>

              <div className="flex-1 md:flex-none md:w-3/4 -mr-4 md:mr-0">
                <div className="flex items-center justify-end h-[60px] md:h-[85px]">
                  <div
                    className={`hidden md:flex items-center md:h-full mr-[47px] top-0 right-0`}
                  >
                    {/* <Link
                {...cursorProps}
                href="#!"
                className="md:mr-10 font-semibold text-sm uppercase"
              >
                services
              </Link>
              <Link
                {...cursorProps}
                href="#!"
                className="md:mr-10 font-semibold text-sm uppercase"
              >
                work
              </Link> */}
                    {outsideLinks.map((l, i) => (
                      <div
                        className="inline-block h-full font-semibold text-sm md:mr-10 relative group text-rb-black/60 hover:text-rb-black transition-all"
                        key={i}
                      >
                        <button className="uppercase flex h-full items-center">
                          {l.title}

                          <div className="w-5 h-5 flex items-center justify-center ml-1">
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              className="group-hover:rotate-90 transition-all group-hover:text-rb-red"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path
                                  d="M7.65234 13.7046L14.0942 7.26275"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.20312 6.84087L14.645 6.84087L14.645 13.2827"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </div>
                        </button>
                        <div className="absolute font-everett font-medium min-w-[240px] p-6 top-20 rounded-lg shadow-menu invisible group-hover:visible group-hover:opacity-100 transition-all opacity-0 flex flex-col z-[1] bg-white">
                          {l.menu.map((lItem, li) => (
                            <Link
                              key={li}
                              href={lItem.href}
                              className="mt-4 first:mt-0 text-lg leading-6 text-rb-black hover:text-rb-red transition-all capitalize"
                            >
                              {lItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <Button href="/contact" size="sm">
                      WORK WITH US
                    </Button>
                  </div>
                  {/* <button
                    className={`w-[54px] md:w-[90px] h-full bg-rb-black flex-col text-white flex  justify-center items-center hamburger relative md:z-[9998] ${
                      mainMenu ? 'active' : ''
                    }`}
                    aria-label="toggle menu"
                    onClick={mainMenuTrigger}
                  >
                    <div className="inline-flex flex-col gap-[5px]">
                      <span className="bg-white h-[2px] w-[30px] duration-300 ease-out"></span>
                      <span className="bg-white h-[2px] w-[30px] duration-300 ease-out"></span>
                      <span className="bg-white h-[2px] w-4 duration-300 ease-out"></span>
                    </div>
                  </button> */}
                  <button
                    className={`button-container bg-rb-black ${isSticky ? 'sticky-button sticky' : ''
                      }`}
                    aria-label="toggle menu"
                    onClick={mainMenuTrigger}
                  >
                    <div className="inline-flex flex-col gap-[5px]">
                      <span className="bg-white h-[2px] w-[30px] duration-300 ease-out"></span>
                      <span className="bg-white h-[2px] w-[30px] duration-300 ease-out"></span>
                      <span className="bg-white h-[2px] w-4 duration-300 ease-out"></span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed bg-white z-[999] inset-0 w-full h-full full-width-nav cursor-auto ${mainMenu ? 'nav-open' : ''
          }`}
      >
        <div className="container relative z-50">
          <button
            className={`absolute top-10 right-4 z-50 duration-500 ease-out block md:hidden ${mainMenu ? 'scale-100' : 'scale-0'
              }`}
            onClick={mainMenuTrigger}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M1.195 1.193 20.26 20.258m-19.065 0L20.26 1.193"
                stroke="#333"
                strokeWidth="2.247"
                strokeMiterlimit="10"
              />
            </svg>
          </button>
          <div className="flex flex-wrap -mx-2">
            <div className="hidden md:block px-2 w-2/5">
              <div className="py-10 max-w-[430px] flex flex-col h-full">
                <div className="mb-10">
                  <Link href="/">
                    <img src="/logo.svg" alt="" />
                  </Link>
                </div>

                <div className="mb-8">
                  <video
                    className="nav-menu-image"
                    src="/img/menu-video.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                  ></video>
                </div>

                <div className="flex gap-4 justify-between flex-1">
                  <div>
                    <p className="text-[18px] font-semibold mb-6 uppercase">
                      Company
                    </p>

                    <div className="flex flex-col gap-4 items-start">
                      <Link
                        href="/about"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        Who We Are
                      </Link>
                      <Link
                        href="/team"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        Team
                      </Link>
                      <Link
                        href="/partners"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        Partners
                      </Link>
                      <Link
                        href="/social-impact"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        Social Impact
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold mb-6 uppercase">
                      Industries
                    </p>

                    <div className="flex flex-col gap-4 items-start pointer-events-none">
                      <Link
                        href="/industries"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        FMCG
                      </Link>
                      <Link
                        href="/industries"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        Fashion
                      </Link>
                      <Link
                        href="/industries"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        Alcobev
                      </Link>
                      <Link
                        href="/industries"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        BFSI
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold mb-6 uppercase">
                      Explore
                    </p>

                    <div className="flex flex-col gap-4 items-start">
                      <Link
                        href="/blog"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        Blog
                      </Link>
                      <Link
                        href="/career"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        Career
                      </Link>
                      <Link
                        href="/collab"
                        className="opacity-60 hover:opacity-100 tracking-[-0.64px]"
                      >
                        Collab
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex gap-2">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/redbangle/"
                      className="w-10 h-10 flex justify-center items-center border border-[#069] rounded-full"
                    >
                      <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                      >
                        <path
                          d="M.723 2.071c0-.532.19-.972.572-1.318.382-.346.879-.52 1.49-.52.6 0 1.085.17 1.456.512.382.351.573.81.573 1.374 0 .512-.186.938-.557 1.279-.381.352-.883.527-1.505.527h-.017c-.6 0-1.085-.175-1.456-.527-.37-.352-.556-.794-.556-1.327Zm.212 13.986V5.38h3.633v10.677H.935Zm5.646 0h3.633v-5.962c0-.373.043-.66.13-.863.154-.362.385-.669.696-.92.311-.25.701-.375 1.17-.375 1.222 0 1.833.805 1.833 2.414v5.705h3.633V9.935c0-1.577-.382-2.773-1.145-3.588-.764-.815-1.773-1.223-3.028-1.223-1.407 0-2.504.592-3.29 1.774v.032h-.015l.016-.032V5.38H6.58c.022.34.033 1.401.033 3.18 0 1.78-.011 4.279-.033 7.496Z"
                          fill="#069"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/redbanglecollab/"
                      className="w-10 h-10 flex justify-center items-center border border-[#C2377B] rounded-full"
                    >
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M3.877 1.137A4.81 4.81 0 0 0 2.139 2.27a4.795 4.795 0 0 0-1.133 1.734C.763 4.626.6 5.34.552 6.384c-.048 1.045-.06 1.38-.06 4.043 0 2.663.012 2.998.06 4.043.048 1.044.215 1.758.454 2.38a4.81 4.81 0 0 0 1.133 1.738 4.81 4.81 0 0 0 1.738 1.132c.622.243 1.336.407 2.38.455 1.045.047 1.38.06 4.043.06 2.663 0 2.998-.012 4.043-.06 1.044-.048 1.758-.216 2.38-.455a4.81 4.81 0 0 0 1.738-1.132 4.81 4.81 0 0 0 1.132-1.738c.244-.622.407-1.336.455-2.38.048-1.045.06-1.38.06-4.043 0-2.663-.012-2.998-.06-4.043-.048-1.044-.215-1.758-.455-2.38a4.837 4.837 0 0 0-1.128-1.734 4.81 4.81 0 0 0-1.738-1.133c-.622-.243-1.336-.406-2.38-.454-1.045-.048-1.38-.06-4.043-.06-2.663 0-2.998.012-4.043.06-1.048.044-1.762.211-2.384.454Zm10.386 1.308c.957.044 1.475.203 1.822.339.458.18.785.39 1.128.734.343.342.554.67.734 1.128.135.347.295.865.339 1.822.047 1.032.055 1.343.055 3.963s-.012 2.93-.055 3.963c-.044.957-.204 1.475-.34 1.822-.179.458-.39.785-.733 1.128-.343.343-.67.554-1.128.734-.347.135-.865.295-1.822.338-1.033.048-1.344.056-3.963.056-2.62 0-2.93-.012-3.963-.056-.957-.043-1.475-.203-1.822-.338a3.055 3.055 0 0 1-1.128-.734 3.055 3.055 0 0 1-.734-1.128c-.135-.347-.295-.865-.339-1.822-.048-1.033-.056-1.344-.056-3.963 0-2.62.012-2.93.056-3.963.044-.957.204-1.475.34-1.822.178-.459.39-.786.733-1.128.343-.343.67-.555 1.128-.734.347-.136.865-.295 1.822-.339 1.033-.048 1.344-.056 3.963-.056 2.62 0 2.93.008 3.963.056Z"
                          fill="url(#insta-a)"
                        />
                        <path
                          d="M5.273 10.43a5.036 5.036 0 1 0 10.072 0 5.036 5.036 0 0 0-10.072 0Zm8.305 0a3.269 3.269 0 1 1-6.537.002 3.269 3.269 0 0 1 6.537-.002Z"
                          fill="url(#insta-b)"
                        />
                        <path
                          d="M15.543 6.369a1.176 1.176 0 1 0 0-2.352 1.176 1.176 0 0 0 0 2.352Z"
                          fill="#654C9F"
                        />
                        <defs>
                          <radialGradient
                            id="insta-a"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="rotate(-3 352.492 -6.993) scale(28.3592 24.105)"
                          >
                            <stop stopColor="#FED576" />
                            <stop offset=".263" stopColor="#F47133" />
                            <stop offset=".609" stopColor="#BC3081" />
                            <stop offset="1" stopColor="#4C63D2" />
                          </radialGradient>
                          <radialGradient
                            id="insta-b"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(14.54284 -.76218 .64784 12.36124 5.456 14.542)"
                          >
                            <stop stopColor="#FED576" />
                            <stop offset=".263" stopColor="#F47133" />
                            <stop offset=".609" stopColor="#BC3081" />
                            <stop offset="1" stopColor="#4C63D2" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://twitter.com/red_bangle"
                      className="w-10 h-10 flex justify-center items-center border border-[#1D1D1B] rounded-full"
                    >
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.763671 0.736328L8.48499 11.0627L0.714844 19.4549H2.46361L9.26664 12.1062L14.7649 19.4553H20.7144L12.5582 8.54997L19.7908 0.736328H18.042L11.7769 7.50325L6.71448 0.736328H0.763671ZM3.33553 2.02472H6.06946L18.1413 18.1665H15.4082L3.33553 2.02472Z"
                          fill="#1D1D1B"
                        />
                      </svg>
                    </a>

                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UCbPlh2ukO1Qz6Ib2fY724QQ"
                      className="w-10 h-10 flex justify-center items-center border border-[#F00] rounded-full"
                    >
                      <svg
                        width="21"
                        height="16"
                        viewBox="0 0 21 16"
                        fill="none"
                      >
                        <path
                          d="M20.398 3.013a2.585 2.585 0 0 0-1.825-1.825C16.964.757 10.51.757 10.51.757s-6.456 0-8.065.431A2.585 2.585 0 0 0 .62 3.013C.188 4.623.188 7.982.188 7.982s0 3.359.431 4.968a2.585 2.585 0 0 0 1.825 1.825c1.61.431 8.065.431 8.065.431s6.455 0 8.064-.431a2.585 2.585 0 0 0 1.825-1.825c.432-1.609.432-4.968.432-4.968s-.002-3.36-.432-4.969Z"
                          fill="red"
                        />
                        <path
                          d="m8.445 11.085 5.363-3.096-5.363-3.096v6.192Z"
                          fill="#fff"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="w-[1px] h-10 bg-black/10"></div>

                  <div>
                    <a
                      href="mailto:hello@redbangle.com"
                      className="text-[18px] font-semibold text-rb-red hover:text-black duration-300 ease-out"
                    >
                      hello@redbangle.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="px-2 w-full md:w-3/5 bg-rb-mercury py-10 md:pl-12"
            // data-lenis-prevent
            >
              <div
                data-lenis-prevent
                ref={contentlenisRef}
                className="overflow-auto nav-wrapper"
              >
                {/* <div className="overflow-auto nav-wrapper"> */}
                <div className="mb-12 max-w-[136px] block md:hidden">
                  <Link href="/">
                    <img src="/logo.svg" alt="" />
                  </Link>
                </div>
                <div className="flex flex-col gap-6 md:gap-8 items-start pb-20">
                  <div
                    className="nav-link opacity-30 duration-300 ease-out hover:opacity-100 order-1"
                    id="firstlink"
                  >
                    <Link
                      href="/"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      HOME
                    </Link>
                  </div>
                  <div
                    className={`dropdown relative nav-link opacity-30 duration-300 ease-out hover:opacity-100 order-2 ${dropdownMenu === 0 ? 'open' : ''
                      }`}
                  >
                    <button
                      onClick={dropDownTrigger(0)}
                      // href="/"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px] relative"
                    >
                      SERVICES
                      <div className="absolute top-3 -right-8 dropdown-arrow">
                        {dropDownArrow}
                      </div>
                    </button>

                    <div className="dropdown-menu rounded-lg bg-white py-5 px-6">
                      <div>
                        <Link href="/services">All</Link>
                      </div>
                      <div>
                        <Link href="/services/leap">Leap</Link>
                      </div>
                      <div>
                        <Link href="/services/create">Create</Link>
                      </div>
                      <div>
                        <Link href="/services/play">Play</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`dropdown relative nav-link opacity-30 order-3 duration-300 ease-out hover:opacity-100 ${dropdownMenu === 1 ? 'open' : ''
                      }`}
                  >
                    <button
                      onClick={dropDownTrigger(1)}
                      // href="/"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px] relative"
                    >
                      WORK
                      <div className="absolute top-3 -right-8 dropdown-arrow">
                        {dropDownArrow}
                      </div>
                    </button>

                    <div className="dropdown-menu rounded-lg bg-white py-5 px-6">
                      {/* <div>
                        <Link href="/work/leap">Leap</Link>
                      </div> */}
                      <div>
                        <Link href="/work/create">Create</Link>
                      </div>
                      <div>
                        <Link href="/work/play">Play</Link>
                      </div>
                    </div>
                  </div>
                  <div className="nav-link opacity-30 duration-300 ease-out hover:opacity-100 md:order-4 order-5">
                    <Link
                      href="/team"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      TEAM
                    </Link>
                  </div>
                  <div className="nav-link opacity-30 duration-300 ease-out hover:opacity-100 md:order-5 order-7">
                    <Link
                      href="/career"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      CAREER
                    </Link>
                  </div>
                  <div className="nav-link opacity-30 duration-300 ease-out hover:opacity-100 md:order-6 order-8">
                    <Link
                      href="/collab"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      COLLAB
                    </Link>
                  </div>
                  <div className="nav-link opacity-30 duration-300 ease-out hover:opacity-100 md:order-7 order-9">
                    <Link
                      href="/partners"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      PARTNERS
                    </Link>
                  </div>
                  <div className="nav-link opacity-30 duration-300 ease-out hover:opacity-100 md:order-8 order-4">
                    <Link
                      href="/about"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      WHO WE ARE
                    </Link>
                  </div>
                  <div className="nav-link opacity-30 duration-300 ease-out hover:opacity-100 md:order-8 order-4">
                    <Link
                      href="/social-impact"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      SOCIAL IMPACT
                    </Link>
                  </div>
                  {/* 
                  <div
                    className={`dropdown relative nav-link opacity-30 duration-300 ease-out hover:opacity-100 ${
                      dropdownMenu === 2 ? 'open' : ''
                    }`}
                  >
                    <button
                      onClick={dropDownTrigger(2)}
                      // href="/"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px] relative"
                    >
                      INDUSTRIES
                      <div className="absolute top-3 -right-8 dropdown-arrow">
                        {dropDownArrow}
                      </div>
                    </button>

                    <div className="dropdown-menu rounded-lg bg-white py-5 px-6">
                      <div>
                        <Link href="#!">Pharma </Link>
                      </div>
                      <div>
                        <Link href="#!">FMCG</Link>
                      </div>
                      <div>
                        <Link href="#!">ITES</Link>
                      </div>
                      <div>
                        <Link href="#!">SAAS</Link>
                      </div>
                    </div>
                  </div>
                  <div className="nav-link opacity-30 duration-300 ease-out hover:opacity-100">
                    <Link
                      href="/"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      COLLAB
                    </Link>
                  </div>
                  <div className="nav-link opacity-30 duration-300 ease-out hover:opacity-100">
                    <Link
                      href="/"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      PARTNER
                    </Link>
                  </div> */}
                  <div className="nav-link opacity-30 duration-300 ease-out hover:opacity-100 md:order-9 order-10">
                    <Link
                      href="/blog"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      BLOG
                    </Link>
                  </div>
                  <div
                    className="nav-link opacity-30 duration-300 ease-out hover:opacity-100 order-6 md:order-10"
                    id="lastlink"
                  >
                    <Link
                      href="/contact"
                      className="text-[40px] md:text-[64px] leading-[100%] font-everett tracking-[-2.7px]"
                    >
                      CONTACT
                    </Link>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
