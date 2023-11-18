'use client'

import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { EntropyArrow } from './icons'

const Link = motion(NextLink)

function BlogButton () {
  return (
    <Link
      href='/blog'
      whileHover={{ gap: '10px' }}
      transition={{ type: 'spring', bounce: 0 }}
      className='gap-x-5 ml-auto flex items-center font-transducer font-semibold px-5 sm:px-10'
    >
      <span>IR AL DEV BLOG</span>
      <EntropyArrow className='text-entropy-red w-[13px] h-[13px]' />
    </Link>
  )
}

export default BlogButton
