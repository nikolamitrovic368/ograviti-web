import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from '@/components/atoms/icons'
import { Typography } from '@/components/atoms/typography'
import { PageQueryResult } from '@/sanity.types'
import { urlForImage } from '@/sanity/utils'
import { cn } from '@/utils/common'

type ProfileCardProps = {
  data: NonNullable<
    NonNullable<
      Extract<
        NonNullable<NonNullable<PageQueryResult>['modules']>[number],
        { _type: 'team' }
      >
    >['members']
  >[number]
  className?: string
}
export default function ProfileCard({
  data: { name, role, linkedin, facebook, instagram, youtube, image },
  className,
}: ProfileCardProps) {
  return (
    <div className={cn('flex w-full flex-col gap-4 2xl:gap-8', className)}>
      <div className="group flex h-[500px] w-full items-center justify-center rounded-[45.84px] [background-image:linear-gradient(135deg,#1e1e1e_74%,rgba(255,255,255,0.6)_100%)] lg:h-[375px] xl:h-[420px] 2xl:h-[560px]">
        <div className="bg-secondary flex h-[calc(500px-4px)] w-[calc(100%-4px)] items-center justify-center rounded-[45.84px] lg:h-[calc(375px-4px)] xl:h-[calc(420px-4px)] 2xl:h-[calc(560px-4px)]">
          <div className="group h-[calc(500px-24px)] w-[calc(100%-20px)] flex-col justify-center overflow-hidden lg:h-[calc(375px-24px)] xl:h-[calc(420px-24px)] 2xl:h-[calc(560px-24px)]">
            <div
              className={`relative flex h-[calc(500px-24px)] w-full items-center justify-center overflow-hidden rounded-[34.38px] bg-cover bg-center bg-no-repeat transition-all duration-500 lg:h-[calc(375px-24px)] xl:h-[calc(420px-24px)] 2xl:h-[calc(560px-24px)]`}
              style={{
                backgroundImage: `url('${urlForImage(image).url()}')`,
              }}
            >
              <div className="bg-background absolute bottom-0 -left-16 flex w-14 flex-col items-center justify-center rounded-tr-3xl py-8 transition-all duration-500 group-hover:left-0 2xl:w-16">
                {linkedin && (
                  <a
                    target="_blank"
                    href={linkedin}
                    className="hover:bg-primary flex w-full items-center justify-center py-4 transition-all duration-500"
                  >
                    <Linkedin className="h-auto w-4 2xl:w-[18px]" />
                  </a>
                )}
                {facebook && (
                  <a
                    target="_blank"
                    href={facebook}
                    className="hover:bg-primary flex w-full items-center justify-center py-4 transition-all duration-500"
                  >
                    <Facebook className="h-auto w-3 2xl:w-[13px]" />
                  </a>
                )}
                {instagram && (
                  <a
                    target="_blank"
                    href={instagram}
                    className="hover:bg-primary flex w-full items-center justify-center py-4 transition-all duration-500"
                  >
                    <Instagram className="h-auto w-4 2xl:w-[18px]" />
                  </a>
                )}
                {youtube && (
                  <a
                    target="_blank"
                    href={youtube}
                    className="hover:bg-primary flex w-full items-center justify-center py-4 transition-all duration-500"
                  >
                    <Youtube className="h-auto w-4 2xl:w-[18px]" />
                  </a>
                )}
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
