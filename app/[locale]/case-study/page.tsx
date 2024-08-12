import { Metadata } from 'next'


import CaseStudyCard from '@/components/molecules/case-study-card'
import Companies from '@/components/molecules/companies'
import Title from '@/components/molecules/title'
import { fetchCaseStudyPageData } from '@/sanity/services/pages/caseStudy.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params: { locale },
}: LocaleProps): Promise<Metadata> {
  
  const { seo } = await fetchCaseStudyPageData(locale)
  return mapSeo(seo)
}

export default async function Page({ params: { locale } }: LocaleProps) {
  
  const data = await fetchCaseStudyPageData(locale)
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title title={data.title} subtitle={data.subtitle} />
      <Companies />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-8">
        {data.caseStudies.map(caseStudy => (
          <CaseStudyCard data={caseStudy} key={caseStudy._id} />
        ))}
      </div>
    </main>
  )
}
