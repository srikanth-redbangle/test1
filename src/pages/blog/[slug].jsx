import React, { useEffect, useRef, useState } from 'react'
import { rehype } from 'rehype'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import { LineArrow } from '@/components/icons'
import GetUpdates from '@/components/shared/sections/GetUpdatesSection/GetUpdates'
import { Button } from '@/components/ui'
import { getAllBlogs, getBlog, getRelatedBlogs } from '@/utils/graphql'
import { formateBlogPostFunc } from '@/utils/formate'
import Link from 'next/link'
import processTree from '@/utils/processTree'
import { DropdownFilter, SEO } from '@/components/shared'
import { TOC } from '@/components/shared/TOC'
import { useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { ClientInquiryForm } from '@/components/pages/contact/ClientInquiryForm'
import { IoClose } from 'react-icons/io5'

const ArticleSingle = ({ article, relatedArticle, tocTree, setisPopupOpen }) => {
  // console.log("👉🏼👉🏼👉🏼 => ArticleSingle => tocTree:", article)


  const [showPopup, setPopup] = useState(false);


  const [contentVisible, setContentVisible] = useState(false);


  useEffect(() => {
    const contentSection = document.getElementById('showBtn');

    const handleScroll = () => {
      if (contentSection) {
        const rect = contentSection.getBoundingClientRect();
        setContentVisible(rect.top < window.innerHeight && rect.bottom >= 620);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setisPopupOpen(true)
    }, 15000);
  }, [])

  // console.log({ relatedArticle })
  const lenis = useLenis()
  const blogRef = useRef()
  const router = useRouter()
  const [activeToc, setActiveToc] = useState('')
  const [toc, settoc] = useState(false)

  useEffect(() => {
    const headings = [...blogRef.current?.querySelectorAll('h2[id]')]
    const sub_headings = [...blogRef.current?.querySelectorAll('h3[id]')]
    const blog_figure = [...blogRef.current?.querySelectorAll('figure')]
    const images_flex = [...blogRef.current?.querySelectorAll('.wp-block-columns')]
    const ulElements = [...blogRef.current?.querySelectorAll('ul')]
    const figcaption = [...blogRef.current?.querySelectorAll('figcaption')]

    const scroll = () => {
      const windowScrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      const actives = []
      if (headings.length) {
        actives.push(headings[0].id)
      }

      blog_figure.forEach((figure) => {
        figure.style.paddingBottom = '10px'
      })

      
      figcaption.forEach((figcaption)=>{
        figcaption.style.textAlign = 'center'
        figcaption.classList.add('relative', 'bottom-5')
      })

      ulElements.forEach((ul) => {
        ul.classList.add('list-disc','pl-[50px]','mb-6'); // Replace 'your-class-name' with the desired class
        
      });

      sub_headings.forEach((sub_heading) => {
        sub_heading.style.paddingTop = '28px',
        sub_heading.style.paddingBottom = '20px',
        sub_heading.classList.add('font-bold')

        
      })

      images_flex.forEach((image_flex) => {
        image_flex.style.flexDirection = 'column';
        const columns3Div = document.querySelectorAll('.wp-block-columns.columns3');
        columns3Div.forEach((columns3) => {
          columns3.style.flexDirection = 'row';
        })
      })
      
      headings.forEach((h) => {
       h.style.paddingTop = '28px'
        if (
          windowScrollTop + 50 >
          h.getBoundingClientRect().top + windowScrollTop
        ) {
          if (actives.indexOf(h.id) === -1) {
            actives.push(h.id)
          }
        }
      })
      if (actives.length) setActiveToc(actives[actives.length - 1])
    }
    if (headings.length) setActiveToc(headings[0].id)
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])
  const articleUrl = `https://www.redbangle.com/blog/${router.query.slug}`

  const [isCopy, setIsCopy] = useState(false)
  const copyPageUrl = () => {
    navigator.clipboard.writeText(window.location.href)
    setIsCopy(true)
    // const copyPopup = document.querySelector('.copy-link-popup')

    // copyPopup.classList.add('show')

    setTimeout(() => {
      setIsCopy(false)
      // copyPopup.classList.remove('show')
    }, 2000)
  }
// Sort categories so that the primaryCategory appears first
const sortedCategories = [
  article?.categories?.find(category => category.name === article?.primaryCategory),
  article?.categories?.find(category => category.name === article?.secondaryCategory),
  article?.categories?.find(category => category.name === article?.tertiaryCategory),
  ...article?.categories?.filter(category => 
    category.name !== article?.primaryCategory && 
    category.name !== article?.secondaryCategory && 
    category.name !== article?.tertiaryCategory
  )
].filter(Boolean); // This ensures no undefined values if any category is missing


  const whatYouDoData = [
    {
      title: 'Industry Insights'
    },
    {
      title: 'Trends & Reports'
    },
    {
      title: 'Case Studies'
    },
    {
      title: 'Practical Tips'
    },
    {
      title: 'Exclusive Contents'
    },
    {
      title: 'Company News'
    }
  ]


  return (
    <div className='relative'>
      <SEO
        title={article?.title}
        description={article?.excerpt}
        image={
          article?.featuredImage?.src ??
          'https://www.redbangle.com/img/redbangle.jpg'
        }
      />
      {
        showPopup && (
          <>
            <div
              className='fixed z-10 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-[32%] backdrop-blur-sm p-5 lg:p-0 flex cursor-auto'
            >
              <div className='m-auto relative lg:w-[600px] w-[90%]'>
                <IoClose
                  onClick={() => setPopup(false)}
                  className='absolute top-2 right-2 text-4xl bg-[#0000001A] h-[30.78px] w-[33.6px] rounded-full cursor-pointer'
                />
                <div
                  className='border-2 rounded-xl bg-[#F1F2F6]'
                  onWheel={(e) => e.stopPropagation()}
                >
                  <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className='p-5 col-span-1 lg:col-span-2 h-[80vh] lg:h-auto overflow-y-auto'>
                      <ClientInquiryForm isPopop={true} />
                    </div>
                    {/* <div className='hidden lg:block'>
                      <div className='p-5 flex bg-[#EBEBEB] h-[100%] rounded-xl'>
                        <div className='m-auto font-opensans'>
                          <div className='text-center text-xl font-semibold'>What do you get when<br />you subscribe?</div>

                          <div className='mt-[26px] bg-[#00000038] h-[2px] w-[90%] mx-auto mb-[34px]' />
                          <div>
                            {
                              whatYouDoData.map((item, index) =>
                                <div key={index} className='text-lg text-center leading-[25px] mb-[25px] font-normal'>
                                  {item.title}
                                </div>
                              )
                            }
                          </div>

                        </div>
                      </div>

                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }




      <div id='showBtn'>
        <article>
          <section className="pt-9">
            <div className="container">
              <div className="flex gap-1 flex-wrap items-center pb-2">
                <Link
                  href="/blog"
                  className="opacity-60 font-semibold text-[12px] md:text-[16px]"
                >
                  Blog
                </Link>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M5.625 3.125 10 7.5l-4.375 4.375"
                    stroke="#111010"
                    strokeOpacity=".6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {article?.categories?.length && (
                  <>
                    <Link
                    href=  {`/blog?category=${article?.categories?.find(category => category.name === article?.primaryCategory)?.description}`}
                      //  href={article?.categories?.find(category => category.name === article?.primaryCategory)?.slug}
                      className="opacity-60 capitalize font-semibold text-[12px] md:text-[16px]"
                    >
                      {article?.primaryCategory}
                    </Link>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M5.625 3.125 10 7.5l-4.375 4.375"
                        stroke="#111010"
                        strokeOpacity=".6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}

                <Link
                  href={`/blog/${article?.slug}`}
                  className="font-semibold text-[12px] md:text-[16px]"
                >
                  {article?.title}
                </Link>
              </div>

              <div className="max-w-[1096px] pb-10">

                <h1 className="font-everett text-[32px] md:text-[48px] lg:text-[72px] leading-[120%] capitalize font-medium mb-3 tracking-[-1.44px]">
                  {article?.title}
                </h1>

                <div className="flex flex-wrap gap-4 mb-4">
                  {sortedCategories?.map((t) => (
                    <Link
                    href={`/blog?category=${(t.description)}`}
                      key={t.slug}
                      className="border border-rb-black/70 rounded-full py-1 px-4 text-[12px] font-semibold inline-flex"
                    >
                      {t.name}
                    </Link>
                  ))}
                </div>

                <div
                  className="md:text-[24px] text-rb-black/80"
                  dangerouslySetInnerHTML={{ __html: article?.excerpt }}
                ></div>
              </div>

              <div className="flex flex-wrap justify-between items-center pt-8 border-t border-t-black/10">
                <div className="flex gap-4 items-center">
                  <div className="md:w-16 md:h-16 w-13 h-13 rounded-full overflow-hidden">
                    <img
                      src="/img/blog-thumb.jpg"
                      {...article?.avatar}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="font-semibold">By {article?.author}</p>
                    {article?.authorAbout && (
                      <p className="mt-2 mb-0 opacity-60 font-semibold">
                        {article?.authorAbout}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 md:block md:text-right pt-4 pl-[68px] md:p-0">
                  <p className="font-semibold">
                    {String(article?.readTime).padStart(2, '0')} min read{' '}
                  </p>
                  <p className="font-semibold">{article?.date}</p>
                </div>
              </div>
            </div>

            <div className="pt-10 md:pt-18">
              <div className="h-[180px] md:h-[556px] overflow-hidden">
                <img
                  src="/img/blog-inner-thumb.jpg"
                  {...article?.featuredImage}
                  className="w-full h-full object-cover"
                  alt={article?.featuredImage?.alt}
                />
              </div>
            </div>
          </section>

          <section className="pb-10 md:pb-20">
            <div className="container">
              <div className="flex -mx-4 flex-wrap">
                <div className="w-full md:w-3/4 px-4 pt-9">
                  <div
                    ref={blogRef}
                    className="blog-content-main max-w-[830px]"
                    dangerouslySetInnerHTML={{ __html: article?.content }}
                  >
                  </div>
                </div>

                <div className="w-full md:w-1/4 px-4 mt-9">
                  <div
                    className={`  md:opacity-100 md:visible md:sticky md:top-18 md:h-auto fixed inset-0 w-full h-full bg-black/30 md:bg-transparent px-6 md:px-0 duration-300 ease-out ${toc ? 'opacity-1 visible' : 'opacity-0 invisible'
                      }`}
                  >
                    {tocTree.children.length >= 2 &&
                      <div className="md:border md:border-black/20 rounded-lg mb-4 bg-white mt-10 md:mt-0 cursor-none">
                        {/* {console.log('aaaaaaaaaaa',tocTree.children.length)} */}
                        <div className="py-4 px-5 text-[14px] font-semibold md:border-b md:border-b-black/20 flex justify-between items-center">
                          Table of contents
                          <button
                            onClick={() => settoc(!toc)}
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
                        <div
                          className="py-4 px-5 text-[14px] font-semibold toc-content flex flex-col gap-4 md:max-h-[500px] md:overflow-y-auto rb-scrollbar"
                          data-lenis-prevent
                        >
                          {/* <div>
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
                    </div> */}

                          <TOC
                            lenis={lenis}
                            isRoot
                            isActive={(id) => id === activeToc}
                            {...tocTree}
                            settoc={settoc}
                            toc={toc}
                          />
                        </div>
                      </div>
                    }
                    <div className="hidden md:block">
                      <h3 className="text-xl lg:text-lg font-medium font-everett mb-3">
                        Share it on:
                      </h3>



                      {/* Linked in  */}
                      <div className="flex gap-4 relative w-fit">

                        <LinkedinShareButton url={`https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`} quote={'Linkedin'}>
                          <a
                            target="_blank" rel="noopener noreferrer"
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`}
                            className={`border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center hover:border-[#0a66c2] p-1 fill-[#333333] hover:fill-[#0a66c2] duration-500 bg-white`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path
                                d="M18.72 4H5.37A1.31 1.31 0 004 5.25v13.38A1.41 1.41 0 005.37 20h13.35A1.34 1.34 0 0020 18.63V5.25A1.23 1.23 0 0018.72 4zM9 17.34H6.67v-7.13H9v7.13zM7.89 9.13A1.18 1.18 0 016.67 7.9a1.18 1.18 0 011.24-1.23A1.18 1.18 0 019.13 7.9a1.18 1.18 0 01-1.24 1.23zm9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 00-1.17.84 1.431 1.431 0 00-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 012.1-1.21c1.51 0 2.65 1 2.65 3.13v4.21z"
                              ></path>
                            </svg>
                          </a>
                        </LinkedinShareButton>

                        {/* Twitter  */}
                        <TwitterShareButton url={`https://twitter.com/intent/tweet?text=${articleUrl}`} quote={'Twitter'}>
                          <a
                            target="_blank" rel="noopener noreferrer"
                            href={`https://twitter.com/intent/tweet?text=${articleUrl}`}
                            className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center hover:border-black hover:stroke-black fill-[#333333] p-2 hover:fill-black duration-500 bg-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className=''
                              viewBox="0 0 50 50"
                            >
                              <path d="M5.92 6l14.662 21.375L6.23 44h3.18l12.576-14.578 10 14.578H44L28.682 21.67 42.199 6h-3.17L27.275 19.617 17.934 6H5.92zm3.797 2h7.164l23.322 34H33.04L9.717 8z"></path>
                            </svg>
                          </a>
                        </TwitterShareButton>
                        {/* Whatsapp  */}

                        <WhatsappShareButton url={`whatsapp://send?text=${articleUrl}`} quote={'Twitter'}>
                          <a
                            target="_blank" rel="noopener noreferrer"
                            href={`whatsapp://send?text=${articleUrl}`}
                            data-action="share/whatsapp/share"
                            className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center hover:border-[#0d8d3c] fill-[#333333] hover:fill-[#0d8d3c] duration-500 bg-white"
                          >
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                            // fill="none"
                            >
                              <g opacity="0.8">
                                <path
                                  d="M10.9987 1.8335C16.0615 1.8335 20.1654 5.93741 20.1654 11.0002C20.1654 16.0629 16.0615 20.1668 10.9987 20.1668C9.37876 20.1694 7.78731 19.7407 6.38788 18.9247L1.83571 20.1668L3.07504 15.6128C2.25838 14.213 1.82934 12.6208 1.83204 11.0002C1.83204 5.93741 5.93596 1.8335 10.9987 1.8335ZM7.87471 6.69183L7.69138 6.69916C7.57269 6.70639 7.45669 6.73757 7.35038 6.79083C7.25094 6.84714 7.16017 6.91754 7.08088 6.99983C6.97088 7.10341 6.90854 7.19325 6.84163 7.28033C6.50257 7.72116 6.32002 8.26237 6.32279 8.8185C6.32463 9.26766 6.44196 9.70491 6.62529 10.1137C7.00021 10.9406 7.61713 11.816 8.43113 12.6272C8.62729 12.8225 8.81979 13.0187 9.02696 13.2011C10.0384 14.0916 11.2437 14.7338 12.547 15.0766L13.0676 15.1563C13.2372 15.1655 13.4068 15.1527 13.5773 15.1444C13.8443 15.1306 14.1049 15.0583 14.3409 14.9327C14.4609 14.8708 14.5781 14.8035 14.692 14.731C14.692 14.731 14.7314 14.7053 14.8065 14.6485C14.9303 14.5568 15.0064 14.4917 15.109 14.3845C15.1851 14.3057 15.2511 14.2131 15.3015 14.1077C15.373 13.9582 15.4445 13.6732 15.4739 13.4357C15.4959 13.2542 15.4895 13.1552 15.4867 13.0938C15.483 12.9957 15.4015 12.894 15.3125 12.8509L14.779 12.6117C14.779 12.6117 13.9815 12.2642 13.4939 12.0424C13.4428 12.0201 13.3882 12.0074 13.3325 12.0048C13.2698 11.9984 13.2065 12.0054 13.1467 12.0255C13.0869 12.0456 13.0321 12.0782 12.986 12.1212C12.9815 12.1194 12.92 12.1717 12.2573 12.9747C12.2193 13.0258 12.1669 13.0644 12.1068 13.0856C12.0467 13.1069 11.9817 13.1097 11.92 13.0938C11.8602 13.0778 11.8017 13.0576 11.7449 13.0333C11.6312 12.9857 11.5918 12.9673 11.5139 12.9343C10.9878 12.7047 10.5007 12.3946 10.0701 12.0149C9.95463 11.9141 9.84738 11.8041 9.73738 11.6977C9.37675 11.3524 9.06246 10.9617 8.80238 10.5354L8.74829 10.4483C8.70945 10.3898 8.67804 10.3267 8.65479 10.2604C8.61996 10.1257 8.71071 10.0175 8.71071 10.0175C8.71071 10.0175 8.93346 9.77366 9.03704 9.64166C9.13788 9.51333 9.22313 9.38866 9.27813 9.29975C9.38629 9.12558 9.42021 8.94683 9.36338 8.80841C9.10671 8.18141 8.84088 7.55716 8.56771 6.9375C8.51363 6.81466 8.35321 6.72666 8.20746 6.70925C8.15796 6.70375 8.10846 6.69825 8.05896 6.69458C7.93586 6.68846 7.8125 6.68969 7.68954 6.69825L7.87379 6.69091L7.87471 6.69183Z"
                                // fill="#333333"
                                />
                              </g>
                            </svg>
                          </a>
                        </WhatsappShareButton>
                        <div className=''>
                          <button
                            // onClick={() => {
                            //   try {
                            //     navigator.clipboard.writeText(articleUrl)
                            //   } catch {
                            //     console.log('cannot copy')
                            //   }
                            // }}
                            onClick={copyPageUrl}
                            data-rb-cursor-state="invisible"
                            className="border border-rb-dune rounded-full w-10 h-10 inline-flex justify-center items-center duration-500 hover:border-black fill-none stroke-[#5C5C5C] hover:stroke-black bg-white"
                          >
                            <svg width="20" height="20" viewBox="0 0 20 20">
                              <path
                                d="M4.16797 12.5003H3.33464C2.89261 12.5003 2.46868 12.3247 2.15612 12.0122C1.84356 11.6996 1.66797 11.2757 1.66797 10.8337V3.33366C1.66797 2.89163 1.84356 2.46771 2.15612 2.15515C2.46868 1.84259 2.89261 1.66699 3.33464 1.66699H10.8346C11.2767 1.66699 11.7006 1.84259 12.0131 2.15515C12.3257 2.46771 12.5013 2.89163 12.5013 3.33366V4.16699M9.16667 7.5H16.6667C17.5871 7.5 18.3333 8.24619 18.3333 9.16667V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16667C7.5 8.24619 8.24619 7.5 9.16667 7.5Z"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <div className={`absolute bg-rb-black p-2 text-white text-xs rounded right-0 -bottom-12 ${isCopy ? '' : 'hidden'}`}>
                            <div className='h-3 w-5 bg-rb-black absolute -top-[10px] right-2' style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>

                            </div>
                            Link copied to clipboard
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="min-w-[180px] lg:mx-0 mx-auto my-10"
                // disabled={firstStepDisabled}
                onClick={() => setPopup(true)}
                // type={step == 1 ? 'button' : 'submit'}
                suffix={<LineArrow />}
              >
                Connect with us
              </Button>
            </div>


            <div className={`fixed bottom-12 left-0 right-0 flex justify-center md:hidden ${!contentVisible ? 'hidden' : ''}`}>
              <Button onClick={() => settoc(!toc)}>Table of Contents</Button>
            </div>
          </section>
        </article>
      </div>
      <GetUpdates />
      <section className="py-25">
        <div className="container">
          {/* <h2 className="text-title md:text-title-md mb-8 font-everett"> */}
          <h2 className="font-medium text-2xl md:text-[32px] mb-8 font-everett">
            Recently Added Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-8">
            {relatedArticle.map(
              ({ title, date, slug, author, categories, featuredImage }) => (
                <Link href={`/blog/${slug}`} key={slug}>
                  <div

                    className="h-[384px] block md:h-[272px] overflow-hidden relative mb-4"
                  >
                    <img
                      src="/img/blog-thumb.jpg"
                      {...featuredImage}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    {/* {categories.map((c) => (
                        <div
                          className="absolute capitalize border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white"
                          key={c.slug}
                        >
                          {c.name}
                        </div>
                      ))} */}
                    {categories.some(category => category.name.includes('SEO Blogs')) ?
                      <div
                        className="absolute capitalize border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white"
                      >
                        SEO Blogs
                      </div>
                      :
                      categories[0].name == 'Uncategorized' ?
                        null
                        :
                        <div
                          className="absolute capitalize border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white"
                        >
                          {categories[0].name}
                        </div>
                    }
                  </div>

                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="text-[14px] md:text-[16px]">{date}</span>
                      <span className="text-[14px] md:text-[16px]">|</span>
                      <span className="text-[14px] md:text-[16px]">
                        {author}
                      </span>
                    </div>

                    <h3 className="text-[20px] md:text-[28px] leading-[120%] font-medium font-everett mb-8 tracking-[-0.96px]">
                      {title}
                    </h3>

                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex gap-2 items-center text-rb-red font-semibold"
                    >
                      Continue reading
                      <LineArrow className=" max-w-[20px]" />
                    </Link>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
export const getStaticPaths = async () => {
  const { data } = await getAllBlogs()

  const paths = (data?.posts?.nodes || []).map(({ slug }) => ({
    params: { slug },
  }))
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const { slug } = params
  const { data, status } = await getBlog(slug)
  if (status !== 'success') {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }
  const relatedArticle = await getRelatedBlogs(
    data.post?.slug,
    data.post?.tags?.nodes?.map((t) => t.slug) || []
  )
  let toc = {}
  const content = await rehype()
    .data('settings', { fragment: true })
    .use(rehypeSlug)
    .use(rehypeToc, {
      headings: ['h2', 'h3', 'h4', 'h5', 'h6'],
      customizeTOC: (tree) => {
        toc = tree
        return false
      },
    })
    .process(data.post?.content || '')

  return {
    props: {
      article: {
        ...formateBlogPostFunc(data.post),
        content: String(content),
      },
      tocTree: toc?.children?.length ? processTree(toc.children[0]) : null,
      relatedArticle: relatedArticle.map(formateBlogPostFunc),
    },
  }
}
export default ArticleSingle
