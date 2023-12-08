'use client'

import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import { useState } from 'react'
import { letterAnim, secondLetterAnim, titleAnim } from '@/lib/animations'

const Link = motion(NextLink)

function AnimatedLink ({ link }: { link: { label: string, href: string } }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={link.href}
      className='relative flex flex-col overflow-hidden hover:text-entropy-red'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatedWord title={link.label} animation={letterAnim} hovered={hovered} />
      <div className='absolute top-0'>
        <AnimatedWord title={link.label} animation={secondLetterAnim} hovered={hovered} />
      </div>
    </Link>
  )
}

function AnimatedWord ({ title, animation, hovered }: { title: string, hovered: boolean, animation: any }) {
  return (
    <motion.span
      initial='hidden'
      animate={hovered ? 'hover' : 'hidden'}
      variants={titleAnim}
      className='relative whitespace-nowrap'
    >
      {title.split('').map((letter, i) => (
        <motion.span
          key={i}
          variants={animation}
          className='relative inline-block'
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

function FooterLinks () {
  return (
    <ul className='flex md:ml-auto space-x-5 md:space-x-10 [&_a]:transition'>
      {NAV_LINKS.map((link) => (
        <li key={link.label} className='relative text-[10px] md:text-[11px] lg:text-base'>
          <AnimatedLink link={link} />
        </li>
      ))}
    </ul>
  )
}

export default FooterLinks
