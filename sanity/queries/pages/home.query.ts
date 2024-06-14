import { groq } from 'next-sanity'

import { Image, Slug } from '@/sanity/types'

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

export type TestimonialCard = {
  image: Image
  name: string
  rate: number
  description: string
  role: string
  _id: string
}

export type TestimonialCards = TestimonialCard[]

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

export type Testimonial = {
  title: string
  subtitle: string
  testimonialCards: TestimonialCards
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
  testimonial{
    ...,
    testimonialCards[]->
  },
  caseStudies{
    ...,
    relatedCaseStudies[]->{
      _id, title, description, slug, image
    }
  }
}`
