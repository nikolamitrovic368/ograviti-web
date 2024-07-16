import { groq } from 'next-sanity'

import { ImageProps, imageProps } from './components/imageProps'

export type SocialMedia = {
  link: string
  image: ImageProps
}

export type SocialMedias = SocialMedia[]

export type FooterType = {
  _id: string
  socialMedia: SocialMedias
}

export const footerQuery = groq`
*[_type == 'footer'][0] {
  ...,
  socialMedia[] {
    link,
    image ${imageProps}
  },
}`
