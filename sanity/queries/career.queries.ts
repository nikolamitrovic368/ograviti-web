import { groq } from 'next-sanity'

import { Seo, Slug } from '../types'
import { withImageProps } from './components/imageProps'

export type CareerCard = {
  _id: string
  title: string
  subtitle: string
  slug: Slug
}

export type CareerCards = CareerCard[]

export type CareerType = {
  _id: string
  title: string
  subtitle: string
  slug: Slug
  body: any
  seo: Seo
}

export const careerQuery = groq`
*[_type == "career" && slug.current == $slug && language == $locale][0] {
  ...,
  seo ${withImageProps}
}
`

export const careerCardQuery = groq`
{
  _id, title, subtitle, slug
}
`
