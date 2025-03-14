import Modules from '@/components/modules'
import { sanityFetch } from '@/sanity/client'
import { pageQuery } from '@/sanity/queries'
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
  const page = await sanityFetch({
    query: pageQuery,
    tags: ['page'],
    params: { slug: slug?.join('/'), locale },
  })
  return <Modules modules={page?.modules} />
}
