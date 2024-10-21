import { groq } from 'next-sanity'

import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import { imageProps, modulesQuery, seo } from '@/sanity/queries'

import { ImageProps, Images } from '../queries/components/imageProps'
import { CaseStudyCards, Seo, Slug } from '../types'

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
  modules?: Sanity.Module[]
}
export const fetchCaseStudyData = (
  slug: string,
  locale: string = defaultLocale,
) =>
  fetchSanity<CaseStudyType>(
    groq`
    *[_type == "caseStudy" && slug.current == $slug && language == $locale][0] {
      ...,
      image ${imageProps},
			${modulesQuery},
      relatedCaseStudies[]-> {
        _id,
        title,
        description,
        slug,
        image ${imageProps}
      },
      ${seo}
    }
    `,
    {
      tags: ['caseStudy'],
      params: { slug, locale },
    },
  )
