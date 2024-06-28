import { fetchSanity } from '@/sanity/fetch'

import { blogQuery, BlogType } from '../queries/blog.queries'

export const fetchBlogData = (slug: string) =>
  fetchSanity<BlogType>(blogQuery, { tags: ['blog'], params: { slug } })
