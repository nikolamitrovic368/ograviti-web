import { createClient } from 'next-sanity'

import { dev } from '@/env'

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'staging',
  apiVersion: '2024-05-01',
  useCdn: !dev,
  stega: {
    enabled: false,
    studioUrl: dev
      ? 'http://localhost:3333'
      : process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
})
