import { MouseEvent } from 'react'
import { useMotionTemplate, useMotionValue } from 'framer-motion'

export default function useBackgroundGradient () {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { top, left } = currentTarget.getBoundingClientRect()

    const x = clientX - left
    const y = clientY - top

    mouseX.set(x)
    mouseY.set(y)
  }
  return {
    backgroundGradient: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgb(199 0 57 / 0.60), transparent 80%)`,
    handleMouseMove
  }
}
