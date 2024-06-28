import { fetchSanity } from '@/sanity/fetch'

import { caseStudyQuery, CaseStudyType } from '../queries/caseStudy.queries'

export const fetchCaseStudyData = (slug: string) =>
  fetchSanity<CaseStudyType>(caseStudyQuery, {
    tags: ['caseStudy'],
    params: { slug },
  })
