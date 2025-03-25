import type { MetadataRoute } from 'next'

import { BASE_DOMAIN } from '@/constants/common'
import { sanityFetch } from '@/sanity/client'
import { sitemapDeQuery, sitemapEnQuery } from '@/sanity/queries'
import { dateToLastmodFormat } from '@/utils/common'

export default async function commonSitemap(): Promise<MetadataRoute.Sitemap> {
  const [sitemapEn, sitemapDe] = await Promise.all([
    sanityFetch({
      query: sitemapEnQuery,
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
    }),
    sanityFetch({
      query: sitemapDeQuery,
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
    }),
  ])

  const sitemap: MetadataRoute.Sitemap = []

  // En route
  sitemap.push(
    ...sitemapEn.pages.map(page =>
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
  )
  sitemap.push(
    ...sitemapEn.blog.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/en/blog/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
  )
  sitemap.push(
    ...sitemapEn.caseStudy.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/en/case-study/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
  )
  sitemap.push(
    ...sitemapEn.career.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/en/careers/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
  )
  sitemap.push(
    ...sitemapEn.career.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/en/careers/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
  )

  if (sitemapEn.blogPage)
    sitemap.push({
      url: `${BASE_DOMAIN}/en/blog`,
      lastModified: dateToLastmodFormat(sitemapEn.blogPage._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  if (sitemapEn.caseStudyPage)
    sitemap.push({
      url: `${BASE_DOMAIN}/en/case-study`,
      lastModified: dateToLastmodFormat(sitemapEn.caseStudyPage._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  if (sitemapEn.careersPage)
    sitemap.push({
      url: `${BASE_DOMAIN}/en/careers`,
      lastModified: dateToLastmodFormat(sitemapEn.careersPage._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    })

  // DE route
  sitemap.push(
    ...sitemapDe.pages.map(page =>
      page.slug.current === 'index'
        ? ({
            url: `${BASE_DOMAIN}/de`,
            lastModified: page._updatedAt,
            changeFrequency: 'weekly',
            priority: 1,
          } as MetadataRoute.Sitemap[number])
        : ({
            url: `${BASE_DOMAIN}/de/${page.slug.current}`,
            lastModified: dateToLastmodFormat(page._updatedAt),
            changeFrequency: 'weekly',
            priority: 0.8,
          } as MetadataRoute.Sitemap[number]),
    ),
  )
  sitemap.push(
    ...sitemapDe.blog.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/de/blog/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
  )
  sitemap.push(
    ...sitemapDe.caseStudy.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/de/case-study/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
  )
  sitemap.push(
    ...sitemapDe.career.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/de/careers/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
  )
  sitemap.push(
    ...sitemapDe.career.map(
      page =>
        ({
          url: `${BASE_DOMAIN}/de/careers/${page.slug.current}`,
          lastModified: dateToLastmodFormat(page._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[number],
    ),
  )

  if (sitemapDe.blogPage)
    sitemap.push({
      url: `${BASE_DOMAIN}/de/blog`,
      lastModified: dateToLastmodFormat(sitemapDe.blogPage._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  if (sitemapDe.caseStudyPage)
    sitemap.push({
      url: `${BASE_DOMAIN}/de/case-study`,
      lastModified: dateToLastmodFormat(sitemapDe.caseStudyPage._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  if (sitemapDe.careersPage)
    sitemap.push({
      url: `${BASE_DOMAIN}/de/careers`,
      lastModified: dateToLastmodFormat(sitemapDe.careersPage._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    })

  return sitemap
}
