import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import * as React from 'react'

import { cn } from '@/utils/tailwind'

const countrySelectVariants = cva(
  'h-12 md:h-16 rounded-full flex justify-center items-center w-24 gap-1.5',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface CountrySelectProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof countrySelectVariants> {
  label?: string
}

const CountrySelect = React.forwardRef<HTMLDivElement, CountrySelectProps>(
  ({ className, variant, label, ...props }, ref) => {
    return (
      <div className="flex w-auto flex-col gap-4">
        {label && <div>{label}</div>}
        <div
          className={cn(countrySelectVariants({ variant, className }))}
          ref={ref}
          {...props}
        >
          <Image
            src="/images/logos/flag.svg"
            alt="Ograviti Logo"
            width={34}
            height={34}
            priority
          />

          <Image
            src="/images/icons/down.svg"
            alt="Ograviti Logo"
            width={24}
            height={24}
            priority
          />
        </div>
      </div>
    )
  },
)
CountrySelect.displayName = 'CountrySelect'

export { CountrySelect, countrySelectVariants }
