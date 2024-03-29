import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-[11px] font-semibold font-transducer transition-colors focus-visible:outline-none focus-visible:text-entropy-grayUnit focus-visible:border-entropy-red focus-visible:bg-entropy-red disabled:pointer-events-none disabled:border-entropy-red disabled:text-entropy-grayUnit disabled:bg-entropy-red disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground border hover:bg-entropy-red hover:border-entropy-red',
        secondary: 'bg-entropy-grayUnit text-entropy-black hover:text-entropy-grayUnit'
      },
      size: {
        default: 'h-10 px-4 py-2 rounded-md h-12 px-8 hover:bg-entropy-red'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
