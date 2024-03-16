import { EntropyArrow } from '@/components/ui/icons'
import Marquee from '@/components/ui/marquee'

function ContactMarquee ({ title, email }: { title: string, email: string }) {
  return (
    <Marquee className='bg-entropy-red' direction='right'>
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className='flex items-center py-9'>
          <a href={email} className='inline-flex items-center'>
            <h4 className='text-4xl'>
              {title}
            </h4>
            <EntropyArrow className='ml-16' />
          </a>
        </li>
      ))}
    </Marquee>
  )
}

export default ContactMarquee
