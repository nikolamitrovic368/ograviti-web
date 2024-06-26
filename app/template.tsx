'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={{
        opacity: 1,
        transform: 'translateY(0)',
      }}
      exit={{ opacity: 0, transform: 'translateY(-20px)' }}
      transition={{ ease: 'easeInOut', duration: 0.95, delay: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
