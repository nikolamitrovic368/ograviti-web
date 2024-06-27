import { groq } from 'next-sanity'

export type ImageProps = {
  url: string
  metadata: {
    dimensions: { width: number; height: number }
  }
}

export const imageProps = groq`
{
  url,
  metadata { dimensions { width, height }} 
}
`

export const withImageProps = groq`
{
  ...,
  "image": image.asset-> ${imageProps}
}
`
