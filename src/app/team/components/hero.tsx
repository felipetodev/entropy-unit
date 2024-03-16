import { MotionDiv } from '@/components/ui/motion-div'
import ReactMarkdown from 'react-markdown'

type Props = {
  title: string
  image: {
    url: string
    title: string
  }
}

function TeamHero ({ title, image }: Props) {
  return (
    <section className='relative h-[320px] sm:h-[800px]'>
      <img
        className='block w-full h-full object-cover'
        src={image.url}
        alt={image.title ?? 'team wallpeper'}
      />
      <MotionDiv className='absolute bottom-0 flex flex-col md:space-y-3 font-transducer text-3xl sm:text-6xl lg:text-7xl font-semibold p-5 sm:px-10 sm:pb-[60px]'>
        <ReactMarkdown>
          {title}
        </ReactMarkdown>
      </MotionDiv>
    </section>
  )
}

export default TeamHero
