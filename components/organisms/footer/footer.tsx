import Link from 'next/link'

import { Button } from '@/components/atoms/button'
import { Ograviti } from '@/components/atoms/icons'
import { Typography } from '@/components/atoms/typography'
import Socials from '@/components/molecules/socials/socials'
import navigation from '@/constants/navigation'

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary px-8 xl:px-16 2xl:px-28">
      <Typography variant="small" className="pt-14 text-white opacity-50">
        Are you ready?
      </Typography>
      <Typography variant="subtitle1" className="py-8">
        Let’s get started
      </Typography>
      <Button>Get started</Button>
      <Typography variant="small" className="py-14 text-white opacity-70">
        Copyright © 2024 • Ograviti.
      </Typography>
      <hr className="w-full bg-primary-foreground opacity-20" />
      <div className="flex h-32 w-full items-center justify-between">
        <Ograviti variants="secondary" />
        <div className="flex gap-4">
          {navigation.map(nav => (
            <Link
              href={nav.url}
              key={nav.url}
              className="w-28 text-center text-xl font-semibold capitalize text-zinc-300"
            >
              {nav.title}
            </Link>
          ))}
        </div>
        <Socials />
      </div>
    </div>
  )
}
