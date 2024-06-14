'use client'
import Image from 'next/image'
import Link from 'next/link'

import { IconButton } from '@/components/atoms/icon-button'
import { Right } from '@/components/atoms/icons'
import useSanityImage from '@/hooks/useSanityImage'
import { type CaseStudyCard } from '@/sanity/queries/pages/home.query'

type CaseStudyCardProps = {
  data: CaseStudyCard
}

export default function CaseStudyCard({
  data: { title, description, image, slug },
}: CaseStudyCardProps) {
  const imageProps = useSanityImage(image)
  return (
    <Link
      href={`/case-study/${slug.current}`}
      className="group flex h-[60vh] w-full items-center justify-center overflow-hidden rounded-[45.84px] [background-image:linear-gradient(135deg,#1e1e1e_74%,rgba(255,255,255,0.6)_100%)]"
    >
      <div className="flex h-[calc(60vh-4px)] w-[calc(100%-4px)] items-center justify-center overflow-hidden rounded-[45.84px] bg-secondary">
        <div className="h-[calc(60vh-24px)] w-[calc(100%-20px)] flex-col justify-center overflow-hidden">
          <div className="h-[calc(60vh-24px)] w-full overflow-hidden rounded-[34.38px]">
            <Image
              {...imageProps!}
              alt=""
              className="flex h-[calc(60vh-165px)] w-full items-center justify-center overflow-hidden rounded-[34.38px] object-cover transition-all duration-500 ease-smart md:h-[calc(60vh-24px)] md:group-hover:h-[calc(60vh-165px)] 2xl:group-hover:h-[calc(60vh-210px)]"
            ></Image>
            <div className="flex h-20 items-center overflow-hidden text-nowrap bg-gradient-to-r from-white to-secondary bg-clip-text text-center text-6xl text-transparent md:text-[4vw] 2xl:h-28">
              {title}
            </div>
            <div className="flex items-center justify-between px-1">
              <div className="pl-4 text-xl">{description}</div>
              <div>
                <IconButton variant="secondary" className="">
                  <Right />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
