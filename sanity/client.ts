import { createClient } from 'next-sanity'

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'staging',
  apiVersion: '2024-05-01',
  useCdn: process.env.NODE_ENV !== 'development',
  stega: {
    enabled: false,
    studioUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3333'
        : process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
})
