import { normalizeContentfulData } from '@/lib/utils'
import * as contentful from 'contentful'
import type { FixedQueryOptions, FixedPagedOptions } from 'contentful'

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  host: process.env.CONTENTFUL_HOST
})

export async function fetchPageContent (page: string) {
  const content = await client.getEntries({
    content_type: page,
    limit: 1
  })

  return content.items.map((item) => normalizeContentfulData({ fields: item.fields }) as any)[0]
}

export async function fetchBlogPosts ({ include }: FixedQueryOptions & FixedPagedOptions) {
  const posts = await client.getEntries({
    content_type: 'blogLayout',
    include
  })

  return posts.items.map((post) => normalizeContentfulData({ fields: post.fields, isBlog: true }) as any)
}
