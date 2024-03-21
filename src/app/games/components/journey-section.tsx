import { Frame } from '@/components/ui/frames'
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

function JourneySection ({ title, description, asset }: Props) {
  return (
    <section id='down' className='relative py-28 overflow-hidden'>
      <div className='px-5 md:px-20 relative grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[100px] w-full h-full max-w-[2000px] mx-auto'>
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
        <MotionDiv once className='flex flex-col justify-center gap-y-10 z-10'>
          <h2 id='the-journey' className='uppercase font-semibold text-4xl font-transducer'>
            {title}
          </h2>
          {/* Change for markdown */}
          <p>
            {description}
          </p>
        </MotionDiv>
      </div>
      <Frame className='absolute top-[120px] sm:top-20 md:top-10 -right-32 w-[500px] sm:w-[600px] md:w-full' />
    </section>
  )
}

export default JourneySection
