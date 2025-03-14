import { ReactNode } from 'react'

import { cn } from '@/utils/common'

const openClassNames = {
  right: 'translate-x-0',
  left: 'translate-x-0',
  top: 'translate-y-0',
  bottom: 'translate-y-0',
}

const closeClassNames = {
  right: 'translate-x-full',
  left: '-translate-x-full',
  top: '-translate-y-full',
  bottom: 'translate-y-full',
}

const classNames = {
  right: 'inset-y-0 right-0',
  left: 'inset-y-0 left-0',
  top: 'inset-x-0 top-0',
  bottom: 'inset-x-0 bottom-0',
}

type DrawerProps = {
  open: boolean
  side?: 'right' | 'left' | 'top' | 'bottom'
  children: ReactNode
}

const Drawer = ({ open, side = 'right', children }: DrawerProps) => {
  return (
    <div
      id={`dialog-${side}`}
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          'bg-opacity-75 fixed inset-0 bg-gray-500 transition-all',
          {
            'visible opacity-100 duration-500 ease-in-out': open,
          },
          { 'invisible opacity-0 duration-500 ease-in-out': !open },
        )}
      ></div>
      <div className={cn({ 'fixed inset-0 overflow-hidden': open })}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              'pointer-events-none fixed max-w-full',
              classNames[side],
            )}
          >
            <div
              className={cn(
                'pointer-events-auto relative h-screen w-full transform transition duration-500 ease-in-out',
                { [closeClassNames[side]]: !open },
                { [openClassNames[side]]: open },
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
