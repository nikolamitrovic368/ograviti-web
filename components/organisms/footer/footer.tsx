import {Link as NextLink} from '@/navigation'

import { Ograviti } from '@/components/atoms/icons'
import { Link } from '@/components/atoms/link'
import { Typography } from '@/components/atoms/typography'
import Socials from '@/components/molecules/socials/socials'
import { footerNavigationConfig } from '@/constants/navigation'
import { FooterType } from '@/sanity/queries/layout.queries'
import { cn } from '@/utils/common'

type FooterProps = {
  data: FooterType
}

export default function Footer({ data }: FooterProps) {
  return (
    <div
      className={cn(
        'mt-28 flex-col items-center justify-center bg-secondary px-8 md:mt-10 md:flex xl:px-16 2xl:mt-60 2xl:px-28',
      )}
    >
      <Typography
        variant="small"
        className="pt-8 text-center  opacity-50 md:pt-8 2xl:pt-14"
      >
        Are you ready?
      </Typography>
      <div className="py-6 text-center text-2xl leading-6  md:leading-10 2xl:text-3xl 2xl:leading-[50px]">
        Let’s get started
      </div>
      <Link variant="button" href="/contact-us" className="max-md:w-full">
        Get Started
      </Link>
      <Typography
        variant="small"
        className="pb-10 pt-6 text-center text-white opacity-70 md:py-8 2xl:py-14"
      >
        Copyright © 2024 • Ograviti.
      </Typography>
      <hr className="w-full bg-primary-foreground opacity-20" />
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
              className="w-28 text-center text-base font-semibold capitalize text-zinc-300 md:text-xl"
            >
              {nav.title}
            </NextLink>
          ))}
        </div>
        <div>
          <Socials data={data.socialMedia} />
        </div>
      </div>
    </div>
  )
}
