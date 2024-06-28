import { BlogCard } from '@/components/molecules/blog-card'

import { ImageProps } from '../queries/components/imageProps'

export type Image = {
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
}

export type Slug = {
  current: string
  _type: 'slug'
}

export type CommonSection = {
  title: string
  subtitle: string
  _key?: string
}

export type TeamMember = {
  instagram: string
  linkedin: string
  _updatedAt: string
  youtube: string
  image: Image
  _createdAt: string
  _type: teamMember
  _id: string
  role: string
  facebook: string
  _rev: string
  name: string
}

export type TeamMembers = TeamMember[]

export type BlogCard = {
  _id: string
  title: string
  subtitle: string
  image: ImageProps
  slug: Slug
}

export type BlogCards = BlogCard[]

export type CaseStudyCard = {
  _id: string
  title: string
  description: string
  image: ImageProps
  slug: Slug
}

export type CaseStudyCards = CaseStudyCard[]

export type TeamMembers = TeamMember[]
