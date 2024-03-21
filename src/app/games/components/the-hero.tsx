import { Frame2 } from '@/components/ui/frames'
import { MotionDiv } from '@/components/ui/motion-div'
import Video from '@/components/ui/video'

type Props = {
  title: string
  description: string
  asset: {
    url: string
    title: string
    type: string
  }
}

function TheHero ({ title, description, asset }: Props) {
  return (
    <section className='relative py-28 mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[100px] px-5 md:px-20 w-full h-full max-w-[2000px] mx-auto'>
        <MotionDiv once className='order-last md:order-none flex flex-col justify-center gap-y-10 z-10'>
          <h2 className='font-semibold text-4xl font-transducer'>
            {title}
          </h2>
          <p>
            {description}
          </p>
        </MotionDiv>
        <div className='bg-neutral-500 h-[500px] rounded-3xl overflow-hidden'>
          {asset.type.includes('image')
            ? (
              <img
                src={asset.url}
                alt={asset.title}
                className='object-cover h-full w-full'
              />
              )
            : <Video src={asset.url} className='object-none object-[50%,50%]' />}
        </div>
      </div>
      <Frame2 className='absolute top-0 !-left-8 sm:-left-1 w-fit md:left-0 mt-32 md:mt-auto h-[600px] md:h-[calc(100%+50px)] md:w-full md:ml-20' />
    </section>
  )
}

export default TheHero
