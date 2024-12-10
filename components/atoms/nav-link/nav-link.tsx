import { motion, useAnimate } from 'framer-motion'
import React from 'react'

import useMedia from '@/hooks/useMedia'
import { Link } from '@/i18n/routing'

export default function NavLink({
  url,
  title,
  onClick,
}: {
  url: string
  title: string
  onClick?: () => void
}) {
  const [scope, animate] = useAnimate()
  const { is2xl, isMd } = useMedia()
  return (
    <div
      className="w-full overflow-hidden"
      ref={scope}
      onMouseEnter={() =>
        animate('hr', { opacity: 1, x: 0 }, { duration: 0.7 })
      }
      onMouseLeave={() =>
        animate('hr', { opacity: 0, x: '-100%' }, { duration: 0.7 })
      }
    >
      <div className="h-16 w-full overflow-hidden md:h-14 2xl:h-20">
        <motion.div
          whileHover={{ y: isMd ? (is2xl ? -160 : -104) : 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col">
            {[...new Array(3)].map((_v, key) => (
              <Link
                key={key}
                href={url}
                className="py-4 text-2xl font-bold md:py-2 md:text-3xl xl:text-3xl 2xl:py-4 2xl:text-5xl"
                onClick={onClick}
              >
                {title}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      {isMd && (
        <motion.hr
          initial={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 0.01 }}
        />
      )}
    </div>
  )
}
