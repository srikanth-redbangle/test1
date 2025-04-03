import { Marquee } from '../Marquee'

export const WorkListHeroSection = ({
  type,
  content,
  className = '',
  contentClassName = '',
  pillImg,
  typeTwo,
  alt=''
}) => {
  return (
    <section
      className={`py-14 md:py-23 text-white overflow-hidden ${className}`}
    >
      <div className="hidden">{type}</div>
      <Marquee duration={20}>
        <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
          {type}
          <img
            className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
            src={pillImg ? pillImg : '/img/pill-marq.webp'}
            width="562"
            height="210"
            alt={alt||'ad for pill production company'}
          />
        </div>
        {typeTwo ? (
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            {typeTwo}
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src={pillImg ? pillImg : '/img/pill-marq.webp'}
              width="562"
              height="210"
              alt="pill marq"
            />
          </div>
        ) : (
          ''
        )}
      </Marquee>
      <div className="container">
        <div
          className={`w-full text-base leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:mt-16 ${contentClassName}`}
        >
          {content}
        </div>
      </div>
    </section>
  )
}
