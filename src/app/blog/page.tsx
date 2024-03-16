import CarouselCard from '@/components/carousel-card'
import { fetchBlogPosts } from '@/contentful/service'
import { notFound } from 'next/navigation'

export default async function Blog () {
  const posts = await fetchBlogPosts({ include: 10 })

  if (!posts.length) {
    notFound()
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#121212] from-30% to-100% to-entropy-red px-5 sm:px-10 pb-[100px] pt-[170px]'>
      <h1 className='font-transducer text-xl sm:text-2xl md:text-4xl font-semibold mb-14 text-center'>
        Entropy Unit Dev Blog
      </h1>
      <div className='grid gap-0 sm:gap-[30px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {posts.map((post, i) => (
          <CarouselCard
            key={post.slug}
            index={i}
            post={post}
            isInView
            isBlog // remove
          />
        ))}
      </div>
    </div>
  )
}
