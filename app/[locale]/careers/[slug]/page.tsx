import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input/input'
import PhoneInput from '@/components/atoms/phone-input'
import { Typography } from '@/components/atoms/typography'
import { UploadInput } from '@/components/atoms/upload-input/upload-input'
import Title from '@/components/modules/heading-title'
import { sanityFetch } from '@/sanity/client'
import { careersPageQuery } from '@/sanity/queries'
import { SlugLocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(
  props: SlugLocaleProps,
): Promise<Metadata> {
  const params = await props.params

  const { slug, locale } = params

  const data = await sanityFetch({
    query: careersPageQuery,
    tags: ['careersPage'],
    params: { slug, locale },
  })
  return mapSeo(data?.seo)
}

export default async function CareerPage({ params }: SlugLocaleProps) {
  const { slug, locale } = await params
  const t = await getTranslations('CareerPage')
  const data = await sanityFetch({
    query: careersPageQuery,
    tags: ['careersPage'],
    params: { slug, locale },
  })
  return (
    <div className="-mx-8 -mb-28 pb-12 md:-mb-60 md:bg-[url('/images/bgs/1.svg')] md:bg-right md:bg-repeat-y xl:-mx-16 2xl:-mx-28">
      <main className="mb-28 flex flex-col gap-8 px-8 md:mb-60 md:gap-14 xl:px-16 2xl:px-28">
        <Title title={data?.title} subtitle={data?.subtitle} />
        <Typography variant="subtitle1" className="text-center text-3xl">
          {t('are-you-interested')}
        </Typography>
        <div className="flex flex-col items-center justify-center gap-14 md:gap-16 2xl:gap-24">
          <div className="grid w-full grid-cols-1 justify-center gap-8 md:w-auto md:grid-cols-2">
            <Input
              label={t('form.firstname')}
              placeholder={t('placeholder.firstname')}
              className="md:w-80 lg:w-[480px] xl:w-[554px]"
            />
            <Input
              label={t('form.lastname')}
              placeholder={t('placeholder.lastname')}
              className="md:w-80 lg:w-[480px] xl:w-[554px]"
            />
            <Input
              label={t('form.email')}
              placeholder={t('placeholder.email')}
              className="md:w-80 lg:w-[480px] xl:w-[554px]"
            />
            <div className="w-full md:w-80 lg:w-[480px] xl:w-[554px]">
              <PhoneInput label={t('form.phone')} />
            </div>
            <UploadInput className="w-full md:w-[227px]" />
          </div>
          <Button>{t('apply-now')}</Button>
        </div>
      </main>
    </div>
  )
}
