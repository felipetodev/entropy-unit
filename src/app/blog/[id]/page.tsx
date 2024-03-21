import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { client } from '@/contentful/service'
import { normalizeContentfulData } from '@/lib/utils'

async function fetchBlogPost (slug: string) {
  const post = await client().getEntries({
    content_type: 'blogLayout',
    limit: 1,
    'fields.slug': slug
  })

  if (!post.items.length) {
    notFound()
  }

  const [entries] = post.items

  return (normalizeContentfulData({ fields: entries.fields, isBlog: true }) as any)
}

async function BlogPost ({ params }: { params: { id: string } }) {
  const post = await fetchBlogPost(params.id)

  return (
    <div className='w-full max-w-5xl mx-auto min-h-screen px-5 sm:px-10 pb-[100px] pt-[170px]'>
      <div className='flex flex-col gap-y-[60px]'>
        <div className='flex flex-col gap-y-[30px]'>
          <Link href='/blog' className='flex items-center text-entropy-blue transition-colors hover:underline hover:opacity-50'>
            <svg className='mr-2' width='22' height='18' viewBox='0 0 22 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M9.8165 16.8167L1.99994 9.00015M1.99994 9.00015L9.8165 1.18359M1.99994 9.00015L21.1161 9.00015' stroke='#F2F2F2' strokeWidth='2' strokeMiterlimit='10' />
            </svg>
            Dev Blog
          </Link>
          <h1 className='font-transducer text-xl sm:text-2xl md:text-4xl font-semibold'>
            {post.articleTitle}
          </h1>
          <div className='flex flex-col gap-y-5 justify-between sm:flex-row sm:gap-y-0 sm:items-center'>
            <div className='flex space-x-4'>
              {post.authorImage.url
                ? (
                  <img
                    src={post.authorImage.url}
                    alt={post.authorName}
                    className='w-[30px] h-[30px] sm:h-[50px] sm:w-[50px] bg-entropy-grayUnit rounded-full'
                  />
                  )
                : (
                  <div className='w-[30px] h-[30px] sm:h-[50px] sm:w-[50px] bg-entropy-grayUnit rounded-full' />
                  )}
              <div>
                <h4 className='font-bold text-sm sm:text-base'>
                  {post.authorName}
                </h4>
                <span className='text-entropy-slateGray text-xs sm:text-sm'>
                  {post.authorJob}
                </span>
              </div>
            </div>
            <span className='text-entropy-slateGray text-sm uppercase'>
              {new Intl.DateTimeFormat('es', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }).format(new Date(post.timestamptz))}
            </span>
          </div>
        </div>

        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>

      </div>
    </div>
  )
}

export default BlogPost
