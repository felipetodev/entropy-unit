'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon } from './ui/menu'
import { AnimatePresence } from 'framer-motion'
import NavMenu from './nav-menu'

function MainNav () {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [path])

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-20 z-50 mt-5'>
        <main className='flex h-full mx-5 sm:px-10 border-b border-[#6F7385]/50'>
          <Link href='/'>
            <img className='block h-14' src='navbar-logo.svg' alt='Entropy Unit' />
          </Link>
          <div className='ml-auto flex items-center space-x-4'>
            <div className='flex items-center border-l border-[#6F7385]/50 h-full'>
              <button className='ml-4 z-50' onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon isOpen={isOpen} />
              </button>
            </div>
          </div>
        </main>
      </div>
      <AnimatePresence>
        {isOpen && (
          <NavMenu />
        )}
      </AnimatePresence>
    </>
  )
}

export default MainNav
