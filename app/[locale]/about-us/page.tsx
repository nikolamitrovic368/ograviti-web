import { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'

import AboutUs from '@/components/templates/about-us'
import { fetchAboutUsPageData } from '@/sanity/services/pages/aboutUs.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await fetchAboutUsPageData()
  return mapSeo(seo)
}

export default async function Page({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale)
  const data = await fetchAboutUsPageData()
  return <AboutUs data={data} />
}
