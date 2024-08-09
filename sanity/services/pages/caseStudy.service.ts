import { defaultLocale } from '@/config'
import { fetchSanity } from '@/sanity/fetch'
import {
  caseStudyPageQuery,
  CaseStudyPageType,
} from '@/sanity/queries/pages/caseStudy.query'

export const fetchCaseStudyPageData = (locale: string = defaultLocale) =>
  fetchSanity<CaseStudyPageType>(caseStudyPageQuery, {
    tags: ['caseStudyPage'],
    params: { locale },
  })
