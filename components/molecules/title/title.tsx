import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/common'

export default function Title({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-8 md:gap-4 2xl:gap-14',
        className,
      )}
    >
      <Typography variant="h1" className="first text-center">
        <span className="text-primary">{title.split(' ')[0]}</span>{' '}
        {title.includes(' ') && title.substring(title.indexOf(' ') + 1)}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" className="text-center lg:w-2/3">
          {subtitle}
        </Typography>
      )}
    </div>
  )
}
