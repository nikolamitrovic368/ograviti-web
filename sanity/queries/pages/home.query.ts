import { groq } from 'next-sanity'

import { CaseStudyCards, Image, Seo } from '@/sanity/types'

import { imageProps, withImageProps } from '../components/imageProps'
import { Testimonial, testimonialField } from '../components/testimonialProps'

export type Brandings = {
  uiuxSubtitle: string
  digitalMarketingSubtitle: string
  brandingSubtitle: string
  dataAnalysisSubtitle: string
  developmentSubtitle: string
}

export type Journey = {
  title: string
  subtitle: string
  step1: Step
  step2: Step
  step3: Step
  step4: Step
}

export type CaseStudies = {
  title: string
  subtitle: string
  relatedCaseStudies: CaseStudyCards
}

export type Step = {
  name: string
  title: string
  subtitle: string
  media?: {
    image: Image
    position: 'bottom' | 'left' | 'top'
  }
}

export type HomePageType = {
  _id: string
  caseStudies: CaseStudies
  brandings: Brandings
  testimonial: Testimonial
  journey: Journey
  seo: Seo
}

export const homePageQuery = groq`
*[_type == "homePage" && language == $locale][0] {
  ..., 
  "testimonial" : ${testimonialField},
  caseStudies {
    ...,
    relatedCaseStudies[]-> {
      _id,
      title,
      description,
      slug,
      image ${imageProps}
    }
  },
  seo ${withImageProps}
}
`
