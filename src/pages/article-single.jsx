import React, { useState } from 'react'
import { LineArrow } from '@/components/icons'
import GetUpdates from '@/components/shared/sections/GetUpdatesSection/GetUpdates'
import { Button } from '@/components/ui'

const ArticleSingle = () => {
  const [toc, settoc] = useState(false)

  const tocTrigger = () => {
    settoc((state) => !state)
  }
  return (
    <>
      <section className="py-9">
        <div className="container">
          <div className="flex gap-1 flex-wrap items-center pb-11">
            <a
              href="#!"
              className="opacity-60 font-semibold text-[12px] md:text-[16px]"
            >
              Blog
            </a>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M5.625 3.125 10 7.5l-4.375 4.375"
                stroke="#111010"
                strokeOpacity=".6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              href="#!"
              className="opacity-60 font-semibold text-[12px] md:text-[16px]"
            >
              Strategic Content Solution
            </a>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M5.625 3.125 10 7.5l-4.375 4.375"
                stroke="#111010"
                strokeOpacity=".6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a href="#!" className="font-semibold text-[12px] md:text-[16px]">
              How to manage information as a Manager
            </a>
          </div>

          <div className="max-w-[1096px] pb-10">
            <div className="border border-rb-black/70 rounded-full py-2 px-4 text-[12px] font-semibold mb-8 inline-flex">
              Strategic Content Solution
            </div>

            <h1 className="font-everett text-[32px] md:text-[48px] lg:text-[72px] leading-[120%] uppercase font-medium mb-5 tracking-[-1.44px]">
              How to manage information as a Manager
            </h1>

            <p className="md:text-[24px] text-rb-black/80">
              As a Project Manager, one of your most important roles is that of
              relaying information. In other words, you are responsible for
              gathering and synthesising information from various sources and
              disseminating it to the appropriate parties.{' '}
            </p>
          </div>

          <div className="flex flex-wrap justify-between items-center pt-8 border-t border-t-black/10">
            <div className="flex gap-4 items-center">
              <div className="md:w-16 md:h-16 w-13 h-13 rounded-full overflow-hidden">
                <img
                  src="/img/blog-thumb.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div>
                <p className="mb-2 font-semibold">By Ajay Garg</p>
                <p className="mb-0 opacity-60 font-semibold">
                  Tech Lead at Red Bangle
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:block md:text-right pt-4 pl-[68px] md:p-0">
              <p className="font-semibold">05 min read </p>
              <p className="font-semibold">April 09, 2022</p>
            </div>
          </div>
        </div>

        <div className="pt-10 md:pt-18">
          <div className="h-[180px] md:h-[556px] overflow-hidden">
            <img
              src="/img/blog-inner-thumb.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-30">
        <div className="container">
          <div className="flex -mx-4 flex-wrap">
            <div className="w-full md:w-3/4 px-4">
              <div className="blog-content-main max-w-[830px]">
                <h2>Active Listening</h2>

                <p>
                  To gather information effectively, you need to be a good
                  listener! This means being fully present when someone is
                  speaking to you, asking clarifying questions when necessary,
                  and taking notes to help you remember key points. To gather
                  information effectively, you need to be a good listener! This
                  means being fully present when someone is speaking to you,
                  asking clarifying questions when necessary, and taking notes
                  to help you remember key points. <br /> <br />
                  This means being fully present when someone is speaking to
                  you, asking clarifying questions when necessary, and taking
                  notes to help you remember key points.
                </p>
                <h2>Synthesis</h2>

                <p>
                  Once you&apos;ve gathered all the information you need, you
                  must be able to synthesise it into a coherent message that can
                  be easily understood by your team and stakeholders alike. This
                  means distilling complex information into its key components
                  and presenting it in a way that is easy to digest. Once
                  you&apos;ve gathered all the information you need, you must be
                  able to synthesise it into a coherent message that can be
                  easily understood by your team and stakeholders alike. This
                  means distilling complex information into its key components
                  and presenting it in a way that is easy to digest. <br />
                  <br />
                  Once you&apos;ve gathered all the information you need, you
                  must be able to synthesise it into a coherent message that can
                  be easily understood by your team and stakeholders alike.
                </p>

                <p>
                  <img src="/img/blog-inner-thumb.jpg" alt="" />
                </p>

                <blockquote>
                  <p>
                    I had the pleasure of working with Red Bangle on a recent
                    video project, and I must say, their level of
                    professionalism and creativity exceeded my expectations. I
                    highly recommend Red Bangle for their outstanding work.
                  </p>

                  <h4>
                    Lissa Smith, VYMO <br />
                    Director of Marketing and Communications
                  </h4>
                </blockquote>

                <p>
                  Once you&apos;ve gathered all the information you need, you
                  must be able to synthesise it into a coherent message that can
                  be easily understood by your team and stakeholders alike. This
                  means distilling complex information into its key components
                  and presenting it in a way that is easy to digest. Once
                  you&apos;ve gathered all the information you need, you must be
                  able to synthesise it into a coherent message that can be
                  easily understood by your team and stakeholders alike. This
                  means distilling complex information into its key components
                  and presenting it in a way that is easy to digest. <br />
                  <br />
                  Once you&apos;ve gathered all the information you need, you
                  must be able to synthesise it into a coherent message that can
                  be easily understood by your team and stakeholders alike.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/4 px-4">
              <div
                className={`md:opacity-100 md:visible md:sticky md:top-18 fixed inset-0 w-full h-full bg-black/30 md:bg-transparent z-[9999] px-6 md:px-0 duration-300 ease-out ${
                  toc ? 'opacity-1 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="md:border md:border-black/20 rounded-lg mb-4 bg-white mt-10 md:mt-0">
                  <div className="py-4 px-5 text-[14px] font-semibold md:border-b md:border-b-black/20 flex justify-between items-center">
                    Table of contents
                    <button
                      onClick={tocTrigger}
                      className="w-6 h-6 inline-flex items-center justify-center md:hidden"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M9 1L1 9M1 1L9 9"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="py-4 px-5 text-[14px] font-semibold toc-content flex flex-col gap-4">
                    <div>
                      <a href="#!" className="active">
                        Active Listening
                      </a>
                    </div>
                    <div>
                      <a href="#!">Synthesis</a>
                    </div>
                    <div>
                      <a href="#!">Adaptability</a>
                    </div>
                    <div>
                      <a href="#!">Synthesis</a>
                    </div>
                    <div>
                      <a href="#!">Adaptability</a>
                    </div>
                    <div>
                      <a href="#!">Adaptability</a>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <h3 className="text-[18px] font-medium font-everett mb-3">
                    Share it on:
                  </h3>

                  <div className="flex gap-4">
                    <a
                      href="#!"
                      className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g opacity="0.8">
                          <path
                            d="M10.9987 1.8335C16.0615 1.8335 20.1654 5.93741 20.1654 11.0002C20.1654 16.0629 16.0615 20.1668 10.9987 20.1668C9.37876 20.1694 7.78731 19.7407 6.38788 18.9247L1.83571 20.1668L3.07504 15.6128C2.25838 14.213 1.82934 12.6208 1.83204 11.0002C1.83204 5.93741 5.93596 1.8335 10.9987 1.8335ZM7.87471 6.69183L7.69138 6.69916C7.57269 6.70639 7.45669 6.73757 7.35038 6.79083C7.25094 6.84714 7.16017 6.91754 7.08088 6.99983C6.97088 7.10341 6.90854 7.19325 6.84163 7.28033C6.50257 7.72116 6.32002 8.26237 6.32279 8.8185C6.32463 9.26766 6.44196 9.70491 6.62529 10.1137C7.00021 10.9406 7.61713 11.816 8.43113 12.6272C8.62729 12.8225 8.81979 13.0187 9.02696 13.2011C10.0384 14.0916 11.2437 14.7338 12.547 15.0766L13.0676 15.1563C13.2372 15.1655 13.4068 15.1527 13.5773 15.1444C13.8443 15.1306 14.1049 15.0583 14.3409 14.9327C14.4609 14.8708 14.5781 14.8035 14.692 14.731C14.692 14.731 14.7314 14.7053 14.8065 14.6485C14.9303 14.5568 15.0064 14.4917 15.109 14.3845C15.1851 14.3057 15.2511 14.2131 15.3015 14.1077C15.373 13.9582 15.4445 13.6732 15.4739 13.4357C15.4959 13.2542 15.4895 13.1552 15.4867 13.0938C15.483 12.9957 15.4015 12.894 15.3125 12.8509L14.779 12.6117C14.779 12.6117 13.9815 12.2642 13.4939 12.0424C13.4428 12.0201 13.3882 12.0074 13.3325 12.0048C13.2698 11.9984 13.2065 12.0054 13.1467 12.0255C13.0869 12.0456 13.0321 12.0782 12.986 12.1212C12.9815 12.1194 12.92 12.1717 12.2573 12.9747C12.2193 13.0258 12.1669 13.0644 12.1068 13.0856C12.0467 13.1069 11.9817 13.1097 11.92 13.0938C11.8602 13.0778 11.8017 13.0576 11.7449 13.0333C11.6312 12.9857 11.5918 12.9673 11.5139 12.9343C10.9878 12.7047 10.5007 12.3946 10.0701 12.0149C9.95463 11.9141 9.84738 11.8041 9.73738 11.6977C9.37675 11.3524 9.06246 10.9617 8.80238 10.5354L8.74829 10.4483C8.70945 10.3898 8.67804 10.3267 8.65479 10.2604C8.61996 10.1257 8.71071 10.0175 8.71071 10.0175C8.71071 10.0175 8.93346 9.77366 9.03704 9.64166C9.13788 9.51333 9.22313 9.38866 9.27813 9.29975C9.38629 9.12558 9.42021 8.94683 9.36338 8.80841C9.10671 8.18141 8.84088 7.55716 8.56771 6.9375C8.51363 6.81466 8.35321 6.72666 8.20746 6.70925C8.15796 6.70375 8.10846 6.69825 8.05896 6.69458C7.93586 6.68846 7.8125 6.68969 7.68954 6.69825L7.87379 6.69091L7.87471 6.69183Z"
                            fill="#333333"
                          />
                        </g>
                      </svg>
                    </a>

                    <a
                      href="#!"
                      className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center"
                    >
                      <svg
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                      >
                        <path
                          d="M18.75 1.79925C18.0491 2.08945 17.3481 2.32161 16.5304 2.37965C17.3481 1.91533 17.9322 1.16081 18.2243 0.290201C17.465 0.754524 16.6472 1.04473 15.771 1.21885C15.0701 0.464322 14.0771 0 13.0257 0C10.9229 0 9.17056 1.68317 9.17056 3.83066C9.17056 4.12086 9.22897 4.41106 9.28738 4.70126C6.07477 4.52714 3.27103 3.0181 1.34346 0.696483C0.992991 1.27689 0.817757 1.91533 0.817757 2.61181C0.817757 3.94674 1.51869 5.10755 2.51168 5.80403C1.86916 5.80403 1.28505 5.62991 0.759346 5.33971V5.39775C0.759346 7.25504 2.1028 8.76408 3.85514 9.11233C3.50467 9.17037 3.21262 9.22841 2.86215 9.22841C2.6285 9.22841 2.39486 9.22841 2.16121 9.17037C2.6285 10.6794 4.08879 11.7822 5.7243 11.8402C4.43925 12.8849 2.74533 13.4653 0.934579 13.4653C0.642523 13.4653 0.292056 13.4653 0 13.4073C1.75234 14.452 3.79673 15.0905 5.95794 15.0905C13.0257 15.0905 16.8808 9.28645 16.8808 4.23694C16.8808 4.06282 16.8808 3.8887 16.8808 3.77262C17.5818 3.19222 18.2243 2.55377 18.75 1.79925Z"
                          fill="#333333"
                        />
                      </svg>
                    </a>
                    <a
                      href="#!"
                      className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M7.98047 10.2002C8.30256 10.6308 8.71349 10.9871 9.18538 11.2449C9.65728 11.5027 10.1791 11.656 10.7155 11.6944C11.2518 11.7328 11.7902 11.6554 12.294 11.4675C12.7978 11.2796 13.2553 10.9855 13.6355 10.6052L15.8855 8.35517C16.5686 7.64791 16.9465 6.70065 16.938 5.71741C16.9295 4.73418 16.5351 3.79363 15.8398 3.09835C15.1445 2.40307 14.204 2.00869 13.2207 2.00014C12.2375 1.9916 11.2902 2.36958 10.583 3.05267L9.29297 4.33517M10.9577 8.69914C10.6356 8.26855 10.2247 7.91226 9.75276 7.65444C9.28086 7.39662 8.75904 7.24331 8.22268 7.20489C7.68632 7.16648 7.14798 7.24387 6.64416 7.43181C6.14034 7.61975 5.68283 7.91384 5.30267 8.29414L3.05267 10.5441C2.36958 11.2514 1.9916 12.1987 2.00014 13.1819C2.00869 14.1651 2.40307 15.1057 3.09835 15.801C3.79363 16.4962 4.73418 16.8906 5.71741 16.8992C6.70065 16.9077 7.64791 16.5297 8.35517 15.8466L9.63767 14.5641"
                          stroke="#333333"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <a
                      href="#!"
                      className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center"
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          opacity="0.8"
                          d="M0 1.80087C0 1.27887 0.18706 0.848224 0.561165 0.508941C0.93527 0.169642 1.42162 0 2.02019 0C2.60809 0 3.08373 0.167027 3.44716 0.501111C3.82126 0.845625 4.00832 1.29453 4.00832 1.84785C4.00832 2.34896 3.82662 2.76654 3.46319 3.10062C3.08909 3.44514 2.59739 3.61739 1.98813 3.61739H1.97209C1.3842 3.61739 0.908558 3.44514 0.545132 3.10062C0.181705 2.75611 0 2.32285 0 1.80087ZM0.208433 15.5031V5.04243H3.76782V15.5031H0.208433ZM5.73992 15.5031H9.29931V9.66205C9.29931 9.29664 9.34207 9.01477 9.42757 8.81642C9.57721 8.46146 9.80436 8.16131 10.109 7.91599C10.4136 7.67065 10.7957 7.54798 11.2554 7.54798C12.4525 7.54798 13.0511 8.33618 13.0511 9.9126V15.5031H16.6105V9.50545C16.6105 7.96035 16.2364 6.78849 15.4882 5.98984C14.7399 5.1912 13.7512 4.79187 12.522 4.79187C11.1431 4.79187 10.0689 5.37128 9.29931 6.5301V6.56142H9.28327L9.29931 6.5301V5.04243H5.73992C5.76129 5.3765 5.77198 6.41525 5.77198 8.15871C5.77198 9.90216 5.76129 12.3503 5.73992 15.5031Z"
                          fill="#333333"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-12 left-0 right-0 flex justify-center md:hidden">
          <Button onClick={tocTrigger}>Table of Contents</Button>
        </div>
      </section>
      <GetUpdates />
      <section className="py-25">
        <div className="container">
          <h2 className="text-title md:text-title-md mb-8 font-everett">
            Recently Added Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-8">
            {[
              {
                id: 0,
              },
              {
                id: 1,
              },
              {
                id: 2,
              },
            ].map(({ id }) => (
              <div key={id}>
                <a
                  href="#!"
                  className="h-[384px] block md:h-[272px] overflow-hidden relative mb-4"
                >
                  <img
                    src="/img/blog-thumb.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <div className="absolute border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white">
                    Strategic Content Solution
                  </div>
                </a>

                <div>
                  <div className="flex gap-2 mb-4">
                    <span className="text-[14px] md:text-[16px]">
                      May 22, 2023
                    </span>
                    <span className="text-[14px] md:text-[16px]">|</span>
                    <span className="text-[14px] md:text-[16px]">John Doe</span>
                  </div>

                  <h3 className="text-[16px] md:text-[24px] leading-[120%] font-semibold mb-8 tracking-[-0.96px]">
                    How a visual artist redefines success in graphic design
                  </h3>

                  <a
                    href="#!"
                    className="inline-flex gap-2 items-center text-rb-red font-semibold"
                  >
                    Continue reading
                    <LineArrow className=" max-w-[20px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ArticleSingle
