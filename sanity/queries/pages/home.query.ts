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

type Step = {
  subtitle: string
  title: string
  image?: {
    image: Image
    position: 'bottom' | 'left' | 'top'
  }
}

export type HomeType = {
  _id: string
  caseStudy: {
    title: string
    subtitle: string
  }
  brandings: Brandings
  testimonial: {
    title: string
    subtitle: string
  }
  journey: Journey
}

export const homeQuery = groq`*[_type == "home"][0]`
