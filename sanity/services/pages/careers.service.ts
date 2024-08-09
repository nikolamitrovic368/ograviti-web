import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import {
  careersPageQuery,
  CareersPageType,
} from '@/sanity/queries/pages/careers.query'

export const fetchCareersPageData = (locale: string = defaultLocale) =>
  fetchSanity<CareersPageType>(careersPageQuery, {
    tags: ['careersPage'],
    params: { locale },
  })
