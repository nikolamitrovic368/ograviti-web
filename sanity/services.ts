import groq from 'groq'

import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'

import { imageProps, modulesQuery, seo } from './queries'

export const fetchServicesPageData = (locale: string = defaultLocale) =>
  fetchSanity<Sanity.ServicesPage>(
    groq`
    *[_type == "servicesPage" && language == $locale][0] {
      ...,
      service1 {
        title,
        subtitle,
        image ${imageProps}
      },
      service2 {
        title,
        subtitle,
        image ${imageProps}
      },
      service3 {
        title,
        subtitle,
        image ${imageProps}
      },
      service4 {
        title,
        subtitle,
        image ${imageProps}
      },
      service5 {
        title,
        subtitle,
        image ${imageProps},
      },
      ${modulesQuery},
      ${seo}
    }
    `,
    {
      tags: ['servicesPage'],
      params: { locale },
    },
  )
