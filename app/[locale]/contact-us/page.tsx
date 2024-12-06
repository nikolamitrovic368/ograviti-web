import { Metadata } from 'next'

import Title from '@/components/molecules/title'
import ContactForm from '@/components/organisms/contact-form'
import { fetchContactUsPageData } from '@/sanity/services/pages/contact-us.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(props: LocaleProps): Promise<Metadata> {
  const params = await props.params

  const { locale } = params

  const { seo } = await fetchContactUsPageData(locale)
  return mapSeo(seo)
}

export default async function Page(props: LocaleProps) {
  const params = await props.params

  const { locale } = params

  const data = await fetchContactUsPageData(locale)
  return (
    <main className="flex flex-col gap-8 md:gap-10 lg:gap-14">
      <Title title={data.title} subtitle={data.subtitle} />
      <ContactForm />
    </main>
  )
}
