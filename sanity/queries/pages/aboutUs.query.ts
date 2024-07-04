import { groq } from 'next-sanity'

import { CommonSection, Seo, TeamMembers } from '@/sanity/types'

import { withImageProps } from '../components/imageProps'
import { Testimonial, testimonialField } from '../components/testimonialProps'

export type OurTeam = {
  title: string
  subtitle: string
  teamMembers: TeamMembers
}

export type ContactUs = {
  title: string
  ctaText: string
}

export type AboutUsPageType = {
  _id: string
  title: string
  subtitle: string
  ourTeam: OurTeam
  ourStory: CommonSection
  contactUs: ContactUs
  ourMission: {
    title: string
    sections: {
      title: string
      subtitle: string
      _key: string
    }[]
  }
  testimonial: Testimonial
  seo: Seo
}

export const aboutUsPageQuery = groq`
*[_type == "aboutUsPage"][0] {
  ..., 
  ourTeam{
    ...,
    teamMembers[]->
  },
  "testimonial" : ${testimonialField},
  seo ${withImageProps}
}`
