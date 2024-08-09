import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import { homePageQuery, HomePageType } from '@/sanity/queries/pages/home.query'

export const fetchHomePageData = (locale: string = defaultLocale) =>
  fetchSanity<HomePageType>(homePageQuery, {
    tags: ['homePage'],
    params: { locale },
  })
