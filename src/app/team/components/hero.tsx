import { MotionDiv } from '@/components/ui/motion-div'
import Video from '@/components/ui/video'
import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  wallpaper: {
    url: string
    title: string
    type: string
  }
  className?: string
}

function TeamHero ({ className, title, wallpaper }: Props) {
  return (
    <section className={cn('relative h-[320px] sm:h-[800px]', className)}>
      {wallpaper?.type.includes('image') && (
        <img
          className='block w-full h-full object-cover'
          src={wallpaper.url}
          alt={wallpaper.title ?? 'team wallpeper'}
        />
      )}
      {wallpaper?.type.includes('video') && (
        <Video src={wallpaper.url} />
      )}
      <MotionDiv className='absolute bottom-0 flex flex-col md:space-y-3 font-transducer text-3xl sm:text-6xl lg:text-7xl font-semibold p-5 sm:px-10 sm:pb-[60px]'>
        <ReactMarkdown>
          {title}
        </ReactMarkdown>
      </MotionDiv>
    </section>
  )
}

export default TeamHero
