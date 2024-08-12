import { Metadata } from 'next'

import BlogCard from '@/components/molecules/blog-card'
import Title from '@/components/molecules/title'
import { fetchBlogPageData } from '@/sanity/services/pages/blog.service'
import { LocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params: { locale },
}: LocaleProps): Promise<Metadata> {
  const { seo } = await fetchBlogPageData(locale)
  return mapSeo(seo)
}

export default async function Page({ params: { locale } }: LocaleProps) {
  const data = await fetchBlogPageData(locale)
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title title={data.title} subtitle={data.subtitle} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {data.blogs.map((blog, key) => (
          <BlogCard data={blog} key={key} />
        ))}
      </div>
    </main>
  )
}
