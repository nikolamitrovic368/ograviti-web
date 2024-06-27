import BlogCard from '@/components/molecules/blog-card'
import Title from '@/components/molecules/title'
import { fetchBlogPageData } from '@/sanity/services/pages/blog.service'

export default async function Page() {
  const data = await fetchBlogPageData()
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
