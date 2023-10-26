import Link from 'next/link'
import { motion } from 'framer-motion'
import useBackgroundGradient from '@/hooks/use-bg-gradient'

type Card = {
  id: string
  title: string
  date: string
  description: string
}

function CarouselCard ({ card }: { card: Card }) {
  const { backgroundGradient, handleMouseMove } = useBackgroundGradient()
  return (
    <Link
      onMouseMove={handleMouseMove}
      href={`/blog/${card.id}`}
      className='embla__slide group'
    >
      <article className='relative grid gap-y-3 p-1 overflow-hidden rounded-[20px]'>
        <figure className='overflow-hidden z-10 border border-transparent group-hover:border-entropy-red/20'>
          <video playsInline loop className='block h-full w-full object-cover' src='/video1.mp4' autoPlay muted />
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
          className='pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          style={{ background: backgroundGradient }}
        />
      </article>
    </Link>
  )
}

export default CarouselCard
