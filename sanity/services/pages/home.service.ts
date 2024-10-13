import { groq } from 'next-sanity'

import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import { modulesQuery, seo } from '@/sanity/queries'

export const fetchHomePageData = (locale: string = defaultLocale) =>
  fetchSanity<Sanity.Page>(
    groq`
    *[_type == "page" && slug.current == 'index' && language == $locale][0] {
      ...,
			${modulesQuery},
      ${seo}
    }`,
    {
      tags: ['homePage'],
      params: { locale },
    },
  )
