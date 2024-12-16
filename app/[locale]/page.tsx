import { Metadata } from 'next'

import Modules from '@/components/modules'
import { fetchHomePageData } from '@/sanity/services/pages/home.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params,
}: LocaleProps): Promise<Metadata> {
  const { locale } = await params

  const { seo } = await fetchHomePageData(locale)
  return mapSeo(seo)
}

export default async function Page(props: LocaleProps) {
  const params = await props.params

  const { locale } = params

  const page = await fetchHomePageData(locale)
  return <Modules modules={page?.modules} />
}
