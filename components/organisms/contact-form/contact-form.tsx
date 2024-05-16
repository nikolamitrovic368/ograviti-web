import Image from 'next/image'

import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { PhoneInput } from '@/components/atoms/phone-input'
import { Textarea } from '@/components/atoms/textarea'
import { Typography } from '@/components/atoms/typography'

export default function ContactForm() {
  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row">
      <div className="flex w-full flex-col gap-14 md:py-20 lg:w-2/5 lg:border-r lg:border-secondary">
        <Image
          className="hidden h-auto max-sm:w-[121px] lg:block"
          src={`/images/logos/ograviti.svg`}
          alt="Ograviti Logo"
          width={363}
          height={57}
          priority
        />
        <Typography
          variant="subtitle1"
          className="text-center text-2xl md:text-3xl"
        >
          Get in Touch with Ograviti
        </Typography>
        <div className="hidden grid-cols-2 gap-7 lg:grid">
          <div>
            <div className="pb-2 text-xl">Switzerland Office</div>
            <div>Bahnhofstrasse 100, Zurich</div>
          </div>
          <div>
            <div className="pb-2 text-xl">Phone</div>
            <a
              href="tel:+41-1122-111-111"
              className="duration-300 hover:text-primary"
            >
              +41 1122 111 111
            </a>
          </div>
          <div>
            <div className="pb-2 text-xl">Dubai office</div>
            <div>Jumeirah Business Center</div>
          </div>
          <div>
            <div className="pb-2 text-xl">Phone</div>
            <a
              href="tel:+971-1112-111-111"
              className="duration-300 hover:text-primary"
            >
              +971 1112 111 111
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-8 lg:w-3/5 lg:gap-14 lg:py-20">
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
  )
}
