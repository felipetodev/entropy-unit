import { EmailTemplate } from '@/components/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY ?? '')

const domain = process.env.NODE_ENV === 'production'
  ? 'https://www.entropyunit.com'
  : 'localhost:3000'

resend.domains.create({ name: domain })

export async function POST (req: Request) {
  const { email } = await req.json()
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Bienvenido al newsletter de Entropy Unit',
      react: EmailTemplate({ email }) as any
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
