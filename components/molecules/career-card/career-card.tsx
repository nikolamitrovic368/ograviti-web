import { IconButton } from '@/components/atoms/icon-button'
import Enter from '@/components/atoms/icons/enter'
import { Typography } from '@/components/atoms/typography'
import { Link } from '@/i18n/routing'
import { type CareerCard } from '@/sanity/queries/career.queries'
import { cn } from '@/utils/common'

type CareerCardProps = {
  data: CareerCard
  className?: string
}

export default function CareerCard({ className, data }: CareerCardProps) {
  return (
    <Link
      href={`/careers/${data.slug.current}`}
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
              {data.title}
            </Typography>
            <IconButton size="small">
              <Enter className="h-6 w-6 " />
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
