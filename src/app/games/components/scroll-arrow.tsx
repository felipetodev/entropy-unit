'use client'

import { ArrowDownNavigation } from '@/components/ui/icons'
import { MotionDiv } from '@/components/ui/motion-div'

function ScrollArrow () {
  const handleScrollDown = () => {
    const sectionDiv = document.getElementById('down')
    sectionDiv?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <MotionDiv delay={0.6} className='sm:self-end mt-[30px] sm:mt-auto'>
      <button onClick={handleScrollDown} className='sm:-mb-4 flex items-center justify-center sm:justify-normal gap-x-5'>
        <p>Descubre más</p>
        <ArrowDownNavigation className='h-8 w-8 sm:w-20 sm:h-20' />
        <span className='sr-only'>Scroll Down</span>
      </button>
    </MotionDiv>
  )
}

export default ScrollArrow
