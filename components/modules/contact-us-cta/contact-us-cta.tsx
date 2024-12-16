import { Link } from '@/components/atoms/link'
import LogoBackground from '@/components/atoms/logo-background/logo-background'
import { Typography } from '@/components/atoms/typography'

export default function ContactUsCta({
  title,
  ctaText,
}: Partial<Sanity.ContactUsCta>) {
  return (
    <LogoBackground>
      <div className="flex flex-col gap-16 p-5 text-center md:w-1/2 md:p-10 md:text-left">
        <Typography variant="h1">{title}</Typography>
        <div className="w-full">
          <Link variant="button" href="/contact-us" className="inline-block">
            {ctaText}
          </Link>
        </div>
      </div>
    </LogoBackground>
  )
}
