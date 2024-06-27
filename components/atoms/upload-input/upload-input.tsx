import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/common'

import { Upload } from '../icons'

const uploadInputVariants = cva(
  'h-12 md:h-[52px] px-5 rounded-full flex justify-between items-center w-24 gap-1.5 ',
  {
    variants: {
      variant: {
        default: 'bg-card',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface UploadInputProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof uploadInputVariants> {
  label?: string
}

const UploadInput = React.forwardRef<HTMLDivElement, UploadInputProps>(
  ({ className, variant, label, ...props }, ref) => {
    return (
      <div className="flex w-auto flex-col gap-4">
        {label && <div>{label}</div>}
        <div
          className={cn(uploadInputVariants({ variant, className }))}
          ref={ref}
          {...props}
        >
          Upload CV
          <Upload />
        </div>
      </div>
    )
  },
)
UploadInput.displayName = 'UploadInput'

export { UploadInput, uploadInputVariants }
