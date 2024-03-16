import Link from 'next/link'
import Video from './ui/video'
import { MotionDiv } from './ui/motion-div'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

type Props = {
  logo: {
    url: string
    title: string
  }
  video: {
    url: string
    title: string
  }
  title: string
  subtitle: string
  buttonTitle: string
  buttonLink: string
}

function Hero ({ title, subtitle, buttonTitle, buttonLink, logo, video }: Props) {
  return (
    <section className='h-[800px]'>
      <div className='relative h-full w-full'>
        <Video src={video.url} />
        <div className='absolute inset-0 flex gap-y-10 flex-col justify-center items-center bg-black/50'>
          {logo && (
            <MotionDiv>
              <img
                className='block w-52 h-[120px] sm:h-[198px] sm:w-full max-w-max'
                src={logo.url}
                alt={logo.title}
              />
            </MotionDiv>
          )}
          <MotionDiv delay={0.3} className='grid place-items-center text-center space-y-3 px-5 sm:px-10'>
            <h1 className='font-transducer text-xl sm:text-3xl lg:text-4xl font-semibold text-balance'>
              {title}
            </h1>
            {subtitle && (
              <h2 className='font-transducer text-xl'>
                {subtitle}
              </h2>
            )}
          </MotionDiv>
          {buttonLink && (
            <MotionDiv delay={0.3}>
              <Link href={buttonLink} className={cn(buttonVariants())}>
                {buttonTitle}
              </Link>
            </MotionDiv>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
