import { motion } from 'framer-motion'

interface Props extends React.ComponentProps<'svg'> {
  isOpen: boolean
}

export function MenuIcon ({ isOpen, ...props }: Props) {
  return (
    <svg {...props} width='41' height='35' viewBox='0 0 41 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <motion.line
        variants={{
          closed: { transform: 'translateY(0px)' },
          open: { transform: 'translateY(12px)' }
        }}
        animate={isOpen ? 'open' : 'closed'}
        x1='1.55078'
        y1='10.918'
        x2='39.5508'
        y2='10.918'
        stroke='#DDD6CF'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <motion.line
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        animate={isOpen ? 'open' : 'closed'}
        x1='1.55078'
        y1='24.918'
        x2='39.5508'
        y2='24.918'
        stroke='#DDD6CF'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}
