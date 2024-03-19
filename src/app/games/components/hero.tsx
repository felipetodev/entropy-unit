import Image from 'next/image'
import { MotionDiv } from '@/components/ui/motion-div'
import ScrollArrow from './scroll-arrow'

type Props = {
  title: string
  buttonScrollCopy: string
  image: {
    url: string
    title: string
  }
  logo: {
    url: string
    title: string
  }
  platformIcons: Array<{
    url: string
    title: string
  }>
  platformCopy: string
}

function GamesHero ({ title, buttonScrollCopy, image, logo, platformIcons, platformCopy }: Props) {
  return (
    <section className='relative h-[800px]'>
      <img className='block w-full h-full object-cover object-top' src={image.url} alt={image.title} />
      <div className='z-30 flex flex-col sm:flex-row absolute justify-between left-0 bottom-0 w-full pb-16 px-5 sm:px-10'>
        <div className='grid gap-y-6'>
          <MotionDiv>
            <img className='block w-[165px] sm:w-fit' src={logo.url} alt={logo.title} />
          </MotionDiv>
          <MotionDiv delay={0.3} className='space-y-3'>
            <div className='flex space-y-1.5 sm:space-y-3 flex-col font-transducer text-3xl sm:text-3xl lg:text-6xl font-semibold'>
              <h1 className='uppercase max-w-[800px]'>
                {title}
              </h1>
            </div>
            <div className='flex items-center space-x-6 py-4'>
              {platformIcons.map((icon, index) => (
                <Image
                  key={index}
                  className='w-7 h-6'
                  width={24}
                  height={24}
                  src={icon.url}
                  alt={icon.title}
                />
              ))}
              {platformCopy && (
                <p className='ml-3 hidden sm:flex'>
                  {platformCopy}
                </p>
              )}
            </div>
          </MotionDiv>
          {/* <MotionDiv delay={0.6}>
            <Button className='w-fit mx-auto sm:mx-0'>
              DESCARGA LA DEMO AHORA
            </Button>
          </MotionDiv> */}
        </div>
        <ScrollArrow buttonScrollCopy={buttonScrollCopy} />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent from-0% to-100% to-entropy-black z-20' />
    </section>
  )
}

export default GamesHero
