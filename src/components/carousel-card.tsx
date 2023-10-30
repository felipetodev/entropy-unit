import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Card = {
  id: string
  title: string
  date: string
  description: string
}

function CarouselCard ({ card }: { card: Card }) {
  // find a better way to handle this
  const [parentHover, setParentHover] = useState(false)
  return (
    <Link
      href={`/blog/${card.id}`}
      className='embla__slide'
      onMouseOver={() => setParentHover(true)}
      onMouseLeave={() => setParentHover(false)}
    >
      <article className='grid gap-y-3 p-1'>
        <figure className='flex items-end overflow-hidden z-10 h-[362px] lg:h-[450px]'>
          <motion.video
            loop
            muted
            autoPlay
            playsInline
            animate={{ height: parentHover ? '100%' : '' }}
            className='block h-[262px] lg:h-[350px] w-full object-cover rounded-[20px]'
            src='/video1.mp4'
          />
        </figure>
        <span className='z-10 font-transducer uppercase text-xs text-entropy-slateGray font-semibold'>
          {new Date(card.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
        </span>
        <h3 className='z-10 font-transducer text-entropy-grayUnit font-semibold'>
          {card.title}
        </h3>
        <p className='z-10'>
          {card.description}
        </p>
      </article>
    </Link>
  )
}

export default CarouselCard
