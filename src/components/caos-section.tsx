import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { MotionDiv } from './ui/motion-div'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  description: string
  buttonTitle: string
  buttonLink: string
}

function CaosSection ({ title, description, buttonTitle, buttonLink }: Props) {
  return (
    <section className='md:h-[572px] px-5 sm:px-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12 w-full h-full max-w-[2000px] mx-auto'>
        <div className='relative w-full flex justify-center h-[320px] md:h-full'>
          <img
            className='absolute object-contain block z-10 -mt-28 h-[500px] md:h-auto'
            src='/pj.png'
            alt='entropy pj'
          />
        </div>
        <MotionDiv className='flex flex-col justify-center gap-y-10 z-10'>
          <h2 className='font-transducer text-xl sm:text-3xl lg:text-4xl font-semibold text-balance'>
            {title}
          </h2>
          <p className='text-balance'>
            {description}
          </p>
          <Link href={buttonLink} className={cn(buttonVariants(), 'w-fit mx-auto sm:mx-0')}>
            {buttonTitle}
          </Link>
        </MotionDiv>
      </div>
    </section>
  )
}

export default CaosSection
