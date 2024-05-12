'use client'
import { useEffect, useState } from 'react'

import { cn } from '@/utils/tailwind'

import { steps } from './constants'

export default function Section2() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const myInterval = setInterval(() => {
      setStep(v => {
        console.log(v)
        return (v + 1) % 4
      })
    }, 6000)
    return () => {
      clearInterval(myInterval)
    }
  }, [])

  return (
    <div>
      <div className="text-5xl text-primary font-bold pb-4 text-left">
        Unveiling Ograviti&apos;s Journey
      </div>
      <div className="text-2xl py-1 text-left w-2/3">
        Discover our journey, values, promises, and impactful results—a concise
        exploration of Ograviti&apos;s commitment to reshaping the future of
        software solutions.
      </div>
      <div className="flex mt-16 ml-24">
        {steps.map((_step, key) => (
          <div
            className={cn(
              'border-l overflow-hidden w-1/6 pr-36 transition-all duration-700',
              key === step && 'w-2/3',
            )}
            key={key}
          >
            <div className="mr-36">
              <div
                className={cn(
                  '[writing-mode:vertical-lr] cursor-pointer rotate-180 text-2xl text-right h-52 px-4 ',
                  key === step ? 'text-action-active' : 'text-action',
                )}
                onClick={() => setStep(key)}
              >
                {_step.title}
              </div>
              <div
                className={cn(
                  'w-0 transition-all overflow-hidden duration-700',
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
