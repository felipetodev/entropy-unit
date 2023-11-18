'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

const opacity = {
  initial: {
    opacity: 0,
    y: 20
  },
  open: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.5 }
  }),
  closed: {
    opacity: 0,
    y: 20
  }
}

type Props = {
  className?: string
  children: React.ReactNode
  once?: boolean
  margin?: string
  delay?: number
}

export function MotionDiv ({ delay = 0, margin, once = false, className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin, once })
  return (
    <motion.div
      ref={ref}
      initial='initial'
      animate={isInView ? 'open' : 'closed'}
      variants={opacity}
      custom={delay}
      className={cn('', className)}
    >
      {children}
    </motion.div>
  )
}
