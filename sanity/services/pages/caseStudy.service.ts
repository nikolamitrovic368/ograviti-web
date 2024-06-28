import { fetchSanity } from '@/sanity/fetch'
import {
  caseStudyPageQuery,
  CaseStudyPageType,
} from '@/sanity/queries/pages/caseStudy.query'

export const fetchCaseStudyPageData = () =>
  fetchSanity<CaseStudyPageType>(caseStudyPageQuery, {
    tags: ['caseStudyPage'],
  })
