export const dev =
  process.env.NODE_ENV === 'development' ||
  process.env.ENABLE_PREVIEW === 'true'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-01'
