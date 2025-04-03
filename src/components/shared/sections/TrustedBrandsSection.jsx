import { useEffect } from 'react'
import { LineHeading } from '../Heading'
import { gsap } from 'gsap'
import { Marquee } from '../Marquee'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

export const icons = [
  {
    id: 0,
    name: 'taneria.png',
    width: '132',
    height: '36',
    alt: 'taneria',
    className: '',
  },
  {
    id: 1,
    name: 'cain.webp',
    width: '100px',
    height: '34px',
    alt: 'cain',
  },
  {
    id: 2,
    name: 'honasa.webp',
    width: '90px',
    // height: '3px',
    alt: 'honasa',
  },
  {
    id: 3,
    name: 'swiggy.svg',
    width: '137',
    height: '39',
    alt: 'swiggy',
  },
   {
    id: 4,
    name: 'indeed.webp',
    width: '132',
    height: '36',
    alt: 'indeed',
    className: '',
  },
  {
    id: 5,
    name: 'metro-wholesale.webp',
    width: '120',
    // height: '30',
    alt: 'metro-wholesale',
  },
  {
    id: 6,
    name: 'itc.png',
    width: '60px',
    // height: '30px',
    alt: 'itc',
  },
  {
    id: 7,
    name: 'mumbai-indians.png',
    width: '100px',
    // height: '40px',
    alt: 'mumbai-indians',
  },
  {
    id: 8,
    name: 'l74-logo.png',
    width: '60px',
    // height: '67px',
    alt: 'l74-logo',
  },
  {
    id: 9,
    name: 'xiaomi-logo.webp',
    width: '126',
    height: '41',
    alt: 'xiaomi',
  },
  {
    id: 10,
    name: 'zivame.webp',
    width: '126px',
    height: '41px',
    alt: 'zivame',
  },
  {
    id: 11,
    name: 'my-11-circle.webp',
    width: '154',
    height: '42',
    alt: 'my-11-circle',
  },
  {
    id: 12,
    name: 'Tanishq.png',
    width: '80',
    height: '67',
    alt: 'Tanishq',
  },
  {
    id: 13,
    name: 'thelagram-red-logo.png',
    width: '70px',
    // height: '66px',
    alt: 'thelegram',
  },
  {
    id: 14,
    name: 'pdd-black.png',
    width: '75px',
    // height: '66px',
    alt: 'pdd',
  },
  // {
  //   id: 0,
  //   name: 'darwinbox.webp',
  //   width: '153',
  //   height: '34',
  //   alt: 'darwinbox',
  // },
  // {
  //   id: 1,
  //   name: 'wipro.svg',
  //   width: '83',
  //   height: '66',
  //   alt: 'Wipro',
  //   className: 'w-[70%] md:w-auto',
  // },
  // {
  //   id: 2,
  //   name: 'sequoia.svg',
  //   width: '176',
  //   height: '35',
  //   alt: 'Sequoia',
  // },
 
  

  // {
  //   id: 5,
  //   name: 'ikea.webp',
  //   width: '131',
  //   height: '52',
  //   alt: 'ikea',
  // },
  // // {
  // //   id: 6,
  // //   name: 'titan-logo.webp',
  // //   width: '80',
  // //   height: '67',
  // //   alt: 'titan',
  // // },
  
  // {
  //   id: 7,
  //   name: 'tata-logo.svg',
  //   width: '150',
  //   height: '40',
  //   alt: 'tata',
  // },
  // {
  //   id: 8,
  //   name: 'ashirwad-logo.webp',
  //   width: '110',
  //   height: '56',
  //   alt: 'ashirwad',
  // },

  // {
  //   id: 9,
  //   name: 'india-gold.webp',
  //   width: '143',
  //   height: '32',
  //   alt: 'india-gold',
  // },
  
  // {
  //   id: 11,
  //   name: 'healthifyme.webp',
  //   width: '156',
  //   height: '40',
  //   alt: 'healthifyme',
  // },
  
  // {
  //   id: 13,
  //   name: 'koo.webp',
  //   width: '88',
  //   height: '50',
  //   alt: 'koo',
  // },
  // {
  //   id: 14,
  //   name: 'vymo.svg',
  //   width: '106',
  //   height: '38',
  //   alt: 'vymo',
  // },
  // // {
  // //   id: 15,
  // //   name: 'taneria.png',
  // //   width: '138',
  // //   height: '54',
  // //   alt: 'taneria',
  // // },
  // {
  //   id: 16,
  //   name: 'slb-logo.webp',
  //   width: '85',
  //   height: '53',
  //   alt: 'slb',
  // },
  // {
  //   id: 17,
  //   name: 'mygate-logo.webp',
  //   width: '133',
  //   height: '36',
  //   alt: 'mygate',
  // },
]

export const TrustedBrandsSection = ({
  className = '',
  heading = 'Trusted by global brands',
  ...props
}) => {
  // const ricons = [
  //   [icons[0], icons[2], icons[4]],
  //   [icons[1], icons[3], icons[5]],
  //   [icons[6], icons[8], icons[10]],
  //   [icons[7], icons[9], icons[11]],

  //   [icons[2], icons[4], icons[0]],
  //   [icons[3], icons[5], icons[1]],
  //   [icons[8], icons[10], icons[6]],
  //   [icons[9], icons[11], icons[7]],

  //   [icons[4], icons[0], icons[2]],
  //   [icons[5], icons[1], icons[3]],
  //   [icons[10], icons[6], icons[8]],
  //   [icons[11], icons[7], icons[9]],
  // ]
  // useEffect(() => {
  //   const logocontainer = gsap.utils.toArray('.brand-logos')
  //   const tls = []
  //   logocontainer.forEach((container, i) => {
  //     const tl = gsap.timeline({ repeat: -1 })
  //     const stack = [...container.querySelectorAll('.logo')]
  //     const duration = 0.8
  //     const delay = 6 + 2 * (i % 4)
  //     tl.fromTo(stack[0], { opacity: 0 }, { opacity: 1, duration })
  //       .to(stack[0], { opacity: 0, duration: 0.1, delay })
  //       .fromTo(stack[1], { opacity: 0 }, { opacity: 1, duration })
  //       .to(stack[1], { opacity: 0, duration: 0.1, delay })
  //       .fromTo(stack[2], { opacity: 0 }, { opacity: 1, duration })
  //       .to(stack[2], { opacity: 0, duration: 0.1, delay })

  //     tls.push(tl)
  //   })

  //   return () => {
  //     tls.forEach((t) => t?.kill())
  //   }
  // }, [])
  return (
    <section className={className} {...props}>
      <div className="container">
        <LineHeading className="mb-7 md:mb-10">{heading}</LineHeading>
        {/* <div className="grid md:gap-y-15 grid-cols-4 gap-x-8 gap-y-6 md:grid-cols-6 justify-items-center items-center"> */}
        {/* {icons.map(({ name, id, ...rest }) => (
            <div key={id}>
              <img src={`/img/logos/${name}`} loading="lazy" alt="" {...rest} />
            </div>
          ))} */}
        {/* {ricons.map((row, i) => (
            <div key={i} className="grid grid-cols-1 grid-rows-1 brand-logos">
              {row.map(({ name, id, ...rest }) => (
                <div
                  key={id}
                  className="w-full h-full bg-white col-start-1 row-start-1 place-content-center grid logo"
                >
                  <img
                    src={`/img/logos/${name}`}
                    loading="lazy"
                    alt=""
                    {...rest}
                  />
                </div>
              ))}
            </div>
          ))} */}
        {/* </div> */}
        <div className="overflow-hidden md:min-h-[188px]">
          <Marquee duration={40}>
            <div className="flex items-center">
              {icons.slice(0, icons.length / 2).map(({ name, id, ...rest }) => (
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
          <div className="mt-10 md:mt-20"></div>
          <Marquee duration={40} direction={-1}>
            <div className="flex items-center">
              {icons.slice(icons.length / 2).map(({ name, id, ...rest }) => (
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
    </section>
  )
}