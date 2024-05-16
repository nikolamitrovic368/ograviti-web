import Link from 'next/link'

import { IconButton } from '@/components/atoms/icon-button'
import Enter from '@/components/atoms/icons/enter'
import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/tailwind'

type CareerCardProps = {
  career?: {
    title: string
    description: string
    src: string
  }
  className?: string
}

export default function CareerCard({ className }: CareerCardProps) {
  return (
    <Link
      href="/careers/1"
      className={cn(
        'relative flex w-full flex-col justify-end gap-4 rounded-2xl bg-card leading-normal transition-all duration-500 hover:bg-card-active',
        className,
      )}
    >
      <div className="w-full">
        <div className="flex flex-col gap-4 p-8">
          <div className="flex items-center justify-between">
            <Typography
              variant="subtitle3"
              className="py-2 text-primary-foreground"
            >
              Full Stack Developer
            </Typography>
            <IconButton size="small">
              <Enter className="h-6 w-6 " />
            </IconButton>
          </div>
          <Typography variant="small" className="text-card-text">
            Join Ograviti as a Full Stack Developer to shape the digital future.
            Contribute to cutting-edge projects, redefine industry standards,
            and be part of a culture that values creativity and collaboration
          </Typography>
        </div>
      </div>
    </Link>
  )
}
