import { revalidatePath } from 'next/cache'
import { NextResponse, type NextRequest } from 'next/server'

const { REVALIDATE_SECRET = '' } = process.env

export async function POST (req: NextRequest) {
  const route = req.headers.get('x-contentful-webhook-name')
  const secret = req.headers.get('x-secret')

  if (!route || !secret || !REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Missing data', now: Date.now() }, { status: 400 })
  }

  if (secret === REVALIDATE_SECRET) {
    revalidatePath(route)

    return NextResponse.json({ success: true, now: Date.now() }, { status: 200 })
  } else {
    return NextResponse.json({ success: false, now: Date.now() }, { status: 401 })
  }
}
