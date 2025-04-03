import WorkSlider from '@/components/sliders/WorkSlider'
import { LineHeading } from '../Heading'

export const WorksSection = ({ className = '' }) => (
  <section className={`overflow-hidden bg-white py-7.5 md:py-15 ${className}`}>
    <div className="container">
      <LineHeading className="mb-6 md:mb-9">FEATURED WORK</LineHeading>
      <h3 className="text-title md:text-title-md mb-12 md:mb-14 font-everett max-w-[911px]">
        Portfolio of productions that exemplify our commitment to excellence.
      </h3>
      <WorkSlider />
    </div>
  </section>
)
