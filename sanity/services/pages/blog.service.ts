import { fetchSanity } from '@/sanity/fetch'
import { blogPageQuery, BlogPageType } from '@/sanity/queries/pages/blog.query'

export const fetchBlogPageData = () =>
  fetchSanity<BlogPageType>(blogPageQuery, { tags: ['blogPage'] })
