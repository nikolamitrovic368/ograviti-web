import { fetchSanity } from '@/sanity/fetch'
import {
  careersPageQuery,
  CareersPageType,
} from '@/sanity/queries/pages/careers.query'

export const fetchCareersPageData = () =>
  fetchSanity<CareersPageType>(careersPageQuery, {
    tags: ['careersPage'],
  })
