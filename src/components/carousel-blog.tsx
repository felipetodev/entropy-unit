'use client'

import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CarouselCard from './carousel-card'
import { EntropyArrow } from './ui/icons'

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
      <Link href='/blog' className='ml-auto flex items-center font-transducer font-semibold px-5 sm:px-10'>
        IR AL DEV BLOG
        <EntropyArrow className='ml-5 text-entropy-red w-[13px] h-[13px]' />
      </Link>
    </section>
  )
}

export default BlogCarousel
