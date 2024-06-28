import { fetchSanity } from '@/sanity/fetch'
import {
  contactUsPageQuery,
  ContactUsPageType,
} from '@/sanity/queries/pages/contact-us.query'

export const fetchContactUsPageData = () =>
  fetchSanity<ContactUsPageType>(contactUsPageQuery, {
    tags: ['contactUsPage'],
  })
