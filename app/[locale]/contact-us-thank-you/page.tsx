import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

import { Typography } from '@/components/atoms/typography'
import { fetchContactUsPageData } from '@/sanity/services/pages/contact-us.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(props: LocaleProps): Promise<Metadata> {
  const params = await props.params

  const { locale } = params

  const { seo } = await fetchContactUsPageData(locale)
  return mapSeo(seo)
}

export default function ContactUsThankYouPage() {
  const t = useTranslations('ContactUsThankYouPage')
  return (
    <main className="flex flex-col items-center gap-4 pt-12">
      <Typography variant="h1" className="text-center" textColor="primary">
        {t('title')}
      </Typography>
      <Typography variant="subtitle1" className="text-center">
        {t('description')}
      </Typography>
    </main>
  )
}
