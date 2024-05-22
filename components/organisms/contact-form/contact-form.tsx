import { Button } from '@/components/atoms/button'
import { Ograviti } from '@/components/atoms/icons'
import { Input } from '@/components/atoms/input'
import { PhoneInput } from '@/components/atoms/phone-input'
import { Textarea } from '@/components/atoms/textarea'
import { Typography } from '@/components/atoms/typography'

export default function ContactForm() {
  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row">
      <div className="flex w-full flex-col gap-14 md:py-20 lg:w-1/3 lg:border-r lg:border-secondary">
        <div className="flex justify-center">
          <Ograviti className="hidden h-auto w-[121px] sm:w-[250px] lg:block 2xl:w-[363px]" />
        </div>
        <Typography
          variant="subtitle1"
          className="text-center text-2xl 2xl:text-3xl"
        >
          Get in Touch with Ograviti
        </Typography>
        <div className="hidden grid-cols-2 gap-7 lg:grid">
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
      <div className="flex w-full flex-col items-center justify-center gap-8 lg:w-2/3 lg:gap-14 lg:py-20">
        <div className="grid w-full grid-cols-1 justify-center gap-6 md:grid-cols-2 2xl:gap-8">
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
