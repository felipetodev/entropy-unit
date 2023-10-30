import { Button } from '@/components/ui/button'
import { IconApple, IconJoystick, IconWindows } from '@/components/ui/icons'
import Link from 'next/link'

function GamesHero () {
  return (
    <section className='h-screen relative'>
      <img className='block w-full h-full object-cover object-top' src='/hero.webp' alt='games-hero' />
      <div className='flex flex-col sm:flex-row absolute justify-between left-0 bottom-0 w-full px-14 pb-16'>
        <div className='grid gap-y-6'>
          <img className='block' src='/tvon-horizontal.svg' alt='The Vow of Nazka' />
          <div className='space-y-3'>
            <div className='flex flex-col space-y-3 font-transducer text-xl sm:text-3xl lg:text-6xl font-semibold'>
              <h1>
                UN VIAJE
              </h1>
              <h1>
                SIN RETORNO
              </h1>
              <h1>
                CON LOS DIOSES
              </h1>
            </div>
            <div className='flex items-center space-x-6 py-4'>
              <IconWindows />
              <IconApple />
              <div className='flex items-center'>
                <IconJoystick className='mr-2 w-7 h-7' />
                <p className='ml-3 hidden sm:flex'>
                  Compatibilidad total con mando
                </p>
              </div>
            </div>
          </div>
          <Button className='w-full sm:w-max'>
            DESCARGA LA DEMO AHORA
          </Button>
        </div>
        <Link href='/games#the-journey' className='flex items-center justify-center sm:justify-normal gap-x-5 sm:self-end mt-[30px] sm:mt-auto'>
          <p>Descubre más</p>
          <button>
            <svg className='h-8 w-8 sm:w-20 sm:h-20' viewBox='0 0 70 71' fill='none'>
              <path d='M42.8166 37.6943L35 45.5109M35 45.5109L27.1834 37.6943M35 45.5109V26.3948M69 35.5073C69 54.285 53.7777 69.5073 35 69.5073C16.2223 69.5073 1 54.285 1 35.5073C1 16.7296 16.2223 1.50732 35 1.50732C53.7777 1.50732 69 16.7296 69 35.5073Z' stroke='#F2F2F2' strokeWidth='2' strokeMiterlimit='10' />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default GamesHero
