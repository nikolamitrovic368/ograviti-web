import { useTranslations } from 'next-intl'

import { Ograviti } from '@/components/atoms/icons'
import { Link } from '@/components/atoms/link'
import { Typography } from '@/components/atoms/typography'
import Socials from '@/components/molecules/socials/socials'
import { footerNavigationConfig } from '@/constants/navigation'
import { Link as NextLink } from '@/i18n/routing'
import { FooterQueryResult } from '@/sanity.types'
import { cn } from '@/utils/common'

export default function Footer({ data }: { data: FooterQueryResult }) {
  const t = useTranslations('Footer')
  return (
    <div
      className={cn(
        'bg-secondary mt-28 flex-col items-center justify-center px-8 md:mt-10 md:flex xl:px-16 2xl:mt-60 2xl:px-28',
      )}
    >
      <Typography
        variant="small"
        className="pt-8 text-center opacity-50 md:pt-8 2xl:pt-14"
      >
        {t('are-you-ready')}
      </Typography>
      <div className="py-6 text-center text-2xl leading-6 md:leading-10 2xl:text-3xl 2xl:leading-[50px]">
        {t('lets-get-started')}
      </div>
      <Link variant="button" href="/contact-us" className="max-md:w-full">
        {t('get-started')}
      </Link>
      <Typography
        variant="small"
        className="pt-6 pb-10 text-center text-white opacity-70 md:py-8 2xl:py-14"
      >
        {t('copyright')}
      </Typography>
      <hr className="bg-primary-foreground w-full opacity-20" />
      <div className="flex w-full flex-col items-center justify-between gap-6 py-10 md:flex-row md:gap-0 md:py-5 2xl:py-10">
        <NextLink href="/">
          <Ograviti
            variants="secondary"
            className="h-auto w-32 md:w-40 2xl:w-72"
          />
        </NextLink>
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:gap-0 2xl:gap-4">
          {footerNavigationConfig.map(nav => (
            <NextLink
              href={nav.url}
              key={nav.url}
              className="w-28 text-center text-base font-semibold text-zinc-300 capitalize md:text-xl"
            >
              {nav.title}
            </NextLink>
          ))}
        </div>
        <div>{data?.socialMedia && <Socials data={data.socialMedia} />}</div>
      </div>
    </div>
  )
}
