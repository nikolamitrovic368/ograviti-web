import type { MetadataRoute } from 'next'

import { BASE_DOMAIN } from '@/constants/common'
import { sanityFetch } from '@/sanity/client'
import { sitemapQuery } from '@/sanity/queries'
import { dateToLastmodFormat } from '@/utils/common'

export default async function commonSitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap = await sanityFetch({
    query: sitemapQuery,
    tags: [
      'blogPage',
      'caseStudyPage',
      'careersPage',
      'servicesPage',
      'blogPage',
      'page',
      'blog',
      'caseStudy',
      'career',
    ],
  })

  return [
    ...sitemap.pages.map(page =>
      page.slug.current === 'index'
        ? ({
            url: BASE_DOMAIN,
            lastModified: page._updatedAt,
            changeFrequency: 'weekly',
            priority: 1,
          } as MetadataRoute.Sitemap[number])
        : ({
            url: `${BASE_DOMAIN}/en/${page.slug.current}`,
            lastModified: dateToLastmodFormat(page._updatedAt),
            changeFrequency: 'weekly',
            priority: 0.8,
          } as MetadataRoute.Sitemap[number]),
    ),
    ...sitemap.blog.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/en/blog/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
    ...sitemap.caseStudy.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/en/case-study/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
    ...sitemap.career.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/en/careers/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
  ]
}
