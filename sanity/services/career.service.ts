import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'

import { careerQuery, CareerType } from '../queries/career.queries'

export const fetchCareerData = (slug: string, locale: string = defaultLocale) =>
  fetchSanity<CareerType>(careerQuery, {
    tags: ['career'],
    params: { slug, locale },
  })
