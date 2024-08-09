import { groq } from 'next-sanity'

import { Seo } from '@/sanity/types'

import { withImageProps } from '../components/imageProps'

export type ContactUsPageType = {
  _id: string
  title: string
  subtitle: string
  seo: Seo
}

export const contactUsPageQuery = groq`
*[_type == "contactUsPage" && language == $locale][0] {
  ...,
  seo ${withImageProps}
}
`
