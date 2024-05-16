'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Fragment, ReactNode } from 'react'

import { cn } from '@/utils/tailwind'

export default function LogoBackground({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative -mx-8 flex h-[501px] items-center justify-end overflow-hidden md:h-[958px] xl:-mx-16 2xl:-mx-28',
        className,
      )}
    >
      <div className="absolute left-0 top-0 -z-10 -mt-28 w-[2000px] bg-[#232361]">
        <div className="pointer-events-none flex  scale-[.6] opacity-25 max-md:-translate-x-1/3 max-md:-translate-y-1/2 md:scale-100">
          {[...new Array(9)].map((_v, key) =>
            key % 2 ? (
              <motion.div
                className="flex flex-col items-center"
                key={key}
                animate={{
                  y: [0, 103, 103, 0],
                }}
                transition={{
                  duration: 1.7,
                  ease: 'easeInOut',
                  times: [0, 0.33, 0.66, 1],
                  repeat: Infinity,
                  repeatDelay: 0.33,
                }}
              >
                {[...new Array(7)].map((_v, key) => (
                  <Fragment key={key}>
                    <Image
                      src="/images/bgs/o.svg"
                      className="-mt-[55px]"
                      alt="O Logo"
                      width={187}
                      height={187}
                      priority
                    />
                    <Image
                      src="/images/bgs/a.svg"
                      className=""
                      alt="O Logo"
                      width={272}
                      height={272}
                      priority
                    />
                    {[1, 2, 3].map(v => (
                      <Image
                        key={v}
                        src="/images/bgs/a.svg"
                        className="-mt-[171px]"
                        alt="O Logo"
                        width={272}
                        height={272}
                        priority
                      />
                    ))}
                  </Fragment>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="-mx-[52px] -mt-[31px] flex flex-col items-center"
                key={key}
                animate={{
                  y: [0, -100, -100, 0],
                }}
                transition={{
                  duration: 1.7,
                  ease: 'easeInOut',
                  times: [0, 0.33, 0.66, 1],
                  repeat: Infinity,
                  repeatDelay: 0.33,
                }}
              >
                {[...new Array(50)].map((_v, key) => (
                  <Image
                    key={key}
                    src="/images/bgs/a.svg"
                    className="-mt-[171px] rotate-180"
                    alt="O Logo"
                    width={272}
                    height={272}
                    priority
                  />
                ))}
              </motion.div>
            ),
          )}
        </div>
      </div>
      {children}
    </div>
  )
}
