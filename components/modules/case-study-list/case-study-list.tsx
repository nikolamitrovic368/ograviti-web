import CardSwiper from '@/components/atoms/card-swiper'
import CaseStudyCard from '@/components/molecules/case-study-card'
import SectionTitle from '@/components/molecules/section-title'

export default function CaseStudyList({
  title,
  subtitle,
  caseStudies,
}: Partial<{
  title: string
  subtitle: string
  caseStudies: Sanity.CaseStudyCard[]
}>) {
  return (
    <div className="pt-14">
      <SectionTitle title={title} subtitle={subtitle} />
      {caseStudies && (
        <>
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
