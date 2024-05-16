import BlogCard from '@/components/molecules/blog-card'
import Title from '@/components/molecules/title'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title
        title="Our Blog"
        subtitle="Exploring Insights and Innovations, Dive into the Ograviti Blog for the Latest in Technology, Design, and Digital Transformation."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {[...new Array(12)].map((_v, key) => (
          <BlogCard key={key} />
        ))}
      </div>
    </main>
  )
}
