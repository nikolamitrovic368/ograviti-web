import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import * as React from 'react'

import { cn } from '@/utils/common'

import { Down } from '../icons'

const countrySelectVariants = cva(
  'h-12 md:h-[52px] 2xl:h-16 rounded-full flex justify-center items-center w-20 gap-1.5 hover:bg-secondary-active',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground hover:bg-card-active',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface CountrySelectProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof countrySelectVariants> {
  label?: string
}

const CountrySelect = React.forwardRef<HTMLDivElement, CountrySelectProps>(
  ({ className, variant, label, ...props }, ref) => {
    return (
      <Menu>
        <MenuButton>
          <div className="group flex w-auto flex-col gap-4">
            {label && <div>{label}</div>}
            <div
              className={cn(countrySelectVariants({ variant, className }))}
              ref={ref}
              {...props}
            >
              <Image
                src="https://kapowaz.github.io/square-flags/flags/ae.svg"
                alt="Ograviti Logo"
                className="rounded-full"
                width={34}
                height={34}
                priority
              />
              <Down />
            </div>
          </div>
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom"
            modal={false}
            className="ml-10 mt-1 flex flex-col items-center justify-center rounded-[16px] border border-primary bg-card py-3"
          >
            <MenuItem>
              <button className="flex items-center gap-4 px-3 py-2 transition-colors duration-300 hover:bg-primary">
                <Image
                  src="https://kapowaz.github.io/square-flags/flags/br.svg"
                  alt="Ograviti Logo"
                  className="rounded-full"
                  width={34}
                  height={34}
                  priority
                />
                <div>Brazil (+55)</div>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="flex items-center gap-4 px-3 py-2 transition-colors duration-300 hover:bg-primary">
                <Image
                  src="https://kapowaz.github.io/square-flags/flags/br.svg"
                  alt="Ograviti Logo"
                  className="rounded-full"
                  width={34}
                  height={34}
                  priority
                />
                <div>Brazil (+55)</div>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="flex items-center gap-4 px-3 py-2 transition-colors duration-300 hover:bg-primary">
                <Image
                  src="https://kapowaz.github.io/square-flags/flags/br.svg"
                  alt="Ograviti Logo"
                  className="rounded-full"
                  width={34}
                  height={34}
                  priority
                />
                <div>Brazil (+55)</div>
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    )
  },
)
CountrySelect.displayName = 'CountrySelect'

export { CountrySelect, countrySelectVariants }
