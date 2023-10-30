import { Button } from './ui/button'
import { LinesNewsletter } from './ui/icons'

function Subscribe () {
  return (
    <section className='bg-[#0a0a0a] px-5 sm:px-10'>
      <div className='py-32 max-w-7xl mx-auto space-y-8'>
        <span className='flex justify-center'>
          <LinesNewsletter />
        </span>
        <h2 className='[text-wrap:balance] text-center font-transducer text-lg sm:text-2xl font-semibold'>
          ÚNETE A NUESTRO BOLETÍN SEMANAL Y MANTENTE INFORMADO SOBRE EL DESARROLLO DE THE VOW OF NAZKA.
        </h2>
        <form action='' className='flex flex-col'>
          <div className='flex flex-col sm:flex-row w-full sm:border-y sm:rounded-r-md overflow-hidden [&_input]:border-y sm:[&_input]:border-none gap-y-6 sm:gap-y-0'>
            <input
              required
              name='id'
              type='text'
              placeholder='TU EMAIL'
              className='rounded-none uppercase font-transducer w-full bg-transparent outline-none py-4 placeholder:text-entropy-slateGray placeholder:font-semibold'
            />
            <Button variant='secondary' className='mx-auto w-max text-xs sm:text-base rounded-md sm:rounded-none h-11 sm:h-16 px-4'>
              SUSCRIBETE
            </Button>
          </div>
        </form>
        <p className='text-xs text-center sm:text-start font-transducer text-entropy-red font-semibold'>
          INGRESA UN EMAIL VÁLIDO
        </p>
      </div>
    </section>
  )
}

export default Subscribe
