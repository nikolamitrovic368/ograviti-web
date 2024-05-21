import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/tailwind'

const textareaVariants = cva(
  'px-5 py-3.5 md:py-5 rounded-[32px] max-md:text-sm resize-none h-40 outline-none focus:outline focus:outline-primary transition-all',
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
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string
  fullWidth?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, variant, fullWidth, label, ...props }, ref) => {
    return (
      <div
        className={cn('flex flex-col gap-2 2xl:gap-4', { 'w-full': fullWidth })}
      >
        {label && <div className="max-md:text-sm">{label}</div>}
        <textarea
          className={cn(textareaVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea, textareaVariants }
