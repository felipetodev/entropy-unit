import { EntropyArrow } from '@/components/ui/icons'
import Marquee from '@/components/ui/marquee'

function ContactMarquee () {
  return (
    <Marquee className='bg-entropy-red' direction='right'>
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className='flex items-center py-2'>
          <h4 className='text-4xl'>CONTACT@ENTROPYUNIT.COM</h4>
          <EntropyArrow className='ml-20' />
        </li>
      ))}
    </Marquee>
  )
}

export default ContactMarquee
