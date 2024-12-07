'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/atoms/button'
import { Ograviti } from '@/components/atoms/icons'
import { Input } from '@/components/atoms/input'
import PhoneInput from '@/components/atoms/phone-input'
import { Textarea } from '@/components/atoms/textarea'
import { Typography } from '@/components/atoms/typography'
import { api } from '@/trpc/react'

const phoneUtil = PhoneNumberUtil.getInstance()

const schema = z.object({
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  email: z.string().email('Please enter valid email address'),
  message: z.string().min(1, 'Please enter your Message'),
  phone: z.string().refine(
    (phone: string) => {
      try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
      } catch (error) {
        return false
      }
    },
    { message: 'Please insert valid phone number' },
  ),
})

export default function ContactForm() {
  const sendContact = api.onesignal.sendContact.useMutation({
    onSuccess: () => {
      reset()
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
    console.log(data)

    sendContact.mutate(data)
  }

  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row">
      <div className="flex w-full flex-col gap-8 md:py-12 lg:w-[35%] lg:border-r lg:border-secondary xl:w-[30%] xl:gap-14 xl:py-20">
        <div className="flex justify-center">
          <Ograviti className="hidden h-auto w-[121px] sm:w-[250px] lg:block 2xl:w-[363px]" />
        </div>
        <Typography
          variant="subtitle1"
          className="text-center text-2xl 2xl:text-3xl"
        >
          Get in Touch with Ograviti
        </Typography>
        <div className="hidden grid-cols-2 gap-6 lg:grid xl:gap-7">
          <div>
            <div className="pb-2 text-xl md:text-lg">Switzerland Office</div>
            <div>Bahnhofstrasse 100, Zurich</div>
          </div>
          <div>
            <div className="pb-2 text-xl md:text-lg">Phone</div>
            <a
              href="tel:+41-1122-111-111"
              className="duration-300 hover:text-primary"
            >
              +41 1122 111 111
            </a>
          </div>
          <div>
            <div className="pb-2 text-xl md:text-lg">Dubai office</div>
            <div>Jumeirah Business Center</div>
          </div>
          <div>
            <div className="pb-2 text-xl md:text-lg">Phone</div>
            <a
              href="tel:+971-1112-111-111"
              className="duration-300 hover:text-primary"
            >
              +971 1112 111 111
            </a>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-1 flex-col items-center justify-center gap-8 md:py-12 xl:gap-14 xl:py-20"
      >
        <div className="grid w-full grid-cols-1 justify-center gap-6 md:grid-cols-2 2xl:gap-8">
          <Input
            label="First Name"
            placeholder="Enter First Name"
            className="w-full"
            {...register('firstName')}
            errorMessage={errors.firstName?.message}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            className="w-full"
            {...register('lastName')}
            errorMessage={errors.lastName?.message}
          />

          <Input
            label="Email Address"
            placeholder="Enter Email Address"
            className="w-full"
            {...register('email')}
            errorMessage={errors.email?.message}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                label="Phone Number"
                {...field}
                errorMessage={errors.phone?.message}
              />
            )}
          />
          <div className="md:col-span-2">
            <Textarea
              fullWidth
              placeholder="Enter your Message"
              label="Message"
              {...register('message')}
              errorMessage={errors.message?.message}
            />
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Button className="max-md:w-full" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}
