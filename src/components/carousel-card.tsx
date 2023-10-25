import { MouseEvent } from 'react'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

type Card = {
  id: string
  title: string
  date: string
  description: string
}

function CarouselCard ({ card }: { card: Card }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { top, left } = currentTarget.getBoundingClientRect()

    const x = clientX - left
    const y = clientY - top

    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <Link
      onMouseMove={handleMouseMove}
      href={`/blog/${card.id}`}
      className='embla__slide relative grid gap-y-3 group p-1 rounded-[20px]'
    >
      <figure className='overflow-hidden z-10 border border-transparent group-hover:border-entropy-red/20'>
        <video loop className='block h-full w-full object-cover' src='/video1.mp4' autoPlay muted />
      </figure>
      <span className='z-10 font-transducer uppercase text-xs text-entropy-slateGray font-semibold'>
        {new Date(card.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
      </span>
      <h3 className='z-10 font-transducer text-entropy-grayUnit font-semibold'>
        {card.title}
      </h3>
      <p className='z-10'>
        {card.description}
      </p>

      <motion.div
        className='pointer-events-none absolute -inset-px rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgb(199 0 57 / 0.60), transparent 80%)`
        }}
      />
    </Link>
  )
}

export default CarouselCard
