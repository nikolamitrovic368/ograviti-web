import { Metadata } from 'next'


import AboutUs from '@/components/templates/about-us'
import { fetchAboutUsPageData } from '@/sanity/services/pages/aboutUs.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params: { locale },
}: LocaleProps): Promise<Metadata> {
  
  const { seo } = await fetchAboutUsPageData(locale)
  return mapSeo(seo)
}

export default async function Page({ params: { locale } }: LocaleProps) {
  
  const data = await fetchAboutUsPageData(locale)
  return <AboutUs data={data} />
}
