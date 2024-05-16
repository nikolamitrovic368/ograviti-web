'use client'
import { useEffect, useState } from 'react'

import { cn } from '@/utils/tailwind'

import { steps } from './constants'

export default function Section2() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const myInterval = setInterval(() => {
      setStep(v => (v + 1) % 4)
    }, 6000)
    return () => {
      clearInterval(myInterval)
    }
  }, [])

  return (
    <div>
      <div className="pb-4 text-left text-5xl font-bold text-primary">
        Unveiling Ograviti&apos;s Journey
      </div>
      <div className="w-2/3 py-1 text-left text-2xl">
        Discover our journey, values, promises, and impactful results—a concise
        exploration of Ograviti&apos;s commitment to reshaping the future of
        software solutions.
      </div>
      <div className="ml-24 mt-16 flex">
        {steps.map((_step, key) => (
          <div
            className={cn(
              'w-1/6 overflow-hidden border-l pr-36 transition-all duration-700',
              { 'w-2/3': key === step },
            )}
            key={key}
          >
            <div className="mr-36">
              <div
                className={cn(
                  'h-52 rotate-180 cursor-pointer px-4 text-right text-2xl [writing-mode:vertical-lr] ',
                  key === step ? 'text-action-active' : 'text-action',
                )}
                onClick={() => setStep(key)}
              >
                {_step.title}
              </div>
              <div
                className={cn(
                  'w-0 overflow-hidden transition-all duration-700',
                  key === step ? 'w-[34vw]' : 'ml-96',
                )}
              >
                <div className="w-[34vw]">{_step.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
