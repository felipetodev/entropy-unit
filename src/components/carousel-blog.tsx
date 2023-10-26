'use client'

import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CarouselCard from './carousel-card'

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
    <section className='my-24 grid gap-y-10 place-content-center px-5 sm:px-10'>
      <div className='embla z-20 overflow-hidden' ref={emblaRef}>
        <div className='embla__container container flex gap-x-10 mx-auto [&_figure]:rounded-[20px] [&_figure]:h-[262px] lg:[&_figure]:h-[350px] [&_figure]:min-w-[16rem] sm:[&_figure]:min-w-[23rem] lg:[&_figure]:min-w-[32rem]'>
          {cards.map((card) => (
            <CarouselCard
              key={card.id}
              card={card}
            />
          ))}
        </div>
      </div>
      <Link href='/blog' className='ml-auto flex items-center font-transducer font-semibold'>
        IR AL DEV BLOG
        <svg className='ml-2' width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path id='eu-arrow' d='M13 6.40013L8.0867 12.599H3.14069L6.5104 8.34759H0.678101V4.45268H6.5104L3.14069 0.198242H8.0867L13 6.40013Z' fill='#C70039' />
        </svg>
      </Link>
    </section>
  )
}

export default BlogCarousel
