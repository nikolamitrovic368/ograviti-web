import { Metadata } from 'next'

import { PortableText } from 'next-sanity'

import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input/input'
import { PhoneInput } from '@/components/atoms/phone-input'
import { Typography } from '@/components/atoms/typography'
import { UploadInput } from '@/components/atoms/upload-input/upload-input'
import PortableCareerComponent from '@/components/molecules/portable-career-component'
import Title from '@/components/molecules/title'
import { fetchCareerData } from '@/sanity/services/career.service'
import { SlugLocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params: { slug, locale },
}: SlugLocaleProps): Promise<Metadata> {
  
  const { seo } = await fetchCareerData(slug, locale)
  return mapSeo(seo)
}

export default async function Page({
  params: { slug, locale },
}: SlugLocaleProps) {
  
  const data = await fetchCareerData(slug, locale)
  return (
    <div className="-mx-8 -mb-28 pb-12 md:-mb-60 md:bg-[url('/images/bgs/1.svg')] md:bg-right md:bg-repeat-y xl:-mx-16 2xl:-mx-28">
      <main className="mb-28 flex flex-col gap-8 px-8 md:mb-60 md:gap-14 xl:px-16 2xl:px-28">
        <Title title={data.title} subtitle={data.subtitle} />
        <div className="flex flex-col gap-4 md:w-2/3 md:gap-8">
          <PortableText
            value={data.body}
            components={PortableCareerComponent}
          />
        </div>
        <Typography variant="subtitle1" className="text-center text-3xl">
          Are you interested?
        </Typography>
        <div className="flex flex-col items-center justify-center gap-14 md:gap-16 2xl:gap-24">
          <div className="grid w-full grid-cols-1 justify-center gap-8 md:w-auto md:grid-cols-2">
            <Input
              label="First Name"
              placeholder="Enter First Name"
              className="md:w-80 lg:w-[480px] xl:w-[554px]"
            />
            <Input
              label="Last Name"
              placeholder="Enter Last Name"
              className="md:w-80 lg:w-[480px] xl:w-[554px]"
            />
            <Input
              label="Email Address"
              placeholder="Enter Email Address"
              className="md:w-80 lg:w-[480px] xl:w-[554px]"
            />
            <div className="w-full md:w-80 lg:w-[480px] xl:w-[554px]">
              <PhoneInput
                label="Phone Number"
                placeholder="Enter Phone Number"
                fullWidth
              />
            </div>
            <UploadInput className="w-full md:w-[227px]" />
          </div>
          <Button>Apply Now</Button>
        </div>
      </main>
    </div>
  )
}
