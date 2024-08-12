import { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'

import Title from '@/components/molecules/title'
import ContactForm from '@/components/organisms/contact-form'
import { fetchContactUsPageData } from '@/sanity/services/pages/contact-us.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await fetchContactUsPageData()
  return mapSeo(seo)
}

export default async function Page({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale)
  const data = await fetchContactUsPageData()
  return (
    <main className="flex flex-col gap-8 md:gap-10 lg:gap-14">
      <Title title={data.title} subtitle={data.subtitle} />
      <ContactForm />
    </main>
  )
}
