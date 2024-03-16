import BlogButton from './ui/blog-button'

export default function CarouselSkeleton () {
  return (
    <section className='mb-24 grid gap-y-10 place-content-center'>
      <div className='embla z-20 overflow-hidden'>
        <div className='embla__container flex gap-x-10 mx-auto [&_figure]:rounded-[20px] [&_figure]:min-w-[16rem] sm:[&_figure]:min-w-[23rem] lg:[&_figure]:min-w-[32rem]'>
          <article className='grid gap-y-3 p-1'>
            <figure className='relative flex items-end overflow-hidden z-10 h-[342px] lg:h-[430px]'>
              <div className='absolute w-full h-[262px] lg:h-[350px] rounded-[20px] bg-entropy-red/10' />
            </figure>
          </article>
          <article className='grid gap-y-3 p-1'>
            <figure className='relative flex items-end overflow-hidden z-10 h-[342px] lg:h-[430px]'>
              <div className='absolute w-full h-[262px] lg:h-[350px] rounded-[20px] bg-entropy-red/10' />
            </figure>
          </article>
          <article className='grid gap-y-3 p-1'>
            <figure className='relative flex items-end overflow-hidden z-10 h-[342px] lg:h-[430px]'>
              <div className='absolute w-full h-[262px] lg:h-[350px] rounded-[20px] bg-entropy-red/10' />
            </figure>
          </article>
        </div>
      </div>
      <BlogButton />
    </section>
  )
}
