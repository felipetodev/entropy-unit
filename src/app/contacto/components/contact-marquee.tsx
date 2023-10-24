import Marquee from '@/components/ui/marquee'

function ContactMarquee () {
  return (
    <Marquee className='bg-entropy-red' direction='right'>
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className='flex items-center py-2'>
          <h4 className='text-4xl'>CONTACT@ENTROPYUNIT.COM</h4>
          <svg className='ml-20' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M22 10.992L13.2276 21.9788H4.39681L10.4132 14.4436H0V7.54043H10.4132L4.39681 0H13.2276L22 10.992Z' fill='#F2F2F2' />
          </svg>
        </li>
      ))}
    </Marquee>
  )
}

export default ContactMarquee
