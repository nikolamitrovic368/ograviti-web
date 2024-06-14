import { fetchSanity } from '@/sanity/fetch'
import { homeQuery, HomeType } from '@/sanity/queries/pages/home.query'

export const fetchHomeData = () =>
  fetchSanity<HomeType>(homeQuery, { tags: ['homePage'] })
