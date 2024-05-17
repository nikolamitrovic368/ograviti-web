'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Image from 'next/image'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { IconButton } from '@/components/atoms/icon-button'
import { Left, Right } from '@/components/atoms/icons'
import { cn } from '@/utils/tailwind'

import { steps } from './constants'

export default function Section1() {
  const [step, setStep] = useState(0)
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-between md:h-screen md:flex-row">
        <div className="absolute -top-[104px] left-0 -z-10 -mx-8 h-full w-screen overflow-hidden xl:-mx-16 2xl:-mx-28">
          <svg className="hidden">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="h-full w-full [filter:url(#goo)_blur(60px)]">
            <div className="absolute left-[10%] top-[10%] h-4/5 w-4/5 origin-center animate-[moveVertical_30s_ease_infinite] opacity-60 mix-blend-hard-light [background:radial-gradient(circle_at_center,rgba(30,30,30,0.8)_0,rgba(30,30,30,0)_50%)_no-repeat]"></div>
            <div className="absolute left-[10%] top-[10%] h-4/5 w-4/5 origin-[calc(50%-600px)] animate-[moveInCircle_50s_reverse_infinite] opacity-30 mix-blend-hard-light [background:radial-gradient(circle_at_center,rgba(80,80,255,0.8)_0,rgba(80,80,255,0)_50%)_no-repeat]"></div>
            <div className="absolute left-[10%-500px] top-[10%+200px] h-4/5 w-4/5 origin-[calc(50%+1200px)] animate-[moveInCircle_40s_reverse_infinite] opacity-30 mix-blend-hard-light [background:radial-gradient(circle_at_center,rgba(30,30,30,0.8)_0,rgba(30,30,30,0)_50%)_no-repeat]"></div>
            <div className="absolute left-[10%] top-[10%] h-4/5 w-4/5 origin-[calc(50%-200px)] animate-[moveHorizontal_40s_ease_infinite] opacity-30 mix-blend-hard-light [background:radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,rgba(255,255,255,0)_50%)_no-repeat]"></div>
            <div className="absolute left-[10%] top-[10%] h-[160%] w-[160%] origin-[calc(50%-300px)_calc(50%+500px)] animate-[moveInCircle_20s_reverse_infinite] opacity-10 mix-blend-hard-light [background:radial-gradient(circle_at_center,rgba(80,80,255,0.8)_0,rgba(80,80,255,0)_50%)_no-repeat]"></div>
          </div>
        </div>
        <Carousel
          className="left-0 top-5 w-full pb-14 pt-6 md:absolute"
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
              <div className="pb-4 text-left text-4xl font-bold text-primary md:text-4xl lg:text-5xl">
                {step.title}
              </div>
              {step.subtitles.map((subtitle, key) => (
                <div
                  className={`py-1 text-left md:text-xl lg:text-2xl step-${key}`}
                  key={key}
                >
                  {subtitle}
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        <div className="hidden md:block">
          <IconButton onClick={() => setStep(step - 1)} disabled={!step}>
            <Left />
          </IconButton>
        </div>

        <div className="relative h-[calc(100vw-64px)] max-h-[700px] w-[calc(100vw-64px)] max-w-[700px] md:mx-8 md:h-[calc(100vh-80px)] md:w-[calc(100vh-80px)]">
          <Image
            className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2"
            src="/images/main/subtract-2.svg"
            alt="subtract-2"
            width={896}
            height={896}
          />
          <Image
            className="absolute left-1/2 top-1/2 h-[80.5%] w-[80.5%] -translate-x-1/2 -translate-y-1/2"
            src="/images/main/subtract-1.svg"
            alt="subtract-1"
            width={780}
            height={780}
          />
          {steps.map((_, key) => (
            <Image
              className={cn(
                'absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity',
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
            className={cn(
              'point absolute left-1/2 top-1/2 h-[92.5%] w-[92.5%] !translate-x-[-50%] !translate-y-[-50%] transition-all duration-300',
              {
                'rotate-0': step === 0,
                'rotate-[41deg]': step === 1,
                'rotate-[95deg]': step === 2,
                'rotate-[148deg]': step === 3,
                'rotate-[188deg]': step === 4,
              },
            )}
            src="/images/main/point.svg"
            alt="point"
            width={940}
            height={940}
          />
          <div className="md:hidden">
            {steps.map((_step, key) => (
              <Image
                key={_step.title}
                className={cn(
                  'absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2',
                  key === step ? 'opacity-90' : 'opacity-25',
                )}
                src={`/images/main/step${key + 1}-mobile.svg`}
                alt={_step.title}
                width={940}
                height={940}
              />
            ))}
          </div>
          <div className="hidden md:block">
            {steps.map((_step, key) => (
              <Image
                key={_step.title}
                className={cn(
                  'absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2',
                  key === step ? 'opacity-90' : 'opacity-25',
                )}
                src={`/images/main/step${key + 1}-mobile.svg`}
                alt={_step.title}
                width={940}
                height={940}
              />
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <IconButton onClick={() => setStep(step === 4 ? 0 : step + 1)}>
            <Right />
          </IconButton>
        </div>
        <div className="flex md:hidden">
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
      </div>
    </>
  )
}
