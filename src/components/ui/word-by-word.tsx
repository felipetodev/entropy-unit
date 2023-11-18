'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

const slideUp = {
  initial: {
    y: '100%'
  },
  open: (i: number) => ({
    y: 0,
    transition: { duration: 0.5, delay: 0.01 * i }
  }),
  closed: {
    y: '100%'
  }
}

type Props = {
  className: string
  children: string
  spanStyles?: string
}

export function WordByWord ({ className, children, spanStyles }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref)

  return (
    <p ref={ref} className={cn('', className)}>
      {children.split(' ').map((word, i) => (
        <span key={i} className={cn('inline-flex overflow-hidden relative', spanStyles)}>
          <motion.span
            className=''
            initial='initial'
            animate={isInView ? 'open' : 'closed'}
            variants={slideUp}
            custom={i}
          >
            {word}{' '}
          </motion.span>
        </span>
      ))}
    </p>
  )
}
