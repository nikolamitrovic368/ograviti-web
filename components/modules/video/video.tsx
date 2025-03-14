import { PageQueryResult } from '@/sanity.types'

export default function Video({
  url,
  type,
}: NonNullable<
  Extract<
    NonNullable<NonNullable<PageQueryResult>['modules']>[number],
    { _type: 'video' }
  >
>) {
  return (
    <div>
      {url ? (
        type === 'youtube' ? (
          <div className="relative h-0 w-full overflow-hidden rounded-[45px] pb-[56.25%]">
            <iframe
              src={url}
              allowFullScreen
              className="absolute top-0 left-0 h-full w-full border-0"
            />
          </div>
        ) : (
          <video controls className="w-full rounded-[45px]">
            <source
              src={url}
              type="video/mp4"
              // eslint-disable-next-line react/jsx-no-literals
            />
            Your browser does not support the video tag.
          </video>
        )
      ) : null}
    </div>
  )
}
