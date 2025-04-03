import { LineArrow } from '@/components/icons'
import { scsThinkWorkSchema } from '@/components/schema/scs-think-work-schema'
import {
  LineHeading,
  TrustedBrandsSection,
  Testimonials,
  WorkListHeroSection,
} from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui'
import { scsPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'

export default function SCS() {
  const _posts = scsPosts.map(postsMapper)

  return (
    <>
      <SEO
        title="Integrated Marketing Agency for Brand Growth"
        description="Explore our integrated marketing case studies that delivered success and helped drive ROI for brands"
        keywords="Integrated Marketing Agency, Integrated Marketing Solutions, Internet Marketing Agency, Successful Campaigns, Case Studies, Digital Marketing Solutions, Brand Growth, Digital Marketing Agency, Digital Marketing Services, Marketing Agency, Digital Marketing Strategies, Holistic Marketing, Digital Advertising, Marketing Agency Near Me, Content Marketing For Saas Companies, Digital Media Marketing, Content Marketing Strategy, Marketing Content Strategy, Digital Marketing Specialist, Content Marketing In Digital Marketing, Digital Marketing Solutions, Digital Brand Management, Content Marketing In Social Media, Social Media Content Marketing, Content Marketing Services, Creative Content Marketing, Content Marketing Agencies, Digital Content Marketing Strategy, Digital And Content Marketing, Digital Media Marketing Agency, Full Service Agency, Content Marketing Process, Content Marketing For Startups, Content Marketing For Nonprofits, Content Agency, Digital Advertising Near Me, Internet Marketing Agency, Brand Content Strategy, Online Marketing Firm, Internet Marketing Consultant Near Me, B2b Internet Marketing Agency, Content Marketing BriefContent Marketing Financial Services, Content Marketing Specialist, Video Content Marketing, Brand Strategy Company, Content Marketing Company, Content Marketing For B2b Companies, Successful Content Marketing Strategies, Content Marketing Pricing, Content Marketing Management, B2b Content Marketing Strategy, Content Strategy Services, Content Strategy Service, Digital Advertising Consultant, Full Service Digital Agency, Integrated Marketing PlanIntegrated Marketing Communication Plan, Digital Agency Near Me, Integrated Marketing Services, B2b Content Marketing Best Practices, Integrated Marketing In Holistic Marketing, Content Marketing Campaign Examples, Best Content Marketing Agencies, User Generated Content Marketing, Integrated Agency, Integrated Marketing Agency, Integrated Internet Marketing Communication, Integrated Marketing Communications Company, Designing And Managing Integrated Marketing Communications, Integrated Marketing Solutions, Integrated Agency, Brand Strategy Agency, Integrated Marketing Agency, Brand Content Marketing, Content Marketing Firm, Creative Content Agency, Integrated Marketing Company, B2b Content Marketing Agency, Content Marketing Solution, B2c Content Marketing, Digital Content Marketing Agency, Content Strategy Agency, Personalized Content Marketing, Content Strategy Agency, Integrated Digital Marketing Agency, B2b Content Agency, B2b Content Marketing Plan, B2b Content Marketing Success Stories, Branded Content Agency, Brand Content Agency, Integrated Brand Promotion, Brand Strategy Expert, Brand Strategy Specialist, Brand Strategy Solutions, Content Marketing Strategies, B2b Content Marketing Services, Content Marketing Industry, Social Media Content Agency, Content Strategy Expert, Content Strategy Specialist, Integrated Content Strategy, Content Strategy Firm, B2b Content Strategy Agency, Content Strategy Solutions, Holistic Marketing Agency, Holistic Marketing Services, Holistic Marketing Strategy, Holistic Marketing Solutions, Holistic Marketing Campaign, Holistic Marketing Management, Holistic Digital Marketing Services, Holistic Marketing Companies, Holistic Digital Marketing Agency, Integrated Digital Marketing Services, Integrated Communications Agency, Integrated Creative Agency, Integrated Marketing Firm, Integrated Media Agency, Integrated Advertising Agency, Integrated Digital Agency, Integrated Marketing Communications Agency, Full Service Integrated Advertising Agency, Integrated Digital Marketing Solutions, Integrated Branding Agency, Top Integrated Marketing Agencies, Integrated Advertising Services, B2b Integrated Marketing Agency, Integrated Marketing Services Agency, Full Service Integrated Marketing Agency, Integrated B2b Marketing AgencyFully Integrated Agency, Integrated Marketing Solutions Agency, Fully Integrated Marketing Agency, Content Strategy Company, Content Strategy Service Provider, B2b Content Marketing Experts, B2c Content Agency, Brand Launch Content, Integrated Media Marketing Agency, Integrated Digital Marketing Firm"
        url="www.redbangle.com/work/integrated-marketing-agency-for-successful-campaigns"
      />

      <WorkListHeroSection
        className="bg-rb-scarlet"
        type="LEAP"
        typeTwo="Work Showcase"
        pillImg="/img/think-work-pill.webp"
        content={
          <>
            Discover <h1 className="inline">strategic content solutions</h1> for
            your brand. Drive exponential growth with campaigns and content.
          </>
        }
        contentClassName="md:max-w-[850px]"
      />

      <div style={{ display: 'none' }}>
        <h2>Integrated Marketing Agency</h2>
        <h2>Integrated Marketing Solutions</h2>
        <h2>Internet Marketing Agency</h2>
        <h2>Successful Campaigns</h2>
        <h2>Digital Marketing Solutions</h2>
        <h2>Brand Growth</h2>
        <h2>Full Service Advertising Agency</h2>
      </div>

      <section className="bg-white pt-15 md:pt-30 pb-7.5 md:pb-15">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">
            Explore Case Studies
          </LineHeading>
          <h3 className="font-everett text-title md:text-title-md mb-10 md:mb-14 md:max-w-[885px] md:tracking-[-2.08px]">
            How holistic marketing and strategic content fuelled brand growth
          </h3>
          <Button suffix={<LineArrow />} className="w-full md:w-auto">
            BOOK A DISCOVERY CALL
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-6 mt-16 md:mt-20">
            {_posts.map((p, i) => (
              <ContentPostCard
                className={i < 2 ? 'md:mb-[46px] md:col-span-3' : ''}
                type={i < 2 ? 'lg' : 'md'}
                key={p.key}
                {...p}
              />
            ))}
          </div>
        </div>
      </section>

      <TrustedBrandsSection className="bg-white py-7.5 md:py-15" />
      {/* <Testimonials className="pt-7.5 md:pt-15 pb-15 md:pb-30" /> */}

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(scsThinkWorkSchema)}
      </Script>
    </>
  )
}
