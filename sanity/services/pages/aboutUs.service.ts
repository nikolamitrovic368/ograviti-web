import { fetchSanity } from '@/sanity/fetch'
import { aboutUsQuery, AboutUsType } from '@/sanity/queries/pages/aboutUs.query'

export const fetchAboutUsData = () =>
  fetchSanity<AboutUsType>(aboutUsQuery, { tags: ['aboutUsPage'] })
