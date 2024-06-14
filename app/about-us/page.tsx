import AboutUs from '@/components/templates/about-us'
import { fetchAboutUsData } from '@/sanity/services/pages/aboutUs.service'

export default async function Page() {
  const data = await fetchAboutUsData()
  return <AboutUs data={data} />
}
