import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { client } from '@/config/onesignal'
import { CONTACT_FORM_TEMPLATE_ID } from '@/constants/onesignal.constant'
import { env } from '@/env'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const onesignalRouter = createTRPCRouter({
  sendContact: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        message: z.string(),
        phone: z.string(),
      }),
    )
    .mutation(
      async ({ input: { firstName, lastName, email, phone, message } }) => {
        try {
          const response = await client.createNotification({
            app_id: env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
            include_email_tokens: [env.ADMIN_EMAIL],
            email_from_address: 'info@ograviti.com',
            email_from_name: 'Ograviti',
            template_id: CONTACT_FORM_TEMPLATE_ID,
            email_subject: `Ograviti Contact Form - ${firstName} ${lastName}`,
            include_unsubscribed: true,
            custom_data: {
              email,
              fullname: `${firstName} ${lastName}`,
              phone,
              message,
            },
          })
          return response
        } catch (error) {
          throw new TRPCError({
            code: 'NOT_FOUND',
          })
        }
      },
    ),
})
