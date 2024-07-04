'use client'
import { useEffect, useRef, useState } from 'react'
import { defineSwipe, Swipeable } from 'react-touch'

import JourneyStep from '@/components/molecules/journey-step'
import SectionTitle from '@/components/molecules/section-title'
import { Journey } from '@/sanity/queries/pages/home.query'
import { cn } from '@/utils/common'

export default function Section2({ data }: { data: Journey }) {
  const interval = useRef<any>()
  const [step, setStep] = useState(2)
  const [isClickAction, setIsClickAction] = useState(false)
  function autoNextStep() {
    setIsClickAction(false)
    setStep(v => (v + 1) % 4)
  }
  useEffect(() => {
    interval.current = setInterval(autoNextStep, 10000)
    return () => {
      clearInterval(interval.current)
    }
  }, [])
  function restartInterval() {
    clearInterval(interval.current)
    interval.current = setInterval(autoNextStep, 10000)
  }
  return (
    <div>
      <SectionTitle
        title={data.title}
        subtitle={data.subtitle}
        className="text-center md:text-left"
      />
      {/* @ts-ignore */}
      <Swipeable
        config={defineSwipe({ swipeDistance: 50 })}
        onSwipeRight={() => {
          setStep(step === 0 ? 3 : step - 1)
          restartInterval()
        }}
        onSwipeLeft={() => {
          setStep(step === 3 ? 0 : step + 1)
          restartInterval()
        }}
      >
        <div className="ml-0 mt-6 flex md:ml-28 2xl:mt-12">
          {[data.step1, data.step2, data.step3, data.step4].map(
            (_step, key) => (
              <div
                className={cn(
                  'w-0 overflow-hidden border-stone-500 pr-0 transition-all md:w-1/6 md:border-l md:pr-12',
                  isClickAction ? 'duration-700' : 'duration-[3000ms]',
                  key === step && 'w-screen border-l border-zinc-100 md:w-2/3',
                )}
                key={key}
              >
                <div className="md:mr-12">
                  <div
                    className={cn(
                      'h-32 rotate-180 cursor-pointer px-4 text-right text-lg transition-all [writing-mode:vertical-lr] 2xl:h-36 2xl:h-44 2xl:text-2xl ',
                      key === step ? 'text-action-active' : 'text-action',
                    )}
                    onClick={() => {
                      setIsClickAction(true)
                      setStep(key)
                      restartInterval()
                    }}
                  >
                    {_step.name}
                  </div>
                  <div
                    className={cn(
                      'w-0 overflow-hidden transition-all',
                      key === step ? 'w-full md:w-[46vw]' : 'ml-96',
                      isClickAction ? 'duration-700' : 'duration-[3000ms]',
                    )}
                  >
                    <div className="w-[calc(100vw-60px)] pb-8 md:w-[46vw] md:pb-0">
                      <JourneyStep data={_step} />
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </Swipeable>
      <div className="flex justify-center gap-3 pt-10 md:hidden">
        {[...new Array(4)].map((_step, key) => (
          <div
            key={key}
            className={cn(
              'h-1.5 w-7 rounded-3xl transition-all duration-700',
              step === key ? 'w-7 bg-zinc-300' : 'w-4 bg-neutral-800',
            )}
          />
        ))}
      </div>
    </div>
  )
}
