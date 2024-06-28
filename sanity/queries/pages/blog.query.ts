import { groq } from 'next-sanity'

import { BlogCards } from '@/sanity/types'

import { imageProps } from '../components/imageProps'

export type BlogPageType = {
  _id: string
  title: string
  subtitle: string
  blogs: BlogCards
}

export const blogPageQuery = groq`
*[_type == "blogPage"][0] {
  ...,
  blogs[]-> {
    _id,
    title,
    subtitle,
    slug,
    image ${imageProps}
  }
}
`
