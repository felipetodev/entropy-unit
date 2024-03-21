import { fetchBlogPosts } from '@/contentful/service'
import CarouselBlog from '@/components/carousel-blog'

export default async function Carousel () {
  const posts = await fetchBlogPosts({
    limit: 5,
    select: ['sys.createdAt,fields.articlePreview,fields.slug,fields.articleTitle,fields.articleDescription,fields.authorImage'],
    revalidate: {
      next: { tags: ['articles'] }
    }
  })
  return <CarouselBlog posts={posts} />
}
