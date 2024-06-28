import { groq } from 'next-sanity'

import { BlogCards } from '@/sanity/types'

import { imageProps } from './components/imageProps'

export type BlogType = {
  _id: string
  title: string
  subtitle: string
  body: any
  relatedBlogs: BlogCards
}

export const blogQuery = groq`
*[_type == "blog" && slug.current == $slug][0] {
  ...,
  relatedBlogs[]-> {
    _id,
    title,
    subtitle,
    image,
    slug,
    image ${imageProps}
  }
}
`
