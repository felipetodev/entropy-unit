'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CarouselCard from './carousel-card'
import BlogButton from './ui/blog-button'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  cards: Array<{
    id: string
    title: string
    date: string
    description: string
  }>
}

function BlogCarousel ({ cards }: Props) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true
  }, [Autoplay()])

  const container = useRef<HTMLDivElement>(null)
  const isInView = useInView(container)

  return (
    <section ref={container} className='mb-24 grid gap-y-10 place-content-center'>
      <div className='embla z-20 overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex gap-x-10 mx-auto [&_figure]:rounded-[20px] [&_figure]:min-w-[16rem] sm:[&_figure]:min-w-[23rem] lg:[&_figure]:min-w-[32rem]'>
          {cards.map((card, i) => (
            <CarouselCard
              key={card.id}
              index={i}
              card={card}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
      <BlogButton />
    </section>
  )
}

export default BlogCarousel
