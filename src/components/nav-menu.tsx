// eslint-disable-next-line
// @ts-nocheck weird framer-motion error
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'

const opacity = {
  closed: {
    opacity: 0,
    y: -500
  },
  open: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.2 }
  }
}

type Props = {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function NavMenu ({ onClick }: Props) {
  return (
    <motion.div
      initial='closed'
      animate='open'
      exit='exit'
      variants={opacity}
      transition={{ bounce: 0, ease: 'easeInOut', type: 'spring' }}
      className='fixed top-0 left-0 right-0 bottom-0 bg-entropy-blueUnit pt-[calc(20px+64px)] sm:pt-[calc(20px+80px)] [heigh:100svh] z-40 px-5 sm:px-10 pb-10 overflow-hidden'
    >
      <div className='relative font-transducer flex flex-col justify-end h-full'>
        <ul className='[&_li]:border-b [&_li]:border-entropy-slateGray [font-size:clamp(2.2em,6vw,100px)] font-semibold'>
          {NAV_LINKS.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                onClick={onClick}
                className='hover:text-entropy-red transition-colors focus-visible:outline-none focus-visible:text-entropy-red'
              >
                <motion.span
                  className='flex'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.7 * i,
                    delay: 0.09 * i
                  }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex flex-col md:flex-row md:items-center justify-between w-full mt-8 sm:mt-14'>
          <Link href='/blog' className='font-semibold uppercase transition-colors hover:text-entropy-red'>
            Dev Blog
          </Link>
          <a
            href='mailto:hola@entropyunit.com'
            className='w-max text-sm sm:text-lg transition-colors text-entropy-slateGray font-semibold  hover:text-entropy-grayUnit'
          >
            hola@entropyunit.com
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default NavMenu
