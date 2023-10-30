'use client'

import { Button } from '@/components/ui/button'
import { IconApple, IconJoystick, IconWindows } from '@/components/ui/icons'
import useNumberAnimation from '@/hooks/use-number-animation'
import { motion } from 'framer-motion'

function Release () {
  const { ref, rounded } = useNumberAnimation()

  return (
    <section className='bg-gradient-to-b from-[#121212] from-20% to-100% to-entropy-red'>
      <div className='cursor-crosshair sm:-mt-[200px] sm:pt-[600px] pb-[150px] flex flex-col items-center justify-center font-transducer h-full px-5'>
        <h2 ref={ref} className='text-entropy-slateGray text-xl sm:text-4xl font-semibold'>
          LANZAMIENTO
        </h2>
        <motion.h3 className='text-4xl sm:text-6xl md:text-[120px] font-semibold'>
          {rounded}
        </motion.h3>
        <div className='flex items-center py-4'>
          <IconWindows className='mr-6' />
          <IconApple className='mr-6' />
          <div className='flex items-center before:h-1.5 before:w-1.5 before:rounded-full before:bg-entropy-red before:mr-6'>
            <IconJoystick className='mr-2 w-7 h-7' />
            <p className='ml-3 hidden sm:flex'>
              Compatibilidad total con mando
            </p>
          </div>
        </div>
        <Button className='w-full sm:w-max'>
          DESCARGA LA DEMO AHORA
        </Button>
      </div>
    </section>
  )
}

export default Release
