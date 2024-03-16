import { fetchBlogPosts } from '@/contentful/service'
import CarouselBlog from '@/components/carousel-blog'

export default async function Carousel () {
  const posts = await fetchBlogPosts({ include: 5 })
  return <CarouselBlog posts={posts} />
}
