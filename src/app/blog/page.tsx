'use client'

import CarouselCard from '@/components/carousel-card'
import { blogCards } from '@/lib/constants'

export default function Blog () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#121212] from-30% to-100% to-entropy-red px-5 sm:px-10 pb-[100px] pt-[170px]'>
      <h1 className='font-transducer text-xl sm:text-2xl md:text-4xl font-semibold mb-14 text-center'>
        Entropy Unit Dev Blog
      </h1>
      <div className='grid gap-0 sm:gap-[30px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {blogCards.map((card, i) => (
          <CarouselCard
            key={card.id}
            index={i}
            card={card}
            isInView
            isBlog // remove
          />
        ))}
      </div>
    </div>
  )
}
