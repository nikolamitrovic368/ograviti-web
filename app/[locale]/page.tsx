import { Metadata } from 'next'

import Modules from '@/components/modules'
import { fetchHomePageData } from '@/sanity/services/pages/home.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params: { locale },
}: LocaleProps): Promise<Metadata> {
  const { seo } = await fetchHomePageData(locale)
  return mapSeo(seo)
}

export default async function Page({ params: { locale } }: LocaleProps) {
  const page = await fetchHomePageData(locale)
  return <Modules modules={page?.modules} />
}
