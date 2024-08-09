import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import {
  aboutUsPageQuery,
  AboutUsPageType,
} from '@/sanity/queries/pages/aboutUs.query'

export const fetchAboutUsPageData = (locale: string = defaultLocale) =>
  fetchSanity<AboutUsPageType>(aboutUsPageQuery, {
    tags: ['aboutUsPage'],
    params: { locale },
  })
