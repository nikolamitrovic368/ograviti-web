'use client'
import Image from 'next/image'

import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { PhoneInput } from '@/components/atoms/phone-input'
import { Textarea } from '@/components/atoms/textarea'
import { Typography } from '@/components/atoms/typography'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <div className="flex flex-col items-center gap-8 md:gap-14 md:pb-8">
        <Typography variant="h1" className="text-center">
          <span className="text-primary">Fuel</span> Your Brand’s Goals with
          Ograviti
        </Typography>
        <Typography variant="subtitle1" className="text-center md:w-2/3">
          You will get a response within 24 hours. We will explain in details
          how we can help you fuel and grow your brand within the stated budget.
        </Typography>
      </div>

      <div className="flex w-full flex-col gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-14 md:w-2/5 md:border-r md:py-8">
          <Image
            className="hidden h-auto max-sm:w-[121px] md:block"
            src={`/images/logos/ograviti.svg`}
            alt="Ograviti Logo"
            width={363}
            height={57}
            priority
          />
          <Typography variant="subtitle1" className="text-center text-3xl">
            Get in Touch with Ograviti
          </Typography>
          <div className="hidden grid-cols-2 gap-7 md:grid">
            <div>
              <div className="text-xl">Switzerland Office</div>
              <div>Bahnhofstrasse 100, Zurich</div>
            </div>
            <div>
              <div className="text-xl">Phone</div>
              <div>+41 1122 111 111</div>
            </div>
            <div>
              <div className="text-xl">Dubai office</div>
              <div>Jumeirah Business Center</div>
            </div>
            <div>
              <div className="text-xl">Phone</div>
              <div>+971 1112 111 111</div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8 md:w-3/5 md:gap-14 md:py-8">
          <div className="grid w-full grid-cols-1 justify-center gap-6 md:grid-cols-2 md:gap-8">
            <Input
              label="First Name"
              placeholder="Enter First Name"
              className="w-full"
            />
            <Input
              label="Last Name"
              placeholder="Enter Last Name"
              className="w-full"
            />
            <Input
              label="Email Address"
              placeholder="Enter Email Address"
              className="w-full"
            />
            <div className="w-full">
              <PhoneInput
                label="Phone Number"
                placeholder="Enter Phone Number"
                fullWidth
              />
            </div>
            <div className="md:col-span-2">
              <Textarea
                fullWidth
                placeholder="Enter your Message"
                label="Message"
              />
            </div>
          </div>
          <div className="flex w-full justify-end">
            <Button className="max-md:w-full">Send</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
