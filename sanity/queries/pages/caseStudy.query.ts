import { groq } from 'next-sanity'

import { CaseStudyCards, Seo, Slug } from '@/sanity/types'

import { imageProps, withImageProps } from '../components/imageProps'

export type CaseStudyPageType = {
  _id: string
  title: string
  subtitle: string
  caseStudies: CaseStudyCards
  slug: Slug
  seo: Seo
}
