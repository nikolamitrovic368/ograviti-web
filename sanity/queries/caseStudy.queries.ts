import { groq } from 'next-sanity'

import { CaseStudyCards, Seo, Slug } from '@/sanity/types'

import {
  ImageProps,
  imageProps,
  Images,
  withImageProps,
} from './components/imageProps'

export type CaseStudyType = {
  _id: string
  title: string
  CompletedDate: string
  approachSubtitle: string
  approachTitle: string
  backgroundSubtitle: string
  backgroundTitle: string
  client: string
  description: string
  exceptionalResultsSubtitle: string
  exceptionalResultsTitle: string
  footerImages: Images
  footerimage: ImageProps
  headerImages: Images
  image: ImageProps
  mainService: string
  relatedCaseStudies: CaseStudyCards
  slug: Slug
  website: string
  seo: Seo
}

export const caseStudyQuery = groq`
*[_type == "caseStudy" && slug.current == $slug][0] {
  ...,
  footerImages[] ${imageProps},
  footerimage ${imageProps},
  headerImages[] ${imageProps},
  image ${imageProps},
  relatedCaseStudies[]-> {
    _id,
    title,
    description,
    slug,
    image ${imageProps}
  },
  seo ${withImageProps}
}
`
