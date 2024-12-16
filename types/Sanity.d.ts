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

    type ServicesPage = PageBase & {
      subtitle: string
      service1: {
        title: string
        subtitle: string
        image: ImageProps
      }
      service2: {
        title: string
        subtitle: string
        image: ImageProps
      }
      service3: {
        title: string
        subtitle: string
        image: ImageProps
      }
      service4: {
        title: string
        subtitle: string
        image: ImageProps
      }
      service5: {
        title: string
        subtitle: string
        image: ImageProps
      }
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

    type ImageWithList = {
      title: string
      image: ImageProps
      items: {
        title: string
        subtitle: string
        _key: string
      }[]
    }

    type CaseStudyList = {
      title: string
      subtitle: string
      listTitle?: string
      caseStudies: Sanity.CaseStudyCard[]
    }

    type TeamMember = SanityDocument<{
      instagram?: string
      linkedin?: string
      youtube?: string
      facebook?: string
      image: ImageProps
      role: string
      name: string
    }>

    type Team = {
      title: string
      subtitle: string
      members: TeamMember[]
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

    type HeadingTitle = {
      title: string
      subtitle: string
    }

    type ContactUsCta = {
      title: string
      ctaText: string
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

    type ContactForm = SanityDocument<{
      title: string
      offices?: {
        _key: string
        name: string
        address: string
        phone: string
      }[]
    }>
  }
}
