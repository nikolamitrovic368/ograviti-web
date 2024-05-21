'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/atoms/button'
import { Ograviti } from '@/components/atoms/icons'
import { Typography } from '@/components/atoms/typography'
import Socials from '@/components/molecules/socials/socials'
import { footerNavigationConfig } from '@/constants/navigation'
import { cn } from '@/utils/tailwind'

export default function Footer() {
  const pathname = usePathname()
  return (
    <div
      className={cn(
        'mt-28 flex-col items-center justify-center bg-secondary px-8 md:mt-10 md:flex xl:px-16 2xl:mt-60 2xl:px-28',
        pathname === '/' ? 'hidden' : 'flex',
      )}
    >
      <Typography
        variant="small"
        className="pt-8 text-white opacity-50 md:pt-8 2xl:pt-14"
      >
        Are you ready?
      </Typography>
      <div className="py-6 text-sm leading-6 md:text-2xl md:leading-10 2xl:text-3xl 2xl:leading-[50px]">
        Let’s get started
      </div>
      <Button className="max-md:w-full">Get started</Button>
      <Typography
        variant="small"
        className="pb-10 pt-6 text-white opacity-70 md:py-8 2xl:py-14"
      >
        Copyright © 2024 • Ograviti.
      </Typography>
      <hr className="w-full bg-primary-foreground opacity-20" />
      <div className="flex w-full flex-col items-center justify-between gap-6 py-10 md:flex-row md:gap-0 md:py-5 2xl:py-10">
        <Link href="/">
          <Ograviti
            variants="secondary"
            className="h-auto w-32 md:w-40 2xl:w-72"
          />
        </Link>
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:gap-0 2xl:gap-4">
          {footerNavigationConfig.map(nav => (
            <Link
              href={nav.url}
              key={nav.url}
              className="w-28 text-center text-base font-semibold capitalize text-zinc-300 md:text-xl"
            >
              {nav.title}
            </Link>
          ))}
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  )
}
