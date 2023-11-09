'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavMenu from './nav-menu'
import { MenuIcon } from './ui/menu'
import { AnimatePresence } from 'framer-motion'
import { devMark } from '@/lib/utils'

function MainNav () {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()

  useEffect(() => {
    devMark()
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [path])

  const handleKeyboardClose = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.pathname === path && isOpen) {
      e.preventDefault()
      setIsOpen(false)
    }
  }

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-16 sm:h-20 z-50 mt-5 px-5 sm:px-10'>
        <main className='relative z-30 flex h-full border-b border-entropy-slateGray'>
          <Link
            href='/'
            onClick={handleClick}
          >
            <img className='block h-12 sm:h-14' src='navbar-logo.svg' alt='Entropy Unit' />
          </Link>
          <div className='ml-auto flex items-center'>
            <div className='flex items-center border-l border-entropy-slateGray h-full sm:pr-6'>
              <button
                className='ml-4 sm:ml-6 z-50'
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyboardClose}
              >
                <MenuIcon isOpen={isOpen} />
                <span className='sr-only'>Toggle Sidebar</span>
              </button>
            </div>
          </div>
        </main>
        <div className='absolute z-20 h-[calc(64px+20px)] sm:h-[calc(80px+20px)] w-full left-0 -top-[20px] bg-gradient-to-t from-transparent from-4% to-100% to-entropy-black/50' />
      </div>
      <AnimatePresence>
        {isOpen && (
          <NavMenu onClick={handleClick} />
        )}
      </AnimatePresence>
    </>
  )
}

export default MainNav
