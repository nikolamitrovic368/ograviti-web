import { groq } from 'next-sanity'

import { Seo, Slug } from '@/sanity/types'

import { careerCardQuery, CareerCards } from '../career.queries'
import { withImageProps } from '../components/imageProps'

export type CareersPageType = {
  _id: string
  title: string
  subtitle: string
  careers: CareerCards
  slug: Slug
  seo: Seo
}

export const careersPageQuery = groq`
*[_type == "careersPage"][0] {
  ...,
  careers[]-> ${careerCardQuery},
  seo ${withImageProps}
}
`
