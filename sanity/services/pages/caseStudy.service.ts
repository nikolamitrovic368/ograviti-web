import groq from 'groq'

import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import { imageProps, withImageProps } from '@/sanity/queries'
import { CaseStudyCards, Seo, Slug } from '@/sanity/types'

type CaseStudyPageType = {
  _id: string
  title: string
  subtitle: string
  caseStudies: CaseStudyCards
  slug: Slug
  seo: Seo
}

export const fetchCaseStudyPageData = (locale: string = defaultLocale) =>
  fetchSanity<CaseStudyPageType>(
    groq`
    *[_type == "caseStudyPage" && language == $locale][0] {
      ...,
      caseStudies[]-> {
        _id,
        title,
        description,
        slug,
        image ${imageProps}
      },
      seo ${withImageProps}
    }
    `,
    {
      tags: ['caseStudyPage'],
      params: { locale },
    },
  )
