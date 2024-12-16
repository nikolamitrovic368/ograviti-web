import Modules from '@/components/modules'
import { fetchPageData } from '@/sanity/services/pages/pages.service'
import { SlugsLocaleProps } from '@/types'

// export async function generateMetadata({
//   params,
// }: SlugsLocaleProps): Promise<Metadata> {
//   const { locale, slug } = await params
//   const { seo } = await fetchPageData(slug, locale)
//   return mapSeo(seo)
// }

export default async function Page({ params }: SlugsLocaleProps) {
  const { locale, slug } = await params
  const page = await fetchPageData(slug, locale)
  return <Modules modules={page?.modules} />
}
