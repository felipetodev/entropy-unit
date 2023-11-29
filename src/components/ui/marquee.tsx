'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

type Props = {
  className?: string
  direction?: 'left' | 'right'
  children: React.ReactNode
}

function Marquee ({ className, direction = 'left', children }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    scrollerRef.current?.setAttribute('data-animated', 'true')
    listRef.current?.setAttribute('data-animated', 'true')
    if (direction === 'right') listRef.current?.setAttribute('data-direction', 'right')

    const listItems = Array.from(listRef.current?.children ?? [])

    listItems.forEach((item) => {
      const duplicate = item.cloneNode(true) as HTMLElement
      duplicate.setAttribute('aria-hidden', 'true')
      listRef.current?.appendChild(duplicate)
    })
  }, [])

  return (
    <div ref={scrollerRef} className={cn('w-full inline-flex flex-nowrap data-[animated=true]:overflow-hidden', className)}>
      <ul
        ref={listRef}
        className={cn('flex gap-20 py-4 data-[animated=false]:flex-wrap data-[animated=true]:animate-infinite-scroll data-[animated=true]:w-max data-[animated=true]:flex-nowrap data-[direction=right]:animate-infinite-scroll-reverse')}
      >
        {children}
      </ul>
    </div>
  )
}

export default Marquee
