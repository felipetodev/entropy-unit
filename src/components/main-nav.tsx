'use client'

import Link from 'next/link'

function MainNav () {
  return (
    <div className='fixed top-0 left-0 w-full h-20 z-30 mt-5'>
      <main className='flex h-full mx-5 sm:px-10 border-b border-[#6F7385]/50'>
        <Link href='/'>
          <img className='block h-14' src='navbar-logo.svg' alt='Entropy Unit' />
        </Link>
        <div className='ml-auto flex items-center space-x-4'>
          <div className='flex items-center border-l border-[#6F7385]/50 h-full'>
            <button className='ml-4 z-50'>
              MENU
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MainNav
