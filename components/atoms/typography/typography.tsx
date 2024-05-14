import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/tailwind'

const typographyVariants = cva('', {
  variants: {
    variant: {
      default: '',
      h1: 'text-3xl md:text-5xl leading-10 font-bold',
      h2: 'text-5xl font-bold py-4 ',
      subtitle1: 'text-sm md:text-3xl leading-[24px] md:leading-10',
      subtitle2: 'text-2xl leading-9',
      subtitle3: 'text-lg',
      small: 'max-md:text-sm',
    },
    type: {
      default: '',
      primary: 'text-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
    type: 'default',
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, type, ...props }) => {
    return (
      <div
        className={cn(typographyVariants({ variant, type, className }))}
        {...props}
      />
    )
  },
)
Typography.displayName = 'Typography'

export { Typography, typographyVariants }
