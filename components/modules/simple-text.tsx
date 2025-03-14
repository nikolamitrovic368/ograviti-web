import SectionTitle from '@/components/molecules/section-title'

export default function SimpleText({
  title,
  subtitle,
}: Partial<{
  title: string
  subtitle: string
}>) {
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title={title} subtitle={subtitle} />
    </div>
  )
}
