import { groq } from 'next-sanity'

import { Slug } from '@/sanity/types'

import { careerCardQuery, CareerCards } from '../career.queries'

export type CareersPageType = {
  _id: string
  title: string
  subtitle: string
  careers: CareerCards
  slug: Slug
}

export const careersPageQuery = groq`
*[_type == "careersPage"][0] {
  ...,
  careers[]-> ${careerCardQuery}
}
`
