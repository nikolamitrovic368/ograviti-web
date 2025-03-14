import { IconButton } from '@/components/atoms/icon-button'
import Enter from '@/components/atoms/icons/enter'
import { Typography } from '@/components/atoms/typography'
import { Link } from '@/i18n/routing'
import { CareersPageQueryResult } from '@/sanity.types'
import { cn } from '@/utils/common'

type CareerCardProps = {
  data: NonNullable<NonNullable<CareersPageQueryResult>['careers']>[number]
  className?: string
}

export default function CareerCard({ className, data }: CareerCardProps) {
  return (
    <Link
      href={`/careers/${data.slug.current}`}
      className={cn(
        'bg-card hover:bg-card-active relative flex w-full flex-col justify-end gap-4 rounded-2xl leading-normal transition-all duration-500',
        className,
      )}
    >
      <div className="w-full">
        <div className="flex flex-col gap-4 p-8">
          <div className="flex items-center justify-between">
            <Typography
              variant="subtitle3"
              className="text-primary-foreground py-2"
            >
              {data.title}
            </Typography>
            <IconButton size="small">
              <Enter className="h-6 w-6" />
            </IconButton>
          </div>
          <Typography variant="small" className="text-card-text">
            {data.subtitle}
          </Typography>
        </div>
      </div>
    </Link>
  )
}
