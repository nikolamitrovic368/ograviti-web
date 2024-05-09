'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { steps } from './constants'
import { Left, Right } from '@/components/atoms/icons'
import { cn } from '@/utils/tailwind'
import { Carousel } from 'react-responsive-carousel'
import { IconButton } from '@/components/atoms/icon-button'

export default function Section1() {
  const container = useRef(null)
  const { contextSafe } = useGSAP({ scope: container })
  const [step, setStep] = useState(0)
  useEffect(() => {
    contextSafe(() => {
      gsap.to('.point', { rotate: steps[step].deg })
      gsap.to('.description', { transition: 50 })
    })()
  }, [contextSafe, step])

  return (
    <div className="flex justify-between items-center pt-20 relative">
      <Carousel
        className="absolute left-0 top-20 w-96"
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows={false}
        autoPlay={false}
        autoFocus={false}
        dynamicHeight={false}
        showThumbs={false}
        selectedItem={step}
        axis="vertical"
      >
        {steps.map(step => (
          <div key={step.title}>
            <div className="text-5xl text-primary font-bold pb-4 text-left">
              {step.title}
            </div>
            {step.subtitles.map((subtitle, key) => (
              <div className={`text-2xl py-1 text-left step-${key}`} key={key}>
                {subtitle}
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      <IconButton onClick={() => setStep(step - 1)} disabled={!step}>
        <Left />
      </IconButton>
      <div className="relative h-[940px] w-[940px]" ref={container}>
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/images/main/subtract-1.svg"
          alt="subtract-1"
          width={780}
          height={780}
        />
        {steps.map((_, key) => (
          <Image
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[718px] h-[718px] opacity-0 transition-opacity',
              key <= step && 'opacity-100',
            )}
            key={key}
            src={`/images/main/circle${key + 1}.svg`}
            alt={`circle${key + 1}`}
            width={718}
            height={718}
          />
        ))}
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/images/main/subtract-2.svg"
          alt="subtract-2"
          width={896}
          height={896}
        />
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 point"
          src="/images/main/point.svg"
          alt="point"
          width={940}
          height={940}
        />
        {steps.map((_step, key) => (
          <Image
            key={_step.title}
            className={cn(
              'absolute',
              key === step ? 'opacity-90' : 'opacity-25',
              _step.className,
            )}
            src={`/images/main/${_step.image}.svg`}
            alt={_step.title}
            width={_step.width}
            height={_step.height}
          />
        ))}
      </div>
      <IconButton onClick={() => setStep(step === 4 ? 0 : step + 1)}>
        <Right />
      </IconButton>
    </div>
  )
}
