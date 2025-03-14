import { Metadata } from 'next'

import Modules from '@/components/modules'
import { sanityFetch } from '@/sanity/client'
import { pageQuery } from '@/sanity/queries'
import { SlugsLocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params,
}: SlugsLocaleProps): Promise<Metadata> {
  const { locale, slug } = await params
  const page = await sanityFetch({
    query: pageQuery,
    tags: ['page'],
    params: { slug: slug?.join('/'), locale },
  })
  return mapSeo(page?.seo)
}

export default async function Page({ params }: SlugsLocaleProps) {
  const { locale, slug } = await params
  const page = await sanityFetch({
    query: pageQuery,
    tags: ['page'],
    params: { slug: slug?.join('/'), locale },
  })
  return <Modules modules={page?.modules} />
}
