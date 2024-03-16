// 'use client'

import { IconJoystick, IconWindows } from '@/components/ui/icons'
// import useNumberAnimation from '@/hooks/use-number-animation'
// import { motion } from 'framer-motion'

function Release ({ title, releaseDate }: { title: string, releaseDate: string }) {
  return (
    <section className='bg-gradient-to-b from-[#121212] from-20% to-100% to-entropy-red'>
      <div className='cursor-crosshair md:-mt-[200px] md:pt-[600px] pb-[150px] flex flex-col items-center justify-center font-transducer h-full px-5'>
        <h2 className='text-entropy-slateGray text-xl sm:text-4xl font-semibold'>
          {title}
        </h2>
        <h3 className='text-2xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[120px] font-semibold'>
          {releaseDate}
        </h3>
        <div className='flex items-center py-4'>
          <IconWindows className='mr-6' />
          {/* <IconApple className='mr-6' /> */}
          <div className='flex items-center before:h-1.5 before:w-1.5 before:rounded-full before:bg-entropy-red before:mr-6'>
            <IconJoystick className='mr-2 w-7 h-7' />
            <p className='ml-3 hidden sm:flex'>
              Compatibilidad total con mando
            </p>
          </div>
        </div>
        {/* <Button className='w-fit mx-auto sm:mx-0'>
          DESCARGA LA DEMO AHORA
        </Button> */}
      </div>
    </section>
  )
}

export default Release
