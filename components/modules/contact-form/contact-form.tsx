'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/atoms/button'
import { Ograviti } from '@/components/atoms/icons'
import { Input } from '@/components/atoms/input'
import PhoneInput from '@/components/atoms/phone-input'
import { Textarea } from '@/components/atoms/textarea'
import { Typography } from '@/components/atoms/typography'
import { useRouter } from '@/i18n/routing'
import { api } from '@/trpc/react'

const phoneUtil = PhoneNumberUtil.getInstance()

export default function ContactForm({
  title,
  offices,
}: Partial<Sanity.ContactForm>) {
  const t = useTranslations('Modules.ContactForm')
  const schema = z.object({
    firstName: z
      .string()
      .min(1, t('validation.required', { label: t('label.firstname') })),
    lastName: z
      .string()
      .min(1, t('validation.required', { label: t('label.lastname') })),
    email: z.string().email(t('validation.email')),
    message: z
      .string()
      .min(1, t('validation.required', { label: t('label.message') })),
    phone: z.string().refine(
      (phone: string) => {
        try {
          return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
        } catch (error) {
          return false
        }
      },
      { message: t('validation.phone') },
    ),
  })
  const router = useRouter()
  const sendContact = api.onesignal.sendContact.useMutation({
    onSuccess: () => {
      reset()
      router.push('/contact-us-thank-you')
    },
  })
  type FormType = z.infer<typeof schema>
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  })
  const onSubmit = (data: FormType) => {
    sendContact.mutate(data)
  }

  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row">
      <div className="flex w-full flex-col items-start gap-8 md:py-12 lg:w-[35%] lg:border-r lg:border-secondary xl:w-[30%] xl:gap-14 xl:py-20">
        <div className="flex justify-center">
          <Ograviti className="hidden h-auto w-[121px] sm:w-[250px] lg:block 2xl:w-[363px]" />
        </div>
        <Typography
          variant="subtitle1"
          className="text-center text-2xl 2xl:text-3xl"
        >
          {title}
        </Typography>
        <div className="hidden grid-cols-2 gap-6 lg:grid xl:gap-7">
          {offices?.map(office => (
            <Fragment key={office._key}>
              <div>
                <div className="pb-2 text-xl md:text-lg">{office.name}</div>
                <div>{office.address}</div>
              </div>
              <div>
                <div className="pb-2 text-xl md:text-lg">{t('phone')}</div>
                <a
                  href={`tel:${office.phone}`}
                  className="duration-300 hover:text-primary"
                >
                  {office.phone}
                </a>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-1 flex-col items-center justify-center gap-8 md:py-12 xl:gap-14 xl:py-20"
      >
        <div className="grid w-full grid-cols-1 justify-center gap-6 md:grid-cols-2 2xl:gap-8">
          <Input
            label={t('label.firstname')}
            placeholder={t('placeholder.firstname')}
            className="w-full"
            {...register('firstName')}
            errorMessage={errors.firstName?.message}
          />
          <Input
            label={t('label.lastname')}
            placeholder={t('placeholder.lastname')}
            className="w-full"
            {...register('lastName')}
            errorMessage={errors.lastName?.message}
          />

          <Input
            label={t('label.email')}
            placeholder={t('placeholder.email')}
            className="w-full"
            {...register('email')}
            errorMessage={errors.email?.message}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                label={t('label.phone')}
                {...field}
                errorMessage={errors.phone?.message}
              />
            )}
          />
          <div className="md:col-span-2">
            <Textarea
              fullWidth
              placeholder={t('placeholder.message')}
              label={t('label.message')}
              {...register('message')}
              errorMessage={errors.message?.message}
            />
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Button className="max-md:w-full" type="submit">
            {t('send')}
          </Button>
        </div>
      </form>
    </div>
  )
}
