import { groq } from 'next-sanity'

import { Image } from '@/sanity/types'

export type TestimonialCard = {
  image: Image
  name: string
  rate: number
  description: string
  role: string
  _id: string
}

export type TestimonialCards = TestimonialCard[]

export type Testimonial = {
  title: string
  subtitle: string
  testimonialCards: TestimonialCards
}
export const testimonialField = groq`
*[_type == "testimonial"][0] {
  ...,
  testimonialCards[]->
}`
