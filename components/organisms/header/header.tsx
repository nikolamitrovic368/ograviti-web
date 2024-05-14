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
      <div className="flex justify-between px-8 py-10 xl:px-16 2xl:px-28">
        <Ograviti />
        <IconButton variant="icon" size="tiny" onClick={() => setIsOpen(true)}>
          <Menu />
        </IconButton>
      </div>
      <Drawer open={isOpen} setOpen={setIsOpen} side="top">
        <div className="flex h-screen w-full flex-col justify-between gap-12 overflow-y-auto bg-background px-8 py-10 xl:px-16 2xl:px-28">
          <div className="flex justify-between">
            <Ograviti />
            <IconButton
              variant="icon"
              onClick={() => setIsOpen(false)}
              size="tiny"
            >
              <Close />
            </IconButton>
          </div>

          <div className="flex gap-4 md:hidden">
            <div className="text-2xl font-bold text-white underline">En</div>
            <div className="text-2xl font-normal text-stone-500">Deu</div>
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
          <div className=" hidden h-full flex-col items-center justify-between md:flex">
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
              <div className="text-2xl font-bold text-white underline">En</div>
              <div className="text-2xl font-normal text-stone-500">Deu</div>
            </div>
            <Socials />
          </div>
        </div>
      </Drawer>
    </>
  )
}
