import { cn } from '@/lib/utils'

function Video ({ className = '', src = '', ...props }) {
  return (
    <video
      loop
      muted
      autoPlay
      playsInline
      className={cn('block w-full h-full object-cover object-bottom', className)}
      src={src}
      {...props}
    />
  )
}

export default Video
