import { groq } from 'next-sanity'

export type ContactUsPageType = {
  _id: string
  title: string
  subtitle: string
}

export const contactUsPageQuery = groq`
*[_type == "contactUsPage"][0] {
  ...,
}
`
