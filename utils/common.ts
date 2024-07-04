import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

import { Seo } from '@/sanity/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mapSeo(seo: Seo) {
  if (!seo) return {}
  const mappedSeo: Metadata = {
    robots: {
      follow: seo?.robotsNoFollow,
      index: seo?.robotsNoIndex,
    },
  }
  if (seo.title) mappedSeo.title = seo.title
  if (seo.description) mappedSeo.description = seo.description
  if (seo.keywords?.length) mappedSeo.keywords = seo.keywords
  if (seo.description) mappedSeo.description = seo.description
  return mappedSeo
}
