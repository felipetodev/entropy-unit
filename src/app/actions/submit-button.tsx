'use client'

import { useFormStatus } from 'react-dom'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'
import { Button } from '@/components/ui/button'

export function SubmitButton ({ className, children, ...props }: any) {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      disabled={pending}
      aria-disabled={pending}
      className={cn('w-max', className)}
      {...props}
    >
      {pending ? <Spinner className='w-7 h-7 animate-spin' /> : children}
    </Button>
  )
}
