import Image from 'next/image'

export default function Socials() {
  return (
    <div className="flex w-60 gap-7 py-4">
      <a
        href="https://linkedin.com"
        target="_blank"
        className="transition-opacity duration-300 hover:opacity-60"
      >
        <Image
          src="/images/logos/linkedin.svg"
          width={45}
          height={45}
          alt="linkedin"
        />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="transition-opacity duration-300 hover:opacity-60"
      >
        <Image
          src="/images/logos/facebook.svg"
          width={45}
          height={45}
          alt="facebook"
        />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="transition-opacity duration-300 hover:opacity-60"
      >
        <Image
          src="/images/logos/instagram.svg"
          width={45}
          height={45}
          alt="instagram"
        />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="transition-opacity duration-300 hover:opacity-60"
      >
        <Image
          src="/images/logos/youtube.svg"
          width={45}
          height={45}
          alt="youtube"
        />
      </a>
    </div>
  )
}
