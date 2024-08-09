import { groq } from 'next-sanity'

import { BlogCards, Seo } from '@/sanity/types'

import { imageProps, withImageProps } from '../components/imageProps'

export type BlogPageType = {
  _id: string
  title: string
  subtitle: string
  blogs: BlogCards
  seo: Seo
}

export const blogPageQuery = groq`
*[_type == "blogPage" && language == $locale][0] {
  ...,
  blogs[]-> {
    _id,
    title,
    subtitle,
    slug,
    image ${imageProps}
  },
  seo ${withImageProps}
}
`
