import { groq } from 'next-sanity'

import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import { modulesQuery, seo } from '@/sanity/queries'

export const fetchPageData = (slug: string[], locale: string = defaultLocale) =>
  fetchSanity<Sanity.Page>(
    groq`
    *[_type == "page" && slug.current == $slug && language == $locale][0] {
      ...,
			${modulesQuery},
      ${seo}
    }`,
    {
      tags: ['pages'],
      params: { locale, slug: slug?.join('/') },
    },
  )
