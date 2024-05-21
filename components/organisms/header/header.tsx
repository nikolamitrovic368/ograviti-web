'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import Drawer from '@/components/atoms/drawer'
import { IconButton } from '@/components/atoms/icon-button'
import { Menu, Ograviti } from '@/components/atoms/icons'
import Close from '@/components/atoms/icons/close'
import NavLink from '@/components/atoms/nav-link'
import Socials from '@/components/molecules/socials/socials'
import navigationConfig from '@/constants/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = isOpen
      ? 'hidden'
      : 'auto'

    return () => {
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <div className="relative z-10 flex justify-between border-neutral-700 px-8 py-10 max-md:mb-8 max-md:border-b md:mb-14 xl:px-16 2xl:px-28">
        <Link href="/">
          <Ograviti className="h-5 w-32 sm:h-6 sm:w-36" />
        </Link>
        <IconButton variant="icon" size="tiny" onClick={() => setIsOpen(true)}>
          <Menu className="h-auto w-5 md:w-auto" />
        </IconButton>
      </div>
      <Drawer open={isOpen} side="top">
        <div className="flex h-screen w-full flex-col justify-between gap-4 overflow-y-auto bg-background px-8 py-10 xl:px-16 2xl:gap-12 2xl:px-28">
          <div className="flex justify-between">
            <Link href="/">
              <Ograviti className="h-5 w-32 sm:h-6 sm:w-36" />
            </Link>
            <IconButton
              variant="icon"
              onClick={() => setIsOpen(false)}
              size="tiny"
            >
              <Close />
            </IconButton>
          </div>

          <div className="flex gap-4 md:hidden">
            <div className="cursor-pointer text-2xl font-bold text-white underline duration-300 hover:text-primary">
              En
            </div>
            <div className="cursor-default text-2xl font-normal text-stone-500">
              Deu
            </div>
          </div>
          <div className="flex h-full flex-col items-center gap-8 md:hidden">
            {navigationConfig.map((nav, key) => (
              <Link
                href={nav.url}
                key={key}
                className="text-2xl font-bold md:text-5xl"
                onClick={() => setIsOpen(false)}
              >
                {nav.title}
              </Link>
            ))}
          </div>
          <div className="hidden h-full flex-col items-center justify-between md:flex">
            <div className="flex h-full flex-col items-center justify-between text-center md:w-auto">
              {navigationConfig.map((nav, key) => (
                <NavLink
                  key={key}
                  title={nav.title}
                  url={nav.url}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-between">
            <div className="hidden gap-4 md:flex">
              <div className="cursor-pointer text-2xl font-bold text-white underline duration-300 hover:text-primary">
                En
              </div>
              <div className="cursor-default text-2xl font-normal text-stone-500">
                Deu
              </div>
            </div>
            <Socials />
          </div>
        </div>
      </Drawer>
    </>
  )
}
