import Title from '@/components/molecules/title'
import ContactForm from '@/components/organisms/contact-form'
import { fetchContactUsPageData } from '@/sanity/services/pages/contact-us.service'

export default async function Page() {
  const data = await fetchContactUsPageData()
  return (
    <main className="flex flex-col gap-8 md:gap-10 lg:gap-14">
      <Title title={data.title} subtitle={data.subtitle} />
      <ContactForm />
    </main>
  )
}
