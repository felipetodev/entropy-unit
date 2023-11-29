import { Frame2 } from '@/components/ui/frames'
import Video from '@/components/ui/video'

function TheHero () {
  return (
    <section className='relative py-28 mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[100px] px-5 md:px-20 w-full h-full max-w-[2000px] mx-auto'>
        <div className='order-last md:order-none flex flex-col justify-center gap-y-10 z-10'>
          <h2 className='font-semibold text-4xl font-transducer'>
            EL HÉROE
          </h2>
          <p>
            En este mundo sólo los magos pueden soñar, pero contadas personas en la historia pueden controlar sus sueños como tú.
            <br />
            <br />
            Con tu potencial y determinación de reconstruir lo que perdieron, recluta a tus aliados y aprende acerca de los gremios y sus clases para forjar nuevos juramentos y recuperar los castillos perdidos de los gremios.
          </p>
        </div>
        <div className='bg-neutral-500 h-[500px] rounded-3xl overflow-hidden'>
          <Video src='/ride.mp4' className='object-none object-[50%,50%]' />
        </div>
      </div>
      <Frame2 className='absolute top-0 !-left-8 sm:-left-1 w-fit md:left-0 mt-32 md:mt-auto h-[600px] md:h-[calc(100%+50px)] md:w-full md:ml-20' />
    </section>
  )
}

export default TheHero
