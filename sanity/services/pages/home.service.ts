import { fetchSanity } from '@/sanity/fetch'
import { homePageQuery, HomePageType } from '@/sanity/queries/pages/home.query'

export const fetchHomePageData = () =>
  fetchSanity<HomePageType>(homePageQuery, { tags: ['homePage'] })
