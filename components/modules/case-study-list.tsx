import CardSwiper from '@/components/atoms/card-swiper'
import { Typography } from '@/components/atoms/typography'
import CaseStudyCard from '@/components/molecules/case-study-card'
import SectionTitle from '@/components/molecules/section-title'
import type { CaseStudyList, PageQueryResult } from '@/sanity.types'

export default function CaseStudyList({
  title,
  subtitle,
  listTitle,
  caseStudies,
}: Extract<
  NonNullable<NonNullable<PageQueryResult>['modules']>[number],
  { _type: 'case-study-list' }
>) {
  return (
    <div className="pt-14">
      <SectionTitle title={title} subtitle={subtitle} />
      {caseStudies?.length && (
        <>
          {listTitle && (
            <Typography variant="subtitle1" className="hidden md:block">
              {listTitle}
            </Typography>
          )}
          <div className="py-5 md:hidden">
            <CardSwiper
              cards={caseStudies.map(caseStudy => (
                <CaseStudyCard key={caseStudy._id} data={caseStudy} />
              ))}
            />
          </div>
          <div className="w-full">
            <div className="hidden grid-cols-2 py-10 md:grid md:gap-4 lg:grid-cols-4 2xl:gap-8">
              {caseStudies.map(caseStudy => (
                <CaseStudyCard key={caseStudy._id} data={caseStudy} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
