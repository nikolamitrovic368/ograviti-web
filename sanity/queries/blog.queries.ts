import { groq } from 'next-sanity'

import { BlogCards, Seo } from '@/sanity/types'

import { richTextQuery } from '../queries'
import { ImageProps, imageProps, withImageProps } from './components/imageProps'

export type BlogType = {
  _id: string
  title: string
  subtitle: string
  displayHeroImage: boolean
  body: any
  relatedBlogs: BlogCards
  image: ImageProps
  seo: Seo
}

export const blogQuery = groq`
*[_type == "blog" && slug.current == $slug && language == $locale][0] {
  ...,
  image ${imageProps},
  relatedBlogs[]-> {
    _id,
    title,
    subtitle,
    image,
    slug,
    image ${imageProps}
  },
  seo ${withImageProps},
  ${richTextQuery()}
}
`
