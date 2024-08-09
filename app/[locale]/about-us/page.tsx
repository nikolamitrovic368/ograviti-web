import { Metadata } from 'next'

import AboutUs from '@/components/templates/about-us'
import { fetchAboutUsPageData } from '@/sanity/services/pages/aboutUs.service'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await fetchAboutUsPageData()
  return mapSeo(seo)
}

export default async function Page() {
  const data = await fetchAboutUsPageData()
  return <AboutUs data={data} />
}
