'use client'

import { useFormStatus } from 'react-dom'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'

export function SubmitButton ({ className, children, ...props }: any) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
      aria-disabled={pending}
      className={cn('w-max px-6 h-12 border text-xs rounded-md font-transducer hover:bg-entropy-red hover:border-entropy-red transition-all',
        className,
        {
          'bg-entropy-red border-entropy-red': pending
        })}
      {...props}
    >
      {pending ? <Spinner className='w-7 h-7 animate-spin' /> : children}
    </button>
  )
}
