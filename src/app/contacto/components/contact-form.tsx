import { SubmitButton } from '@/app/actions/submit-button'

// remove later
const sleep = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms))

function ContactForm () {
  return (
    <form
      className='flex flex-col w-full my-[100px]'
      action={async (formData: FormData) => {
        'use server'
        await sleep(3000)
        const name = formData.get('name')
        const email = formData.get('email')
        const subject = formData.get('subject')
        const message = formData.get('message')

        console.log({
          name,
          email,
          subject,
          message
        })
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
      <span className='text-entropy-red my-5 font-transducer text-sm invisible'>
        INGRESA UN EMAIL VÁLIDO
      </span>
      <SubmitButton>
        ENVIAR
      </SubmitButton>
    </form>
  )
}

export default ContactForm
