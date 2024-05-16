import Title from '@/components/molecules/title'
import ContactForm from '@/components/organisms/contact-form'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-10 lg:gap-14">
      <Title
        title="Fuel Your Brand’s Goals with Ograviti"
        subtitle="You will get a response within 24 hours. We will explain in details how we can help you fuel and grow your brand within the stated budget."
      />
      <ContactForm />
    </main>
  )
}
