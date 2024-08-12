import { Metadata } from 'next'
import Image from 'next/image'
import { unstable_setRequestLocale } from 'next-intl/server'
import { PortableText } from 'next-sanity'

import { Typography } from '@/components/atoms/typography'
import BlogCard from '@/components/molecules/blog-card'
import PortableBlogComponent from '@/components/molecules/portable-blog-component'
import Title from '@/components/molecules/title'
import { Link } from '@/navigation'
import { fetchBlogData } from '@/sanity/services/blog.service'
import { SlugLocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params: { slug, locale },
}: SlugLocaleProps): Promise<Metadata> {
  const { seo } = await fetchBlogData(slug, locale)
  return mapSeo(seo)
}

export default async function Page({
  params: { slug, locale },
}: SlugLocaleProps) {
  unstable_setRequestLocale(locale)
  const data = await fetchBlogData(slug, locale)

  return (
    <main className="flex flex-col gap-8 md:gap-10 2xl:gap-14">
      <Title title={data.title} subtitle={data.subtitle} />
      {data.displayHeroImage && (
        <Image
          {...data.image}
          alt="Ograviti Logo"
          className="h-[245px] w-full rounded-[45px] object-cover xl:h-[400px] 2xl:h-[686px]"
          priority
        />
      )}

      <div className="flex flex-col gap-4 md:gap-6 2xl:gap-8">
        <PortableText value={data.body} components={PortableBlogComponent} />
      </div>
      <div>
        <div className="flex justify-end py-4 md:justify-between md:py-8">
          <Typography variant="subtitle1" className="hidden md:block">
            Other blogs
          </Typography>
          <Link
            href="/blog"
            className="text-right font-bold underline md:text-2xl"
          >
            See all
          </Link>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          {data.relatedBlogs.map((blog, key) => (
            <BlogCard data={blog} key={key} />
          ))}
        </div>
      </div>
    </main>
  )
}
