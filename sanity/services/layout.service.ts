import { fetchSanity } from '@/sanity/fetch'

import { footerQuery, FooterType } from '../queries/layout.queries'

export const fetchFooterData = () =>
  fetchSanity<FooterType>(footerQuery, { tags: ['Footer'] })
