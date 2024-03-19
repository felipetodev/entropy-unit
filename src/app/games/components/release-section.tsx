// 'use client'

import { Fragment } from 'react'
import Image from 'next/image'
// import useNumberAnimation from '@/hooks/use-number-animation'
// import { motion } from 'framer-motion'

type Props = {
  title: string
  releaseDate: string
  platformIcons: Array<{ title: string, url: string }>
  platformCopy: string
}

function Release ({ title, releaseDate, platformIcons, platformCopy }: Props) {
  return (
    <section className='bg-gradient-to-b from-[#121212] from-20% to-100% to-entropy-red'>
      <div className='cursor-crosshair md:-mt-[200px] md:pt-[600px] pb-[150px] flex flex-col items-center justify-center font-transducer h-full px-5'>
        <h2 className='text-entropy-slateGray text-xl sm:text-4xl font-semibold'>
          {title}
        </h2>
        <h3 className='text-2xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[120px] font-semibold'>
          {releaseDate}
        </h3>
        <div className='flex gap-x-6 items-center py-4'>
          {platformIcons.map((icon, i) => (
            <Fragment key={i}>
              <Image
                className='w-6 h-6 sm:w-7 sm:h-7'
                width={24}
                height={24}
                src={icon.url}
                alt={icon.title}
              />
              {i % 2 === 0 && (
                <span
                  aria-hidden='true'
                  className='block h-1.5 w-1.5 rounded-full bg-entropy-red'
                />
              )}
            </Fragment>
          ))}
          <p className='ml-3 hidden sm:flex'>
            {platformCopy}
          </p>
        </div>
        {/* <Button className='w-fit mx-auto sm:mx-0'>
          DESCARGA LA DEMO AHORA
        </Button> */}
      </div>
    </section>
  )
}

export default Release
