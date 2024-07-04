import { Metadata } from 'next'

import Section1 from '@/components/organisms/home/section1'
import Section2 from '@/components/organisms/home/section2'
import Section3 from '@/components/organisms/home/section3'
import TransformationStories from '@/components/organisms/transformation-stories'
import { fetchHomePageData } from '@/sanity/services/pages/home.service'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await fetchHomePageData()
  return mapSeo(seo)
}

export default async function Page() {
  const data = await fetchHomePageData()

  return (
    <main className="flex flex-col gap-12 md:-mt-14">
      <Section1 data={data.brandings} />
      <Section2 data={data.journey} />
      <Section3 data={data.caseStudies} />
      <TransformationStories data={data.testimonial} />
    </main>
  )
}
