import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'

import { caseStudyQuery, CaseStudyType } from '../queries/caseStudy.queries'

export const fetchCaseStudyData = (
  slug: string,
  locale: string = defaultLocale,
) =>
  fetchSanity<CaseStudyType>(caseStudyQuery, {
    tags: ['caseStudy'],
    params: { slug, locale },
  })
