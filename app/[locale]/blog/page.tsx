import { Metadata } from 'next'

import Title from '@/components/modules/heading-title'
import BlogCard from '@/components/molecules/blog-card'
import { sanityFetch } from '@/sanity/client'
import { blogPageQuery } from '@/sanity/queries'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params,
}: LocaleProps): Promise<Metadata> {
  const { locale } = await params
  const data = await sanityFetch({
    query: blogPageQuery,
    tags: ['blogPage'],
    params: { locale },
  })
  return mapSeo(data?.seo)
}

export default async function Page({ params }: LocaleProps) {
  const { locale } = await params
  const data = await sanityFetch({
    query: blogPageQuery,
    tags: ['blogPage'],
    params: { locale },
  })
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title title={data?.title} subtitle={data?.subtitle} />
      {data?.blogs?.length && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data?.blogs.map(blog => <BlogCard data={blog} key={blog._id} />)}
        </div>
      )}
    </main>
  )
}
