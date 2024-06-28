import { fetchSanity } from '@/sanity/fetch'

import { careerQuery, CareerType } from '../queries/career.queries'

export const fetchCareerData = (slug: string) =>
  fetchSanity<CareerType>(careerQuery, { tags: ['career'], params: { slug } })
