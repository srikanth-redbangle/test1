import { useEffect, useRef } from 'react'
import { LineHeading } from '../Heading'
import { PostContent } from '../PostContent'
import { useLenis } from '@studio-freight/react-lenis'
import ReactPlayer from 'react-player'
import dayjs from 'dayjs'

export const VideoMetaModal = ({ loading, open, setOpen, video }) => {
  const container = useRef()
  const overlayRef = useRef()
  const lenis = useLenis()
  useEffect(() => {
    const onClick = (e) => {
      if (container.current === e.target || overlayRef.current === e.target) {
        setOpen(false)
      }
    }
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [setOpen])
  useEffect(() => {
    const video = container.current?.querySelector('video')
    if (video) {
      if (open) {
        video.src = video.src
        video.muted = false
        video.play()
      } else {
        video.muted = true
        video.pause()
      }
    }
    if (open) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [open, lenis])
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      // data-rb-cursor
      // data-rb-cursor-type="live"
      className="fixed flex items-center justify-center left-0 top-0 z-[999] w-full h-full opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible"
      ref={container}
    >
      <div className="absolute w-full h-full modal-blur" ref={overlayRef}></div>
      <div className="relative overflow-hidden rounded">
        <button
          aria-label="close modal"
          onClick={() => setOpen(false)}
          className="w-8 h-8 absolute top-4.5 right-4.5 bg-white/10 z-[1] flex items-center justify-center rounded-full"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3307 1.66797L1.66406 12.3346"
              stroke="white"
              strokeWidth="1.74545"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.66406 1.66797L12.3307 12.3346"
              stroke="white"
              strokeWidth="1.74545"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {!loading && open && video && (
          <div
            className="bg-white max-w-[calc(100vw_-_64px)] cursor-auto md:max-w-[calc(100vw_-_128px)] lg:max-w-[calc(60vw_-_128px)] max-h-[90vh] rb-scrollbar overflow-y-auto"
            data-lenis-prevent
          >
            <div className="bg-black aspect-video">
              <ReactPlayer
                width="100%"
                height="100%"
                playsinline
                loop
                playing
                controls
                url={video?.workDetails?.videolink}
              />
            </div>
            <div className="flex flex-wrap px-8 py-6 md:px-16 md:py-9 text-sm leading-4 md:text-base">
              <div className="w-full md:w-2/3 md:px-3">
                <h3 className=" text-rb-red text-2xl font-semibold">
                  Video Description
                </h3>
                <PostContent
                  content={video?.content}
                  noMargin
                  className="mt-4 md:mt-6"
                />
              </div>
              <div className="w-full md:w-1/3 mt-8 md:mt-0 md:px-3">
                <h3 className=" text-rb-red text-2xl font-semibold">
                  Project Details
                </h3>

                <ul className="mt-4 md:mt-6 grid grid-cols-1 gap-1">
                  {video?.companies?.nodes?.length > 0 && (
                    <li>
                      Brand -{' '}
                      {video?.companies?.nodes?.map((n) => n?.name).join(', ')}
                    </li>
                  )}
                  {video?.tags?.nodes?.length > 0 && (
                    <li>
                      Usage -{' '}
                      {video?.tags?.nodes
                        ?.filter((n) => n?.slug !== 'featured-work')
                        ?.map((n) => n?.name)
                        .join(', ')}
                    </li>
                  )}
                  {video?.usage?.nodes?.length > 0 && (
                    <li>
                      Type -{' '}
                      {video?.usage?.nodes?.map((n) => n?.name).join(', ')}
                    </li>
                  )}
                  {video?.videoDetails?.publish && (
                    <li>
                      Year -{' '}
                      {dayjs(video?.videoDetails?.publish).format('YYYY')}
                    </li>
                  )}
                  {video?.videoDetails?.width &&
                    video?.videoDetails?.height && (
                      <li>
                        Dimensions - {video?.videoDetails?.width} x{' '}
                        {video?.videoDetails?.height}
                      </li>
                    )}
                  {video?.videoDetails?.aspectRatio && (
                    <li>Aspect Ratio - {video?.videoDetails?.aspectRatio}</li>
                  )}

                  {video?.videoDetails?.duration && (
                    <li>Duration - {video?.videoDetails?.duration}</li>
                  )}
                  {video?.videoDetails?.fps && (
                    <li>FPS - {video?.videoDetails?.fps}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
