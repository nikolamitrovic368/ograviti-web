import CardSwiper from '@/components/atoms/card-swiper'
import CaseStudyCard from '@/components/molecules/case-study-card'
import Companies from '@/components/molecules/companies'
import SectionTitle from '@/components/molecules/section-title'
import { CaseStudies } from '@/sanity/queries/pages/home.query'

export default function Section3({
  data: { title, subtitle, relatedCaseStudies },
}: {
  data: CaseStudies
}) {
  return (
    <div className="pt-14">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="py-5 md:hidden">
        <CardSwiper
          cards={relatedCaseStudies.map(caseStudy => (
            <CaseStudyCard key={caseStudy._id} data={caseStudy} />
          ))}
        />
      </div>
      <div className="w-full">
        <div className="hidden grid-cols-2 py-10 md:grid md:gap-4 lg:grid-cols-4 2xl:gap-8">
          {relatedCaseStudies.map(caseStudy => (
            <CaseStudyCard key={caseStudy._id} data={caseStudy} />
          ))}
        </div>
      </div>

      <Companies />
    </div>
  )
}
