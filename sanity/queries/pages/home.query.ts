import { groq } from 'next-sanity'

import { Image, Slug } from '@/sanity/types'

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
  relatedCaseStudies: CaseStudyCard[]
}

export type CaseStudyCard = {
  _id: string
  title: string
  description: string
  slug: Slug
  image: Image
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

export type HomeType = {
  _id: string
  caseStudies: CaseStudies
  brandings: Brandings
  testimonial: Testimonial
  journey: Journey
}

export const homeQuery = groq`
*[_type == "home"][0] {
  ..., 
  "testimonial" : ${testimonialField},
  caseStudies{
    ...,
    relatedCaseStudies[]->{
      _id, title, description, slug, image
    }
  }
}
`
