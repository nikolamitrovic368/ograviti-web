import { groq } from 'next-sanity'

import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import { BlogCards, Seo } from '@/sanity/types'

import { imageProps, richTextQuery, withImageProps } from '../queries'
import { ImageProps } from '../queries/components/imageProps'

export type BlogType = {
  _id: string
  title: string
  subtitle: string
  displayHeroImage: boolean
  body: any
  relatedBlogs: BlogCards
  image: ImageProps
  seo: Seo
}
export const fetchBlogData = (slug: string, locale: string = defaultLocale) =>
  fetchSanity<BlogType>(
    groq`
    *[_type == "blog" && slug.current == $slug && language == $locale][0] {
      ...,
      image ${imageProps},
      relatedBlogs[]-> {
        _id,
        title,
        subtitle,
        image,
        slug,
        image ${imageProps}
      },
      seo ${withImageProps},
      ${richTextQuery()}
    }
    `,
    { tags: ['blog'], params: { slug, locale } },
  )
