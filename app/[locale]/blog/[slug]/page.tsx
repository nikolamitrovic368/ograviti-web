import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { PortableText } from 'next-sanity'
import { Image } from 'next-sanity/image'

import { Typography } from '@/components/atoms/typography'
import Title from '@/components/modules/heading-title'
import BlogCard from '@/components/molecules/blog-card'
import { PortableComponent } from '@/components/molecules/portable-component/portable-component'
import { Link } from '@/i18n/routing'
import { sanityFetch } from '@/sanity/client'
import { blogQuery } from '@/sanity/queries'
import { urlForImage } from '@/sanity/utils'
import { SlugLocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params,
}: SlugLocaleProps): Promise<Metadata> {
  const { slug, locale } = await params
  const data = await sanityFetch({
    query: blogQuery,
    tags: ['blog'],
    params: { slug, locale },
  })
  return mapSeo(data?.seo)
}

export default async function BlogPage({ params }: SlugLocaleProps) {
  const { slug, locale } = await params
  const data = await sanityFetch({
    query: blogQuery,
    tags: ['blog'],
    params: { slug, locale },
  })
  const t = await getTranslations('BlogPage')

  return (
    <main className="flex flex-col gap-8 md:gap-10 2xl:gap-14">
      <Title title={data?.title} subtitle={data?.subtitle} />
      {data?.displayHeroImage && data?.image && (
        <Image
          src={urlForImage(data.image)?.fit('max').url()}
          width={Math.round(
            686 *
              getImageDimensions(data.image as SanityImageSource).aspectRatio,
          )}
          height={686}
          alt="Ograviti Logo"
          className="h-[245px] w-full rounded-[45px] object-cover xl:h-[400px] 2xl:h-[686px]"
        />
      )}

      {data?.body && (
        <div className="flex flex-col gap-4 md:gap-6">
          <PortableText value={data.body} components={PortableComponent} />
        </div>
      )}
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
          {data?.relatedBlogs?.map((blog, key) => (
            <BlogCard data={blog} key={key} />
          ))}
        </div>
      </div>
    </main>
  )
}
