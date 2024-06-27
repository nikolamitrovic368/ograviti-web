import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/common'

import { CountrySelect } from '../country-select'

const phoneInputVariants = cva(
  'px-5 py-3.5 2xl:py-5 rounded-full w-[calc(100%-52px)] outline-none focus:outline focus:outline-primary transition-all',
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

export interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof phoneInputVariants> {
  label?: string
  fullWidth?: boolean
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, variant, label, fullWidth, ...props }, ref) => {
    return (
      <div
        className={cn('flex flex-col gap-2 2xl:gap-4', { 'w-full': fullWidth })}
      >
        {label && <div>{label}</div>}

        <div
          className={cn(
            'flex gap-2 md:gap-4',
            fullWidth ? 'w-full' : 'w-[554px]',
          )}
        >
          <CountrySelect />
          <input
            className={cn(phoneInputVariants({ variant, className }))}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    )
  },
)
PhoneInput.displayName = 'PhoneInput'

export { PhoneInput, phoneInputVariants }
