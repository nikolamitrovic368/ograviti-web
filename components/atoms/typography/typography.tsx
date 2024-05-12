import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/tailwind'

const typographyVariants = cva('', {
  variants: {
    variant: {
      default: '',
      h1: 'text-7xl font-bold py-4',
      h2: 'text-5xl font-bold py-4 ',
      subtitle1: 'text-3xl',
      subtitle2: 'text-2xl leading-9',
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
