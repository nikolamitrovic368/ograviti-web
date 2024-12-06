import { vercel } from '@t3-oss/env-core/presets'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    SANITY_ENABLE_PREVIEW: z.string().min(1),
    SANITY_VIEWER_TOKEN: z.string().min(1),
    ONESIGNAL_REST_API_KEY: z.string().min(1),
    ADMIN_EMAIL: z.string().email(),
  },
  client: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1),
    NEXT_PUBLIC_SANITY_STUDIO_URL: z.string().min(1),
    NEXT_PUBLIC_REVALIDATE: z.string().min(1),
    NEXT_PUBLIC_ONESIGNAL_APP_ID: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_SANITY_STUDIO_URL: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    NEXT_PUBLIC_REVALIDATE: process.env.NEXT_PUBLIC_REVALIDATE,
    NEXT_PUBLIC_ONESIGNAL_APP_ID: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
  },
  extends: [vercel()],
})
