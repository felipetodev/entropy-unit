import { cn } from '@/lib/utils'

interface Props extends React.ComponentProps<'svg'> {
  isOpen: boolean
}

export function MenuIcon ({ isOpen, ...props }: Props) {
  return (
    <svg {...props} width='41' height='35' viewBox='0 0 41 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line
        className={cn('transition-transform duration-300 !ease-[cubic-bezier(0.65,0.05,0.36,1)]', {
          'translate-y-3': isOpen,
          'translate-x-0': !isOpen
        })}
        x1='1.55078'
        y1='10.918'
        x2='39.5508'
        y2='10.918'
        stroke='#DDD6CF'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <line
        className={cn('transition-opacity duration-300', {
          'opacity-0': isOpen,
          'opacity-100': !isOpen
        })}
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
