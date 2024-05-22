'use client'
import { useEffect, useState } from 'react'
import ReactTouchEvents from 'react-touch-events'

import SectionTitle from '@/components/molecules/section-title'
import { cn } from '@/utils/tailwind'

import { steps } from './constants'

export default function Section2() {
  const [step, setStep] = useState(3)
  const [isClickAction, setIsClickAction] = useState(false)
  useEffect(() => {
    const myInterval = setInterval(() => {
      setIsClickAction(false)
      setStep(v => (v + 1) % 4)
    }, 6000)
    return () => {
      clearInterval(myInterval)
    }
  }, [])
  function handleSwipe(direction: any) {
    switch (direction) {
      case 'top':
      case 'bottom':
      case 'left':
      case 'right':
        alert(`you swiped ${direction}`)
    }
  }
  return (
    <div>
      <SectionTitle
        title="Unveiling Ograviti's Journey"
        subtitle="Discover our journey, values, promises, and impactful results—a concise
        exploration of Ograviti's commitment to reshaping the future of
        software solutions."
      />
      <ReactTouchEvents
        onTap={() => console.log('you have taped me')}
        onSwipe={handleSwipe}
      >
        <div className="ml-0 mt-6 flex md:ml-12 2xl:mt-12">
          {steps.map((_step, key) => (
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
                  }}
                >
                  {_step.title}
                </div>
                <div
                  className={cn(
                    'w-0 overflow-hidden transition-all',
                    key === step ? 'w-full md:w-[46vw]' : 'ml-96',
                    isClickAction ? 'duration-700' : 'duration-[3000ms]',
                  )}
                >
                  <div className="w-[calc(100vw-60px)] md:w-[46vw]">
                    {_step.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ReactTouchEvents>
    </div>
  )
}
