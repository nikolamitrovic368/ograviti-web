'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { IconButton } from '@/components/atoms/icon-button'
import { Left, Right } from '@/components/atoms/icons'
import useMedia from '@/hooks/useMedia'
import { cn } from '@/utils/tailwind'

import { steps } from './constants'

export default function Section1() {
  const container = useRef(null)
  const { contextSafe } = useGSAP({ scope: container })
  const [step, setStep] = useState(0)
  const { isMd } = useMedia()
  useEffect(() => {
    contextSafe(() => {
      gsap.to('.point', { rotate: steps[step].deg })
      gsap.to('.description', { transition: 50 })
    })()
  }, [contextSafe, step])

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 relative w-full">
      <Carousel
        className="md:absolute left-0 top-5 w-full pt-6 pb-14"
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
            <div className="text-4xl md:text-5xl text-primary font-bold pb-4 text-left">
              {step.title}
            </div>
            {step.subtitles.map((subtitle, key) => (
              <div
                className={`md:text-2xl py-1 text-left step-${key}`}
                key={key}
              >
                {subtitle}
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      {isMd && (
        <div>
          <IconButton onClick={() => setStep(step - 1)} disabled={!step}>
            <Left />
          </IconButton>
        </div>
      )}

      <div
        className="relative h-[calc(100vw-64px)] md:h-[calc(100vw-112px)] w-[calc(100vw-64px)] md:w-[calc(100vw-112px)] max-h-[700px] max-w-[700px] md:mx-8"
        ref={container}
      >
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[88%] w-[88%]"
          src="/images/main/subtract-2.svg"
          alt="subtract-2"
          width={896}
          height={896}
        />
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80.5%] w-[80.5%]"
          src="/images/main/subtract-1.svg"
          alt="subtract-1"
          width={780}
          height={780}
        />
        {steps.map((_, key) => (
          <Image
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] w-[70%] opacity-0 transition-opacity',
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
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[92.5%] w-[92.5%] point"
          src="/images/main/point.svg"
          alt="point"
          width={940}
          height={940}
        />
        {steps.map((_step, key) => (
          <Image
            key={_step.title}
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full',
              key === step ? 'opacity-90' : 'opacity-25',
            )}
            src={`/images/main/step${key + 1}${isMd ? '' : '-mobile'}.svg`}
            alt={_step.title}
            width={940}
            height={940}
          />
        ))}
      </div>
      {isMd ? (
        <div>
          <IconButton onClick={() => setStep(step === 4 ? 0 : step + 1)}>
            <Right />
          </IconButton>
        </div>
      ) : (
        <div className="flex">
          <div className="mr-12">
            <IconButton onClick={() => setStep(step - 1)} disabled={!step}>
              <Left />
            </IconButton>
          </div>
          <div>
            <IconButton onClick={() => setStep(step === 4 ? 0 : step + 1)}>
              <Right />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  )
}
