'use server'

import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendForm = async (formData: FormData) => {
  // const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  const { error } = await resend.emails.send({
    from: 'Entropy Unit [Newsletter] <newsletter@entropyunit.com>',
    to: 'contact@entropyunit.com',
    subject,
    text: message,
    // improve this with https://react.email
    react: EmailTemplate({ email })
  })

  return { message: error ? 'Oops! Something went wrong' : 'Email sent successfully' }
}
