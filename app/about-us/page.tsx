import AboutUs from '@/components/templates/about-us'
import { fetchAboutUsPageData } from '@/sanity/services/pages/aboutUs.service'

export default async function Page() {
  const data = await fetchAboutUsPageData()
  return <AboutUs data={data} />
}
