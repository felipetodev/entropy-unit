import { Button } from './ui/button'

function Hero () {
  return (
    <section className='h-[675px]'>
      <div className='relative h-full w-full'>
        <img className='block w-full h-full object-cover object-top' src='/hero.webp' alt='home-hero' />
        <div className='flex gap-y-10 flex-col justify-center items-center absolute bg-black/20 inset-0'>
          <img className='block w-52 h-[120px] sm:h-[198px] sm:w-full' src='/logo.svg' alt='The Vow of Nazka' />
          <div className='grid place-items-center text-center space-y-3 px-5 sm:px-10'>
            <h1 className=' font-transducer text-xl sm:text-3xl lg:text-4xl font-semibold [text-wrap:balance]'>
              UN VIAJE SIN RETORNO CON LOS DIOSES
            </h1>
            <h2 className='font-transducer text-xl'>
              ¿TE ATREVES A EMPEZAR?
            </h2>
          </div>
          <Button>
            CONOCE MÁS
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
