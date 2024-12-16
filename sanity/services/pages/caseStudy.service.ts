import groq from 'groq'

import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import { imageProps, withImageProps } from '@/sanity/queries'
import { CaseStudyPageType } from '@/sanity/queries/pages/caseStudy.query'

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
