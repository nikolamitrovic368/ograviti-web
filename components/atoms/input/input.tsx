import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/tailwind'

const inputVariants = cva(
  'px-5 py-3.5 2xl:py-5 rounded-full max-md:text-sm outline-none focus:outline focus:outline-primary transition-all',
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

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 2xl:gap-4">
        {label && <div className="max-md:text-sm">{label}</div>}
        <input
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input, inputVariants }
