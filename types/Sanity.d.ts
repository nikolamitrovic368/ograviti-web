import type { SanityImageObject } from '@sanity/image-url/lib/types/types'
import type { SanityDocument } from 'next-sanity'

declare global {
  namespace Sanity {
    // documents

    // pages

    type PageBase = SanityDocument<{
      title?: string
      seo: Seo
    }>

    type Page = PageBase & {
      readonly _type: 'page'
      modules?: Module[]
    }

    // miscellaneous

    type CaseStudyCard = {
      _id: string
      title: string
      description: string
      image: ImageProps
      slug: Slug
    }

    // objects

    type ImageProps = {
      src: string
      width: number
      height: number
    }

    type VideoType = 'youtube' | 'link' | 'file'

    type Seo = {
      description: string
      keywords: string[]
      metaImage: ImageProps
      robotsNoFollow: boolean
      robotsNoIndex: boolean
      title: string
    }

    type Brandings = {
      uiuxSubtitle: string
      digitalMarketingSubtitle: string
      brandingSubtitle: string
      dataAnalysisSubtitle: string
      developmentSubtitle: string
    }

    type JourneyStep = {
      name: string
      title: string
      subtitle: string
      media?: {
        image: Image
        position: 'bottom' | 'left' | 'top'
      }
    }

    type JourneyStep = {
      name: string
      title: string
      subtitle: string
      media?: {
        image: Image
        position: 'bottom' | 'left' | 'top'
      }
    }

    type TestimonialCard = {
      image: Image
      name: string
      rate: number
      description: string
      role: string
      _id: string
    }

    type Image = SanityImageObject &
      Partial<{
        alt: string
        loading: 'lazy' | 'eager'
      }>

    type Module<T = string> = {
      _type: T
      _key: string
      uid?: string
    }
  }
}
