'use client'

import { useState } from 'react'
import { SubmitButton } from '@/app/actions/submit-button'
import { LinesNewsletter } from './ui/icons'
import { WordByWord } from './ui/word-by-word'
import { sendForm } from '@/app/actions/form'
import { cn } from '@/lib/utils'

function Subscribe () {
  const [message, setMessage] = useState('')
  const phrase = 'ÚNETE A NUESTRO BOLETÍN Y MANTENTE INFORMADO SOBRE EL DESARROLLO DE THE VOW OF NAZKA.'
  return (
    <section className='bg-[#0a0a0a] px-5 sm:px-10'>
      <div className='py-32 max-w-7xl mx-auto space-y-8'>
        <span className='flex justify-center'>
          <LinesNewsletter />
        </span>
        <WordByWord className='[text-wrap:balance] text-center font-transducer text-base sm:text-lg lg:text-2xl font-semibold space-x-2'>
          {phrase}
        </WordByWord>
        <form
          action={async (formData: FormData) => {
            const { message } = await sendForm(formData, 'newsletter')
            setMessage(message)
          }}
          className='flex flex-col'
        >
          <div className='flex flex-col sm:flex-row w-full sm:border-y sm:border-r sm:rounded-r-md overflow-hidden [&_input]:border-y sm:[&_input]:border-none gap-y-6 sm:gap-y-0'>
            <input
              required
              name='email'
              type='email'
              placeholder='TU EMAIL'
              autoComplete='off'
              autoCorrect='off'
              autoCapitalize='off'
              className='rounded-none uppercase font-transducer w-full bg-transparent outline-none py-4 placeholder:transition-colors focus:placeholder:text-entropy-slateGray/70 placeholder:text-entropy-slateGray placeholder:font-semibold'
            />
            <SubmitButton variant='secondary' className='mx-auto w-max text-xs sm:text-base rounded-md sm:rounded-none h-11 sm:h-16 px-4'>
              SUSCRÍBETE
            </SubmitButton>
          </div>
        </form>
        <p className={cn('invisible text-xs text-center sm:text-start font-transducer text-entropy-red font-semibold', {
          visible: message
        })}
        >
          {message}
        </p>
      </div>
    </section>
  )
}

export default Subscribe
