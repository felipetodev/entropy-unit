import { EntropyArrow } from '@/components/ui/icons'
import Marquee from '@/components/ui/marquee'

function ContactMarquee () {
  return (
    <Marquee className='bg-entropy-red' direction='right'>
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className='flex items-center py-2'>
          <a href='mailto:hola@entropyunit.com' className='inline-flex items-center'>
            <h4 className='text-4xl'>CONTACT@ENTROPYUNIT.COM</h4>
            <EntropyArrow className='ml-20' />
          </a>
        </li>
      ))}
    </Marquee>
  )
}

export default ContactMarquee
