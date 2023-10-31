'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CarouselCard from './carousel-card'
import BlogButton from './ui/blog-button'

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

  return (
    <section className='mb-24 grid gap-y-10 place-content-center'>
      <div className='embla z-20 overflow-hidden' ref={emblaRef}>
        <div className='embla__container flex gap-x-10 mx-auto [&_figure]:rounded-[20px] [&_figure]:min-w-[16rem] sm:[&_figure]:min-w-[23rem] lg:[&_figure]:min-w-[32rem]'>
          {cards.map((card) => (
            <CarouselCard
              key={card.id}
              card={card}
            />
          ))}
        </div>
      </div>
      <BlogButton />
    </section>
  )
}

export default BlogCarousel
