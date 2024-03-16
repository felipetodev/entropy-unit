import Marquee from '@/components/ui/marquee'
import { MotionDiv } from '@/components/ui/motion-div'

type Props = {
  images: Array<{
    url: string
    title: string
  }>
  leftDescription: string
  rightDescription: string
}

function WorldVon ({ images, leftDescription, rightDescription }: Props) {
  return (
    <section className='overflow-hidden'>
      <MotionDiv once className='px-5 gap-x-4 sm:px-10 font-transducer flex items-center justify-center flex-col sm:flex-row mt-32 text-transparent bg-clip-text bg-gradient-to-b from-entropy-slateGray to-entropy-grayUnit'>
        <h2 className='text-[45px] md:text-[4.5rem] lg:text-[8rem] font-semibold '>
          EL MUNDO
        </h2>
        <div className='md:ml-4 flex sm:flex-col text-entropy-slateGray font-semibold md:mt-2 lg:mt-4'>
          <h3 className='sm:hidden text-[18px] sm:text-2xl'>DE THE VOW OF NAZKA</h3>
          <span className='hidden sm:flex text-sm lg:text-2xl'>DE</span>
          <h3 className='hidden sm:flex text-sm lg:text-2xl'>THE VOW</h3>
          <h3 className='hidden sm:flex text-sm lg:text-2xl'>OF NAZKA</h3>
        </div>
      </MotionDiv>
      <MotionDiv>
        <Marquee className='mt-4'>
          {images?.map((image, i) => (
            <li
              key={i}
              style={{
                '--pusher-grow': (Math.random() * 10).toString(),
                '--puller-grow': (Math.random() * 10).toString()
              } as any}
              className='min-h-full before:flex-[var(--pusher-grow,1)_1_auto] after:flex-[var(--puller-grow,1)_1_auto] flex flex-col h-max min-w-[350px] md:min-w-[450px] rounded-3xl overflow-hidden'
            >
              <img className='flex flex-col flex-[0_1_auto] block h-full w-full object-cover rounded-3xl' src={image.url} alt={image.title} />
            </li>
          ))}
        </Marquee>
      </MotionDiv>
      <MotionDiv once className='flex flex-col sm:flex-row items-center justify-center gap-[40px] sm:gap-[60px] py-10 px-6'>
        <div className='border-l border-entropy-red max-w-sm'>
          <p className='ml-6'>
            {leftDescription}
          </p>
        </div>
        <div className='border-l border-entropy-red max-w-sm'>
          <p className='ml-6'>
            {rightDescription}
          </p>
        </div>
      </MotionDiv>
    </section>
  )
}

export default WorldVon
