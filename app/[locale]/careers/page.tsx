import { Metadata } from 'next'

import Title from '@/components/modules/heading-title'
import CareerCard from '@/components/molecules/career-card'
import { sanityFetch } from '@/sanity/live'
import { careersPageQuery } from '@/sanity/queries'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(props: LocaleProps): Promise<Metadata> {
  const params = await props.params

  const { locale } = params

  const { data } = await sanityFetch({
    query: careersPageQuery,
    tags: ['careersPage'],
    stega: false,
    params: { locale },
  })
  return mapSeo(data?.seo)
}

export default async function Page(props: LocaleProps) {
  const params = await props.params

  const { locale } = params

  const { data } = await sanityFetch({
    query: careersPageQuery,
    tags: ['careersPage'],
    params: { locale },
  })
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title title={data?.title} subtitle={data?.subtitle} />
      {data?.careers?.length && (
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 2xl:gap-x-8 2xl:gap-y-20">
            {data?.careers.map(career => (
              <CareerCard key={career._id} data={career} />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
