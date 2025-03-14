import { type ClassValue, clsx } from 'clsx'
import { format, parseISO } from 'date-fns'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mapSeo(seo: any) {
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

// accept data in ISO 8601 (UTC) format. Example: 2023-10-30T21:18:07Z
export const dateToLastmodFormat = (inputDate: string) => {
  const isISO = inputDate.includes('Z')
  if (!isISO) throw new Error('incorrect date format')
  const parsedDate = parseISO(inputDate)
  const formattedDate = format(parsedDate, "yyyy-MM-dd'T'HH:mm:ssxxx")
  return formattedDate
}
