import { groq } from 'next-sanity'

import { ImageProps, imageProps } from './components/imageProps'

export type GlobalSeoType = {
  globalSeoTitle: string
  globalSeoDescription: string
  globalKeywords: string[]
  globalSeoImage: ImageProps
}

export const globalSeoQuery = groq`
*[_type == "globalSeo"][0] {
  ...,
  globalSeoImage ${imageProps},
}
`
