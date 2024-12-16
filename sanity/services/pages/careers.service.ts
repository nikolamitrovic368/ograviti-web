import { groq } from 'next-sanity'

import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import { withImageProps } from '@/sanity/queries'
import { careerCardQuery, CareerCards } from '@/sanity/queries/career.queries'
import { Seo, Slug } from '@/sanity/types'

export type CareersPageType = {
  _id: string
  title: string
  subtitle: string
  careers: CareerCards
  slug: Slug
  seo: Seo
}

export const fetchCareersPageData = (locale: string = defaultLocale) =>
  fetchSanity<CareersPageType>(
    groq`
    *[_type == "careersPage" && language == $locale][0] {
      ...,
      careers[]-> ${careerCardQuery},
      seo ${withImageProps}
    }
    `,
    {
      tags: ['careersPage'],
      params: { locale },
    },
  )
