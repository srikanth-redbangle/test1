import { ContentPostCard } from '@/components/shared/Cards/ContentPostCard'
import { Button } from '../../../ui'
import { LineArrow } from '../../../icons'
import { LineHeading } from '../../Heading'

export const FeaturedWorkSection = ({
  title = 'Here’s a portfolio of work that worked',
  posts = [],
  href = '/work/play',
}) => {
  return (
    <section className="bg-white py-7.5 md:py-15">
      <div className="container">
        <LineHeading className="mb-6 md:mb-9">FEATURED WORK</LineHeading>

        <div className="rb-row mb-10 md:mb-18 md:items-center">
          <div className="w-full md:w-7/12">
            <h3 className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-[963px]">
              {title}
            </h3>
          </div>
          <div className="w-full hidden md:block md:w-5/12">
            <Button
              suffix={<LineArrow hover />}
              intent="p-secondary"
              href={href}
              className="md:float-right"
            >
              EXPLORE WORK
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-6 mt-16 md:mt-20">
          {posts.map((p, i) => (
            <ContentPostCard type={'md'} key={p.key} {...p} />
          ))}
        </div>
        <Button
          className="w-full md:hidden mt-5"
          href={href}
          suffix={<LineArrow />}
        >
          EXPLORE ALL
        </Button>
      </div>
    </section>
  )
}
