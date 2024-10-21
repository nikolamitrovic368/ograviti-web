export default function Video({
  url,
  type,
}: Partial<{
  type: Sanity.VideoType
  url: string
}>) {
  return (
    <div className="">
      {type === 'youtube' ? (
        <div className="relative h-0 w-full overflow-hidden rounded-[45px] pb-[56.25%]">
          <iframe
            src={url}
            allowFullScreen
            className="absolute left-0 top-0 h-full w-full border-0"
          />
        </div>
      ) : (
        <video controls className="w-full rounded-[45px]">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
