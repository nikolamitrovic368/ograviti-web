import CardSwiper from '@/components/atoms/card-swiper'
import { Typography } from '@/components/atoms/typography'
import ProfileCard from '@/components/molecules/profile-card'
import { PageQueryResult } from '@/sanity.types'
import { cn } from '@/utils/common'

export default function Team({
  title,
  subtitle,
  members,
}: NonNullable<
  Extract<
    NonNullable<NonNullable<PageQueryResult>['modules']>[number],
    { _type: 'team' }
  >
>) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-14">
      <div className="w-full md:w-4/5">
        <Typography variant="h2" className="pb-4 text-center md:pb-8">
          {title}
        </Typography>
        <Typography variant="subtitle2" className="text-center">
          {subtitle}
        </Typography>
      </div>
      {members?.length && (
        <>
          <div className="w-full sm:hidden">
            <CardSwiper
              cards={members.map(team => (
                <ProfileCard data={team} key={team._id} />
              ))}
            />
          </div>
          <div className="hidden w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid lg:mt-24 lg:grid-cols-4 2xl:mt-48 2xl:gap-x-8 2xl:gap-y-12">
            {members.map((team, key) => (
              <ProfileCard
                data={team}
                key={team._id}
                className={
                  // key % 2 ? 'xl:mb-14 2xl:mb-48' : 'xl:mt-14 2xl:mt-48'
                  cn(key % 2 || 'lg:-mt-24 2xl:-mt-48')
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
