import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'

import { blogQuery, BlogType } from '../queries/blog.queries'

export const fetchBlogData = (slug: string, locale: string = defaultLocale) =>
  fetchSanity<BlogType>(blogQuery, { tags: ['blog'], params: { slug, locale } })
