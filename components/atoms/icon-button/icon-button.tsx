import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/tailwind'

const iconButtonVariants = cva('flex justify-center items-center', {
  variants: {
    variant: {
      default: 'rounded-full bg-secondary text-background',
      secondary: 'rounded-full bg-stone-500 text-background',
      icon: '',
    },
    size: {
      default: 'w-[72px] h-[72px]',
      tiny: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, disabled = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          iconButtonVariants({ variant, size, className }),
          disabled && 'opacity-70',
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  },
)
IconButton.displayName = 'IconButton'

export { IconButton, iconButtonVariants }
