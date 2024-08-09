import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import { blogPageQuery, BlogPageType } from '@/sanity/queries/pages/blog.query'

export const fetchBlogPageData = (locale: string = defaultLocale) =>
  fetchSanity<BlogPageType>(blogPageQuery, {
    tags: ['blogPage'],
    params: { locale },
  })
