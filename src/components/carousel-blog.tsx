'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CarouselCard from './carousel-card'
import BlogButton from './ui/blog-button'

function BlogCarousel ({ posts }: any) {
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
          {posts.map((post: any, i: number) => (
            <CarouselCard
              isBlog
              key={post.slug}
              index={i}
              post={post}
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
