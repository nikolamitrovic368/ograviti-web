import Image from 'next/image'
import React from 'react'

import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/common'

export default function TextWithLogo({
  title,
  subtitle,
  logoPosition,
}: Partial<{
  title: string
  subtitle: string
  logoPosition: boolean
}>) {
  return (
    <div
      className={cn(
        'mr-0 flex items-center justify-between gap-0 md:gap-16 2xl:gap-28',
        logoPosition
          ? 'flex-row-reverse md:-ml-8 xl:-ml-16 2xl:-ml-28'
          : 'md:-mr-8 xl:-mr-16 2xl:-mr-28',
      )}
    >
      <div className="flex-1">
        <Typography variant="h2" className="pb-4">
          {title}
        </Typography>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Image
        src={
          logoPosition
            ? '/images/logos/ograviti-glass1.svg'
            : '/images/logos/ograviti-glass2.svg'
        }
        alt="Ograviti Logo"
        width={656}
        height={155}
        className="hidden h-28 w-auto md:block 2xl:h-[155px]"
        priority
      />
    </div>
  )
}
