import Marquee from '@/components/ui/marquee'

function TeamMarquee () {
  return (
    <Marquee className='bg-entropy-blueUnit' direction='right'>
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className='flex items-center py-2'>
          <h4 className='text-4xl font-semibold font-transducer'>TEAM</h4>
          <svg className='ml-20' width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M11.8565 22L0.788715 13.2276L0.788715 4.39681L8.3794 10.4132L8.37941 -6.36008e-07L15.3335 -3.32033e-07L15.3335 10.4132L22.9296 4.39681L22.9296 13.2276L11.8565 22Z' fill='#C70039' />
          </svg>
        </li>
      ))}
    </Marquee>
  )
}

export default TeamMarquee
