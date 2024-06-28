import { groq } from 'next-sanity'

import { Slug } from '../types'

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
}

export const careerQuery = groq`
*[_type == "career" && slug.current == $slug][0] {
  ...
}
`

export const careerCardQuery = groq`
{
  _id, title, subtitle, slug
}
`
