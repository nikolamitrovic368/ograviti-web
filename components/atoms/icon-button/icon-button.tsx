import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/tailwind'

const iconButtonVariants = cva(
  'flex justify-center items-center transition-colors duration-300',
  {
    variants: {
      variant: {
        default: 'rounded-full bg-secondary text-background ',
        secondary:
          'rounded-full bg-stone-500 text-background hover:bg-primary active:bg-primary-hover',
        icon: '[&_path]:hover:fill-primary [&_path]:active:fill-primary-hover [&_path]:transition-all [&_path]:duration-300',
      },
      size: {
        default: 'w-14 h-14 2xl:w-[72px] 2xl:h-[72px]',
        small: 'w-[42px] h-[42px]',
        tiny: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, disabled = false, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }), {
          [disabled
            ? 'opacity-70'
            : 'hover:bg-primary active:bg-primary-hover']:
            variant === 'default' || !variant,
        })}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  },
)
IconButton.displayName = 'IconButton'

export { IconButton, iconButtonVariants }
