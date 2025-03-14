import { Metadata } from 'next'

import Modules from '@/components/modules'
import { sanityFetch } from '@/sanity/client'
import { homeQuery } from '@/sanity/queries'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params,
}: LocaleProps): Promise<Metadata> {
  const { locale } = await params

  const data = await sanityFetch({
    query: homeQuery,
    tags: ['page'],
    params: { locale },
  })
  return mapSeo(data?.seo)
}

export default async function Page(props: LocaleProps) {
  const params = await props.params

  const { locale } = params

  const page = await sanityFetch({
    query: homeQuery,
    tags: ['page'],
    params: { locale },
  })
  return <Modules modules={page?.modules} />
}
