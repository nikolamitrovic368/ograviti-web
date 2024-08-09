import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'

import { globalSeoQuery, GlobalSeoType } from '../queries/globalSeo.queries'

export const fetchGlobalSeoData = (locale: string = defaultLocale) =>
  fetchSanity<GlobalSeoType>(globalSeoQuery, {
    tags: ['GlobalSeo'],
    params: { locale },
  })
