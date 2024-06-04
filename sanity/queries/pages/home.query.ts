import { groq } from 'next-sanity'

import { Image } from '@/sanity/types'

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

export type CaseStudy = {
  title: string
  subtitle: string
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
  caseStudy: CaseStudy
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
  }
}`
