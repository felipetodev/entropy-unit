'use client'

import { useState } from 'react'
import { sendForm } from '@/app/actions/form'
import { SubmitButton } from '@/app/actions/submit-button'
import { cn } from '@/lib/utils'

function ContactForm () {
  const [message, setMessage] = useState('')
  return (
    <form
      className='flex flex-col w-full mt-[100px] mb-10'
      action={async (formData: FormData) => {
        const { message } = await sendForm(formData, 'contact')
        setMessage(message)
      }}
    >
      <div className='sm:flex w-full'>
        <input
          required
          className='w-full sm:w-[calc(100%-20px)] uppercase font-transducer bg-transparent outline-none py-4 placeholder:text-entropy-grayUnit placeholder:font-semibold rounded-none border-t sm:border-y border-entropy-slateGray placeholder:focus:text-entropy-red placeholder:transition-all'
          name='name'
          type='text'
          placeholder='Nombre'
        />
        <input
          required
          className='sm:pl-[20px] sm:border-l w-full uppercase font-transducer bg-transparent outline-none py-4 placeholder:text-entropy-grayUnit placeholder:font-semibold rounded-none border-y border-entropy-slateGray placeholder:focus:text-entropy-red placeholder:transition-all'
          name='email'
          type='email'
          placeholder='Email'
        />
      </div>
      <input
        required
        name='subject'
        type='text'
        placeholder='Asunto'
        className='uppercase font-transducer bg-transparent outline-none py-4 placeholder:text-entropy-grayUnit placeholder:font-semibold rounded-none border-b border-entropy-slateGray placeholder:focus:text-entropy-red placeholder:transition-all'
      />
      <textarea
        required
        name='message'
        placeholder='Mensaje'
        autoComplete='off'
        className='h-56 uppercase font-transducer bg-transparent outline-none py-4 placeholder:text-entropy-grayUnit placeholder:font-semibold rounded-none border-b border-entropy-slateGray placeholder:focus:text-entropy-red placeholder:transition-all'
      />
      <span className={cn('invisible my-5 text-xs text-center sm:text-start font-transducer text-entropy-red font-semibold', {
        visible: message
      })}
      >
        {message}
      </span>
      <SubmitButton>
        ENVIAR
      </SubmitButton>
    </form>
  )
}

export default ContactForm
