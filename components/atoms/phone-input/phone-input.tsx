import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/tailwind'

import { CountrySelect } from '../country-select'

const phoneInputVariants = cva(
  'px-5 py-3.5 md:py-5 rounded-full w-[calc(100%-52px)]',
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
      <div className={cn('flex flex-col gap-4', { 'w-full': fullWidth })}>
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
