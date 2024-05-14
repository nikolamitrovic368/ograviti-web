'use client'
import { Typography } from '@/components/atoms/typography'
import BlogCard from '@/components/molecules/blog-card'

export default function Page() {
  return (
    <main className="pb-28 md:pb-60">
      <div className="flex flex-col items-center gap-8 pb-8 md:gap-14">
        <Typography variant="h1" className="text-center">
          <span className="text-primary">Our</span> Blog
        </Typography>
        <Typography variant="subtitle1" className="text-center md:w-2/3">
          Exploring Insights and Innovations, Dive into the Ograviti Blog for
          the Latest in Technology, Design, and Digital Transformation.
        </Typography>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="flex gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="flex gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </main>
  )
}
