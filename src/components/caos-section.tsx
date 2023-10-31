import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

function CaosSection () {
  return (
    <section className='md:h-[572px] px-5 sm:px-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12 w-full h-full max-w-[2000px] mx-auto'>
        <div className='relative w-full flex justify-center h-[320px] md:h-full'>
          <img
            className='absolute object-contain block z-10 -mt-28 h-[500px] md:h-auto'
            src='/pj.png'
            alt='entropy pj'
          />
          <div className='absolute top-[11px] z-20 mr-[38px] md:hidden'>
            <span className='relative flex h-1 w-1'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9fde] opacity-75' />
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-y-10'>
          <h2 className='font-transducer text-xl sm:text-3xl lg:text-4xl font-semibold [text-wrap:balance]'>
            DEL CAOS A LA EVOLUCIÓN
          </h2>
          <p className='[text-wrap:balance]'>
            Entropy Unit es más que solo un estudio de videojuegos. Somos narradores de corazón, comprometidos con contar historias de forma única y cautivadora. Reunido en Chile, nuestro equipo de profesionales dedicados abarca un conglomerado de apasionados por el arte y la ingeniería, cada uno aportando su toque único a nuestras creaciones.
          </p>
          <Link href='/team' className={cn(buttonVariants(), 'md:max-w-fit')}>
            CONOCE EL ESTUDIO
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaosSection
