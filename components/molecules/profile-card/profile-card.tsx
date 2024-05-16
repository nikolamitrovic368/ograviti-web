import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/tailwind'

export default function ProfileCard({
  name,
  role,
  className,
}: {
  name: string
  role: string
  className?: string
}) {
  return (
    <div className={cn('flex w-full flex-col gap-8', className)}>
      <div className="group flex h-[63vh] w-full items-center justify-center rounded-[45.84px] [background-image:linear-gradient(135deg,#1e1e1e_74%,rgba(255,255,255,0.6)_100%)]">
        <div className="flex h-[calc(63vh-4px)] w-[calc(100%-4px)] items-center justify-center rounded-[45.84px] bg-secondary">
          <div className="group h-[calc(63vh-24px)] w-[calc(100%-20px)] flex-col justify-center overflow-hidden">
            <div
              className={`relative flex h-[calc(63vh-24px)] w-full items-center justify-center overflow-hidden rounded-[34.38px] bg-cover bg-center bg-no-repeat transition-all duration-500`}
              style={{
                backgroundImage: 'url(/images/users/1.png)',
              }}
            >
              <div className="absolute -left-16 bottom-0 flex w-16 flex-col items-center justify-center rounded-tr-3xl bg-background py-8 transition-all duration-500 group-hover:left-0">
                <button className="flex w-full items-center justify-center py-4 transition-all duration-500 hover:bg-primary">
                  <Image
                    src="/images/icons/linkedin.svg"
                    alt="facebook Logo"
                    width={24}
                    height={24}
                    priority
                  />
                </button>
                <button className="flex w-full items-center justify-center py-4 transition-all duration-500 hover:bg-primary">
                  <Image
                    src="/images/icons/facebook.svg"
                    alt="facebook Logo"
                    width={15}
                    height={24}
                    priority
                  />
                </button>
                <button className="flex w-full items-center justify-center py-4 transition-all duration-500 hover:bg-primary">
                  <Image
                    src="/images/icons/instagram.svg"
                    alt="facebook Logo"
                    width={25}
                    height={24}
                    priority
                  />
                </button>
                <button className="flex w-full items-center justify-center py-4 transition-all duration-500 hover:bg-primary">
                  <Image
                    src="/images/icons/youtube.svg"
                    alt="facebook Logo"
                    width={28}
                    height={24}
                    priority
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pl-8">
        <Typography
          variant="subtitle2"
          className="pb-2 text-base text-stone-500 max-sm:text-center"
        >
          {role}
        </Typography>
        <Typography
          variant="subtitle2"
          className="text-base max-sm:text-center"
        >
          {name}
        </Typography>
      </div>
    </div>
  )
}
