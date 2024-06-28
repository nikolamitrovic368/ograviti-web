import { groq } from 'next-sanity'

import { CaseStudyCards, Slug } from '@/sanity/types'

import { imageProps } from '../components/imageProps'

export type CaseStudyPageType = {
  _id: string
  title: string
  subtitle: string
  caseStudies: CaseStudyCards
  slug: Slug
}

export const caseStudyPageQuery = groq`
*[_type == "caseStudyPage"][0] {
  ...,
  caseStudies[]-> {
    _id,
    title,
    description,
    slug,
    image ${imageProps}
  }
}
`
