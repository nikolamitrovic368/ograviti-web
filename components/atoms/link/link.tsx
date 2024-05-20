import { cva, type VariantProps } from 'class-variance-authority'
import NextLink from 'next/link'
import * as React from 'react'

import { cn } from '@/utils/tailwind'

const linkVariants = cva('font-bold', {
  variants: {
    variant: {
      default: '',
      button:
        'bg-primary hover:bg-primary-hover transition-colors duration-300 text-primary-foreground rounded-full px-20 py-4',
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
