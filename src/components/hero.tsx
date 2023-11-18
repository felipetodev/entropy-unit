import Link from 'next/link'
import Video from './ui/video'
import { MotionDiv } from './ui/motion-div'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

function Hero () {
  return (
    <section className='h-[800px]'>
      <div className='relative h-full w-full'>
        <Video src='/twon-teaser.mp4' />
        <div className='absolute inset-0 flex gap-y-10 flex-col justify-center items-center bg-black/50'>
          <MotionDiv>
            <img className='block w-52 h-[120px] sm:h-[198px] sm:w-full max-w-max' src='/logo.svg' alt='The Vow of Nazka' />
          </MotionDiv>
          <MotionDiv delay={0.3} className='grid place-items-center text-center space-y-3 px-5 sm:px-10'>
            <h1 className='font-transducer text-xl sm:text-3xl lg:text-4xl font-semibold [text-wrap:balance]'>
              UN VIAJE SIN RETORNO CON LOS DIOSES
            </h1>
            <h2 className='font-transducer text-xl'>
              ¿TE ATREVES A EMPEZAR?
            </h2>
          </MotionDiv>
          <MotionDiv delay={0.3}>
            <Link href='/games' className={cn(buttonVariants())}>
              CONOCE MÁS
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default Hero
