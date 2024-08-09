import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import {
  contactUsPageQuery,
  ContactUsPageType,
} from '@/sanity/queries/pages/contact-us.query'

export const fetchContactUsPageData = (locale: string = defaultLocale) =>
  fetchSanity<ContactUsPageType>(contactUsPageQuery, {
    tags: ['contactUsPage'],
    params: { locale },
  })
