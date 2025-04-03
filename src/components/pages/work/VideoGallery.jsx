import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from 'react-player'
import styles from '@/styles/ui/VideoGallery.module.scss'
import ArrowButtons from '@/components/arrow/arrow'
import classNames from 'classnames';

export const VideoGallery = ({ sources = [], type = null }) => {
  const [hasWindow, setHasWindow] = useState(false)
  const [selected, setSelected] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false); // Controls play state
  const [isMuted, setIsMuted] = useState(false); // Controls mute state


  const { name: sName, company: sComapany, thumbnail, vimeoId,url } = sources[selected]
  const sliderRef = useRef()

  const handlePrev = () => sliderRef.current?.swiper.slidePrev();
  const handleNext = () => sliderRef.current?.swiper.slideNext();
  const handleThumbnailClick = (index) => {
    setSelected(index);     // Set the selected item
    setIsPlaying(true); // Start playing the video
    setIsMuted(false);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  return (
    <div id='video' className={classNames('container', { 'relative': type === 'videogallery' })}>
      <div
        className={`bg-rb-black ${styles.playerwrapper} ${type === 'videogallery' ? 'mt-1 md:mt-6' : 'mt-15 md:mt-18'}`}
        data-rb-cursor
        data-rb-cursor-state="invisible"
      >
        {hasWindow && (
          <ReactPlayer
            className={styles.reactplayer}
            playsinline
            loop
            playing={isPlaying}
            preload="auto"
            muted={isMuted}
            controls
            url={vimeoId ? `https://vimeo.com/${vimeoId}` : url}
            // url={`https://vimeo.com/${vimeoId}`}
            // url='https://www.youtube.com/watch?v=xvvpNmP1G_4'
            width="100%"
            height="100%"
            light={`${thumbnail?.src}`}
            onClickPreview={() => setIsPlaying(true)}
          />
        )}
      </div>

      <div className="text-base leading-5 md:text-[29px] font-everett uppercase mt-4 mb-6 md:mt-7 md:mb-16">
        {sName}
        {/* ,{' '} */}
        {/* <span className="text-rb-black/60 text-xs leading-2.5 md:text-[26px] md:leading-8 block md:inline mt-1 md:mt-0">
          {sComapany}
        </span> */}
      </div>

      <div>
        <Swiper
          ref={sliderRef}
          spaceBetween={12}
          slidesPerView={2.1}
          className={classNames('swiper-overflow-visible', { 'md:w-[200%]': type === 'videogallery' })}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        // onSwiper={(swiper) => (sliderRef.current = swiper)}  
        >
          {sources.map(
            ({ key, duration, vimeoId: vId, thumbnail, name, company }, i) => (
              <SwiperSlide
                className="relative group"
                key={key}
                data-playing={selected == i}
              >
                <button
                  className="text-left w-full cursor-pointer"
                  onClick={() => handleThumbnailClick(i)}
                >
                  <div className="relative aspect-[297/176] w-full overflow-hidden mb-3">
                    <img
                      {...thumbnail}
                      alt={name}
                      className="w-full h-full object-cover absolute group-data-[playing=true]:opacity-60 transition-all"
                    />
                    <div className="absolute text-[10px] md:text-xs py-1 px-4 md:py-2 md:px-6 whitespace-nowrap rounded-2xl bg-rb-black text-white font-semibold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 invisible group-data-[playing=true]:visible">
                      Currently Playing
                    </div>
                  </div>
                  <div className={classNames('uppercase font-everett text-xs leading-4 md:leading-4.5',
                    {
                      'md:text-base': type === 'videogallery',
                      'md:text-xl': type !== 'videogallery'
                    }
                  )}>{name}</div>
                  {/* <div className="uppercase font-everett text-[10px] leading-2.5 md:text-base  md:leading-4.5 mt-1 text-rb-black/60">
                    {company}
                  </div> */}
                </button>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      {['videogallery','projectLoom'].includes(type) && sources.length > 4 && (
        <ArrowButtons onPrev={handlePrev} onNext={handleNext} type={type}/>
      )}
    </div>
  )
}