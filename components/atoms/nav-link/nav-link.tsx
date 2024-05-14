import { motion, useAnimate } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

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
      <div className="h-20 w-full overflow-hidden">
        <motion.div
          whileHover={{ y: -160 }}
          className="flex flex-col"
          transition={{ duration: 0.7 }}
        >
          <Link
            href={url}
            className="py-4 text-2xl font-bold md:text-5xl"
            onClick={onClick}
          >
            {title}
          </Link>
          <Link
            href={url}
            className="py-4 text-2xl font-bold md:text-5xl"
            onClick={onClick}
          >
            {title}
          </Link>
          <Link
            href={url}
            className="py-4 text-2xl font-bold md:text-5xl"
            onClick={onClick}
          >
            {title}
          </Link>
        </motion.div>
      </div>
      <motion.hr
        className="w-full"
        initial={{ opacity: 0, x: '-100%' }}
        transition={{ duration: 0.01 }}
      />
    </div>
  )
}
