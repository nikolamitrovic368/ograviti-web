import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { Link as NextLink } from '@/i18n/navigation'
import { cn } from '@/utils/common'

const linkVariants = cva('font-bold', {
  variants: {
    variant: {
      default: '',
      button:
        'bg-primary block hover:bg-primary-hover text-center transition-colors duration-300 text-primary-foreground rounded-full 2xl:px-20 2xl:py-4 px-16 py-3',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface LinkProps
  extends VariantProps<typeof linkVariants>,
    React.ComponentProps<typeof NextLink> {}

const Link = ({ className, variant, size, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(linkVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Link, linkVariants }
