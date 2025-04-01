import { Metadata } from 'next'

import Title from '@/components/modules/heading-title'
import CaseStudyCard from '@/components/molecules/case-study-card'
import Companies from '@/components/molecules/companies'
import { sanityFetch } from '@/sanity/live'
import { caseStudyPageQuery } from '@/sanity/queries'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(props: LocaleProps): Promise<Metadata> {
  const params = await props.params
  const { locale } = params
  const { data } = await sanityFetch({
    query: caseStudyPageQuery,
    tags: ['caseStudyPage'],
    stega: false,
    params: { locale },
  })
  return mapSeo(data?.seo)
}

export default async function Page({ params }: LocaleProps) {
  const { locale } = await params
  const { data } = await sanityFetch({
    query: caseStudyPageQuery,
    tags: ['caseStudyPage'],
    params: { locale },
  })
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title title={data?.title} subtitle={data?.subtitle} />
      <Companies />
      {data?.caseStudies?.length && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-8">
          {data?.caseStudies.map(caseStudy => (
            <CaseStudyCard data={caseStudy} key={caseStudy._id} />
          ))}
        </div>
      )}
    </main>
  )
}
