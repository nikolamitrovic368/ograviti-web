import { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { PortableText } from 'next-sanity'

import { Typography } from '@/components/atoms/typography'
import Title from '@/components/modules/heading-title'
import BlogCard from '@/components/molecules/blog-card'
import PortableBlogComponent from '@/components/molecules/portable-blog-component'
import { Link } from '@/i18n/routing'
import { fetchBlogData } from '@/sanity/services/blog.service'
import { SlugLocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params,
}: SlugLocaleProps): Promise<Metadata> {
  const { slug, locale } = await params
  const { seo } = await fetchBlogData(slug, locale)
  return mapSeo(seo)
}

export default async function BlogPage({ params }: SlugLocaleProps) {
  const { slug, locale } = await params
  const data = await fetchBlogData(slug, locale)
  const t = await getTranslations('BlogPage')

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

      <div className="flex flex-col gap-4 md:gap-6">
        <PortableText value={data.body} components={PortableBlogComponent} />
      </div>
      <div>
        <div className="flex justify-end py-4 md:justify-between md:py-8">
          <Typography variant="subtitle1" className="hidden md:block">
            {t('other-blogs')}
          </Typography>
          <Link
            href="/blog"
            className="text-right font-bold underline md:text-2xl"
          >
            {t('see-all')}
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
