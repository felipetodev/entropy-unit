import { animate, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function useNumberAnimation () {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-150px', once: true })
  const count = useMotionValue(new Date('01/01/2023').getTime())
  const rounded = useTransform(count, (value) => {
    return new Date(Math.round(value))
      .toLocaleDateString('en-US')
      .split('/')
      .map((n) => n.padStart(2, '0'))
      .join('.')
  })

  useEffect(() => {
    if (!isInView) return
    const animation = animate(count, new Date('11/13/2023').getTime(), { duration: 0.75 })

    return animation.stop
  }, [isInView])

  return {
    ref,
    rounded
  }
}
