import { EntropyArrow } from '@/components/ui/icons'
import Marquee from '@/components/ui/marquee'

function TeamMarquee () {
  return (
    <Marquee className='bg-entropy-blueUnit' direction='right'>
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className='flex items-center py-2'>
          <h4 className='text-4xl font-semibold font-transducer'>TEAM</h4>
          <EntropyArrow className='ml-20 text-entropy-red rotate-90' />
        </li>
      ))}
    </Marquee>
  )
}

export default TeamMarquee
