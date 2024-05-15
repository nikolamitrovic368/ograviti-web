import { Typography } from '@/components/atoms/typography'
import ContactForm from '@/components/organisms/contact-form'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <div className="flex flex-col items-center gap-8 md:gap-14 md:pb-8">
        <Typography variant="h1" className="text-center">
          <span className="text-primary">Fuel</span> Your Brand’s Goals with
          Ograviti
        </Typography>
        <Typography variant="subtitle1" className="text-center md:w-2/3">
          You will get a response within 24 hours. We will explain in details
          how we can help you fuel and grow your brand within the stated budget.
        </Typography>
      </div>
      <ContactForm />
    </main>
  )
}
