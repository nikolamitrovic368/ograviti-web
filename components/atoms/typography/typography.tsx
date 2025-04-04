import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/common'

const typographyVariants = cva('', {
  variants: {
    variant: {
      default: '',
      h1: 'text-3xl md:text-5xl 2xl:text-[80px] leading-10 md:leading-[80px] 2xl:leading-[100px] font-bold',
      h2: 'text-2xl md:text-3xl 2xl:text-5xl font-bold text-primary',
      h3: 'text-lg md:text-3xl 2xl:text-4xl font-bold',
      h4: 'text-lg md:text-2xl 2xl:text-3xl font-bold',
      h5: 'text-base md:text-xl 2xl:text-2xl font-bold',
      h6: 'text-sm md:text-lg 2xl:text-xl font-bold',
      subtitle1:
        'text-sm md:text-xl 2xl:text-3xl leading-6 md:leading-10 xl:leading-8 2xl:leading-[50px]',
      subtitle2:
        'text-sm md:text-lg 2xl:text-2xl leading-[24px] md:leading-7 2xl:leading-9',
      subtitle3: 'text-lg',
      small: 'max-md:text-sm',
    },
    textColor: {
      default: '',
      primary: 'text-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
    textColor: 'default',
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, textColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(typographyVariants({ variant, textColor, className }))}
        {...props}
      />
    )
  },
)
Typography.displayName = 'Typography'

export { Typography, typographyVariants }
