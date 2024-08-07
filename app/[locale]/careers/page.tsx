import { Metadata } from 'next'

import CareerCard from '@/components/molecules/career-card'
import Title from '@/components/molecules/title'
import { fetchCareersPageData } from '@/sanity/services/pages/careers.service'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await fetchCareersPageData()
  return mapSeo(seo)
}

export default async function Page() {
  const data = await fetchCareersPageData()
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title title={data.title} subtitle={data.subtitle} />
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 2xl:gap-x-8 2xl:gap-y-20">
          {data.careers.map(career => (
            <CareerCard key={career._id} data={career} />
          ))}
        </div>
      </div>
    </main>
  )
}
