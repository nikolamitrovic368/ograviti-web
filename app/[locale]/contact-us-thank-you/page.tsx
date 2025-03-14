import { useTranslations } from 'next-intl'

import { Typography } from '@/components/atoms/typography'

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
