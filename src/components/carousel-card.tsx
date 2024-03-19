'use client'

import NextLink from 'next/link'
import { motion } from 'framer-motion'

type Post = {
  slug: string
  articleTitle: string
  articleDescription: string
  authorName: string
  authorJob: string
  date: string
  articlePreview: {
    title: string
    url: string
    type: string
  }
  createdAt: string
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

function CarouselCard ({ isBlog, post, index, isInView }: { isBlog?: boolean, post: Post, index: number, isInView: boolean }) {
  return (
    <Link
      variants={variants}
      initial='initial'
      animate={isInView ? 'open' : 'closed'}
      custom={index}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      href={isBlog ? `/blog/${post.slug}` : '/blog'}
      className='embla__slide'
    >
      <article className='grid gap-y-3 p-1'>
        <figure className='relative flex items-end overflow-hidden z-10 h-[342px] lg:h-[430px]'>
          {post.articlePreview.type.includes('image')
            ? (
              <img
                className='block h-[262px] lg:h-[350px] w-full object-cover rounded-[20px] z-10 hover:h-[100%] transition-all duration-300 ease-in-out'
                src={post.articlePreview.url}
                alt={post.articlePreview.title}
              />
              )
            : (
              <video
                loop
                muted
                autoPlay
                playsInline
                className='block h-[262px] lg:h-[350px] w-full object-cover rounded-[20px] z-10 hover:h-[100%] transition-all duration-300 ease-in-out'
                src={post.articlePreview.url}
              />
              )}
          <div className='absolute w-full h-[262px] lg:h-[350px] rounded-[20px] bg-entropy-red/10' />
        </figure>
        {isBlog && (
          <>
            <span className='z-10 font-transducer uppercase text-xs text-entropy-slateGray font-semibold'>
              {post.createdAt}
            </span>

          </>
        )}
        <h3 className='z-10 font-transducer text-entropy-grayUnit font-semibold'>
          {post.articleTitle}
        </h3>
        <p className='z-10'>
          {post.articleDescription ?? 'Read more'}
        </p>
      </article>
    </Link>
  )
}

export default CarouselCard
