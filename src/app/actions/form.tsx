'use server'

import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const { RESEND_API_KEY = '' } = process.env

const resend = new Resend(RESEND_API_KEY)

export const sendForm = async (formData: FormData, type: 'newsletter' | 'contact') => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string ?? ''
  const message = formData.get('message') as string
  const to = formData.get('to') as string ?? 'entropyunit1@gmail.com'

  const isNewsletter = type === 'newsletter'

  const { error } = await resend.emails.send({
    from: isNewsletter
      ? 'Entropy Unit [Newsletter] <newsletter@entropyunit.com>'
      : 'Entropy Unit [Contact] <contact@entropyunit.com>',
    to,
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

export const sendNewsletterGoogleSheet = async (formData: FormData) => {
  const { G_APPS_SCRIPT = '' } = process.env
  if (!G_APPS_SCRIPT) throw new Error('G_SCRIPT not found')

  try {
    const res = await fetch(G_APPS_SCRIPT, {
      method: 'POST',
      body: formData
    })

    if (!res.ok) throw new Error('Oops! Something went wrong')

    return {
      message: '¡Gracias por suscribirte!'
    }
  } catch (error) {
    return {
      message: (error as Error).message
    }
  }
}
