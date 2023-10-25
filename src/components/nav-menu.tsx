import Link from 'next/link'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'

function NavMenu () {
  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ bounce: false, ease: 'easeInOut' }}
      className='fixed top-0 left-0 right-0 bottom-0 bg-entropy-blueUnit pt-[calc(20px+80px)] h-screen z-40 px-10 pb-10 overflow-hidden'
    >
      <div className='relative font-transducer flex flex-col justify-end h-full'>
        <ul className='[&_li]:border-b [&_li]:border-entropy-slateGray [font-size:clamp(2.2em,6vw,100px)] font-semibold'>
          {NAV_LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <motion.span
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
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          href='mailto:hola@entropyunit.com'
          className='w-max text-sm sm:text-lg text-entropy-slateGray font-semibold mt-8 sm:mt-14'
        >
          hola@entropyunit.com
        </motion.a>
      </div>
    </motion.div>
  )
}

export default NavMenu
