import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'
import BlogCard from '@/components/molecules/blog-card'
import Title from '@/components/molecules/title'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title
        title="Look inside art"
        subtitle="Nunc nulla. Praesent ac massa at ligula laoreet iaculis. Aliquam erat volutpat. Aenean commodo ligula eget dolor."
      />
      <Image
        src="/images/blogs/9.jpg"
        alt="Ograviti Logo"
        width={1280}
        height={686}
        className="h-[245px] w-full rounded-[45px] object-cover xl:h-[500px] 2xl:h-[686px]"
        priority
      />
      <div className="flex flex-col gap-4 md:gap-8">
        <Typography variant="h2">Donec mi odio, faucibus at.</Typography>
        <Typography variant="subtitle2">
          Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit
          dui, id egestas quam mauris ut lacus. Suspendisse feugiat. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Fusce id purus.
        </Typography>
        <Typography variant="subtitle2">
          Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Duis
          arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
          Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi,
          condimentum viverra felis nunc et lorem. Proin faucibus arcu quis
          ante. Etiam imperdiet imperdiet orci.
        </Typography>
        <Typography variant="subtitle2">
          Phasellus gravida semper nisi. Nunc sed turpis. Praesent ac massa at
          ligula laoreet iaculis.
        </Typography>
        <Typography variant="subtitle2">
          Duis vel nibh at velit scelerisque suscipit. Praesent ac massa at
          ligula laoreet iaculis. Aenean commodo ligula eget dolor. Vivamus
          consectetuer hendrerit lacus. Phasellus ullamcorper ipsum rutrum nunc.
        </Typography>
      </div>
      <Typography
        variant="subtitle1"
        className="rounded-[45px] bg-primary-foreground px-6 py-3.5 text-center text-secondary md:px-16 md:py-5 2xl:px-28 2xl:py-9"
      >
        Phasellus a est. Sed mollis, eros et ultrices tempus, mauris ipsum
        aliquam libero, non adipiscing dolor urna a orci. Cras risus ipsum,
        faucibus ut, ullamcorper id, varius ac, leo. Phasellus consectetuer
        vestibulum elit. Fusce egestas elit eget lorem.
      </Typography>
      <Typography variant="subtitle2">
        Quisque id odio. Curabitur at lacus ac velit ornare lobortis.
        Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec,
        quam. Quisque id odio.. Praesent blandit laoreet nibh. Nulla consequat
        massa quis enim. Morbi mattis ullamcorper velit. Morbi mattis
        ullamcorper velit. Nunc nulla. Proin sapien ipsum, porta a, auctor quis,
        euismod ut, mi. Etiam vitae tortor. Cras ultricies mi eu turpis
        hendrerit fringilla. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Vivamus laoreet.
      </Typography>
      <Image
        src="/images/blogs/10.jpg"
        alt="Ograviti Logo"
        width={1280}
        height={245}
        className="h-[245px] w-full rounded-[45px] object-cover xl:h-[500px] 2xl:h-[686px]"
        priority
      />

      <div className="flex flex-col gap-4 md:gap-8">
        <Typography variant="subtitle2">
          Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula.
          Etiam ut purus mattis mauris sodales aliquam. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed
          aliquam, nisi quis porttitor congue, elit erat euismod orci, ac
          placerat dolor lectus quis orci. Vivamus laoreet. Donec elit libero,
          sodales nec, volutpat a, suscipit non, turpis.
        </Typography>
        <Typography variant="subtitle2">
          Sed lectus. Donec quam felis, ultricies nec, pellentesque eu, pretium
          quis, sem. Praesent ut ligula non mi varius sagittis. Morbi vestibulum
          volutpat enim. Fusce commodo aliquam arcu.
        </Typography>
        <Typography variant="subtitle2">
          Curabitur suscipit suscipit tellus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id
          purus. Integer ante arcu, accumsan a, consectetuer eget, posuere ut,
          mauris. In consectetuer turpis ut velit. Praesent vestibulum dapibus
          nibh.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        <Image
          src="/images/blogs/11.jpg"
          alt="Ograviti Logo"
          width={3840}
          height={2561}
          className="h-[245px] rounded-[45px] object-cover md:h-[439px]"
          priority
        />
        <Image
          src="/images/blogs/12.jpg"
          alt="Ograviti Logo"
          width={3840}
          height={2561}
          className="h-[245px] rounded-[45px] object-cover md:h-[439px]"
          priority
        />
        <Image
          src="/images/blogs/13.jpg"
          alt="Ograviti Logo"
          width={3840}
          height={2561}
          className="h-[245px] rounded-[45px] object-cover md:h-[439px]"
          priority
        />
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        <Typography variant="h2">Donec mi odio, faucibus at.</Typography>
        <Typography variant="subtitle2">
          Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit
          dui, id egestas quam mauris ut lacus. Suspendisse feugiat. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Fusce id purus.
        </Typography>
        <Typography variant="subtitle2">
          Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Duis
          arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
          Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi,
          condimentum viverra felis nunc et lorem. Proin faucibus arcu quis
          ante. Etiam imperdiet imperdiet orci.
        </Typography>
      </div>
      <div>
        <div className="flex justify-end py-4 md:justify-between md:py-8">
          <Typography variant="subtitle1" className="hidden md:block">
            Other blogs
          </Typography>
          <div className="text-right font-bold underline md:text-2xl">
            See all
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </main>
  )
}
