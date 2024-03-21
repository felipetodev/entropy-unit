import { normalizeContentfulData } from '@/lib/utils'
import * as contentful from 'contentful'
import type { FixedQueryOptions, FixedPagedOptions } from 'contentful'

export const client = (nextOpts = {}) => contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  host: process.env.CONTENTFUL_HOST,
  ...nextOpts
})

export async function fetchPageContent (page: string) {
  const content = await client().getEntries({
    content_type: page,
    limit: 1
  })

  return content.items.map((item) => normalizeContentfulData({ fields: item.fields }) as any)[0]
}

export async function fetchBlogPosts ({
  limit,
  select,
  revalidate
}: FixedQueryOptions & FixedPagedOptions & { select?: string[] } & { revalidate?: any }) {
  const posts = await client(revalidate).getEntries({
    content_type: 'blogLayout',
    limit,
    order: ['-sys.createdAt'],
    ...select && { select }
  })

  return posts.items.map((post) => normalizeContentfulData({ fields: post.fields, isBlog: true }) as any)
}
