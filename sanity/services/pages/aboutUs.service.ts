import { fetchSanity } from '@/sanity/fetch'
import {
  aboutUsPageQuery,
  AboutUsPageType,
} from '@/sanity/queries/pages/aboutUs.query'

export const fetchAboutUsPageData = () =>
  fetchSanity<AboutUsPageType>(aboutUsPageQuery, { tags: ['aboutUsPage'] })
