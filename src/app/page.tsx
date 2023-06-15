'use client'
import { type FormEvent, useState } from 'react'
import { Instagram, Twitter, YouTube } from '@/components/Icons'
import va from '@vercel/analytics'

export default function Home () {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(async res => await res.json())
      .then((data: any) => {
        if (data.error) {
          console.error(data.error.message)
          alert('Algo salio mal, intenta con otro email')
          va.track('Notification', { type: 'failed', email })
          return setMessage(null)
        }
        setMessage('¡Gracias por registrarte!')
        setEmail('')
        va.track('Notification', { type: 'completed', email })
      })
      .catch((e) => {
        alert('Algo salio mal, intenta con otro email')
        return setMessage(null)
      })
  }

  return (
    <main className='bg-[#171717] flex relative h-screen flex-col items-center justify-between overflow-hidden'>
      <div className='z-20 absolute flex flex-col items-center gap-8 sm:gap-10 w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[55%]'>
        <img className='h-[200px] sm:min-h-[300px]' src='/TITLE.svg' alt='main-logo' />
        <img className='h-28' src='/celta.svg' alt='main-logo' />

        <div className='flex flex-col items-center max-w-md gap-y-8'>
          <div>
            <h1 className={`uppercase text-2xl font-semibold text-center tracking-wide ${message ? 'text-entropy-red' : 'text-entropy-gray'}`}>
              {message ?? 'Acompañanos en el proceso!'}
            </h1>
            <div className='flex justify-center gap-x-5 items-center mt-5'>
              <a href='https://twitter.com/thevowofnazka' target='_blank' rel='noopener noreferrer'>
                <Twitter className='h-6 w-6 text-entropy-neutral transition hover:text-entropy-neutral/50' />
              </a>
              <a href='https://www.youtube.com/@The-Vow-of-Nazka' target='_blank' rel='noopener noreferrer'>
                <YouTube className='h-8 w-8 text-entropy-neutral transition hover:text-entropy-neutral/50' />
              </a>
              <a href='https://www.instagram.com/thevowofnazka' target='_blank' rel='noopener noreferrer'>
                <Instagram className='h-6 w-6 text-entropy-neutral transition hover:text-entropy-neutral/50' />
              </a>
            </div>
          </div>
          <p className='text-entropy-neutral text-lg text-center'>
            Únete a nuestro boletín semanal y mantente informado sobre el desarrollo de The Vow of Nazka.
          </p>
        </div>
        <form onSubmit={handleSend} className='relative flex border-2 border-entropy-neutral rounded-md overflow-hidden max-w-md w-full shadow-xl'>
          <input
            required
            name='email'
            type='email'
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false'
            onChange={({ target }) => setEmail(target.value)}
            className='w-full font-semibold tracking-widest truncate uppercase text-sm py-3 px-2 outline-none bg-transparent text-entropy-neutral placeholder:text-entropy-neutral placeholder:pl-0.5'
            placeholder='INGRESA TU EMAIL'
          />
          <button className='text-sm py-3 px-4 sm:px-6 tracking-wider rounded-tr-md rounded-br-md transition bg-entropy-red hover:bg-entropy-red/80 text-entropy-neutral border-l-2 border-entropy-neutral font-semibold'>
            ENVIAR
          </button>
          <div className='-z-10 absolute h-full w-full bg-black/30' />
        </form>
      </div>

      {/* Background */}
      <img className='object-cover w-full h-full' src='/bg.png' alt='bg-entropy' />
      <img className='min-w-[900px] absolute top-0 right-0 z-10' src='/advert-top.png' alt='wip-top' />
      <img className='min-w-[900px] absolute bottom-0 left-0 z-10' src='/advert-bottom.png' alt='wip-bottom' />
    </main>
  )
}
