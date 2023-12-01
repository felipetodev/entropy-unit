import { useState } from 'react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

type Card = {
  id: string
  title: string
  date: string
  description: string
}

const Link = motion(NextLink)

const variants = {
  initial: (i: number) => ({
    opacity: 0 * i,
    y: 10 * i
  }),
  open: {
    opacity: 1,
    y: 0
  }
}

function CarouselCard ({ card, index, isInView }: { card: Card, index: number, isInView: boolean }) {
  // find a better way to handle this
  const [parentHover, setParentHover] = useState(false)
  return (
    <Link
      variants={variants}
      initial='initial'
      animate={isInView ? 'open' : 'closed'}
      custom={index}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      href='/blog'
      className='embla__slide'
      onMouseOver={() => setParentHover(true)}
      onMouseLeave={() => setParentHover(false)}
    >
      <article className='grid gap-y-3 p-1'>
        <figure className='relative flex items-end overflow-hidden z-10 h-[342px] lg:h-[430px]'>
          <motion.video
            loop
            muted
            autoPlay
            playsInline
            animate={{ height: parentHover ? '100%' : '' }}
            className='block h-[262px] lg:h-[350px] w-full object-cover rounded-[20px] z-10'
            src='/video1.mp4'
          />
          <div className='absolute w-full h-[262px] lg:h-[350px] rounded-[20px] bg-entropy-red/10' />
        </figure>
        {/* <span className='z-10 font-transducer uppercase text-xs text-entropy-slateGray font-semibold'>
          {new Date(card.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
        </span>
        <h3 className='z-10 font-transducer text-entropy-grayUnit font-semibold'>
          {card.title}
        </h3>
        <p className='z-10'>
          {card.description}
        </p> */}
      </article>
    </Link>
  )
}

export default CarouselCard
