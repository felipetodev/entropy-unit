'use server'

import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendForm = async (formData: FormData, type: 'newsletter' | 'contact') => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string ?? ''
  const message = formData.get('message') as string

  const isNewsletter = type === 'newsletter'

  const { error } = await resend.emails.send({
    from: isNewsletter
      ? 'Entropy Unit [Newsletter] <newsletter@entropyunit.com>'
      : 'Entropy Unit [Contact] <contact@entropyunit.com>',
    to: 'entropyunit1@gmail.com',
    subject,
    text: message,
    // improve this with https://react.email
    react: EmailTemplate({ name, email, message })
  })

  return {
    message: error
      ? 'Oops! Something went wrong'
      : isNewsletter ? '¡Gracias por suscribirte!' : '¡Gracias por contactarnos!'
  }
}
