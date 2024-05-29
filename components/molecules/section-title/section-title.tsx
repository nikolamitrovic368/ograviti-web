import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/tailwind'

export default function SectionTitle({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-4 2xl:w-2/3 2xl:gap-8', className)}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="subtitle2">{subtitle}</Typography>
    </div>
  )
}
