import { fetchSanity } from '@/sanity/fetch'

import { globalSeoQuery, GlobalSeoType } from '../queries/globalSeo.queries'

export const fetchGlobalSeoData = () =>
  fetchSanity<GlobalSeoType>(globalSeoQuery, { tags: ['GlobalSeo'] })
