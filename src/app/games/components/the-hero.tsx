import { Frame2 } from '@/components/ui/frames'

function TheHero () {
  return (
    <section className='py-28 px-5 md:px-20 mt-36'>
      <div className='relative grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[100px] w-full h-full max-w-[2000px] mx-auto'>
        <div className='order-last sm:order-none flex flex-col justify-center gap-y-10 z-10'>
          <h2 className='font-semibold text-4xl font-transducer'>
            EL HÉROE
          </h2>
          <p>
            El último cazador (FALTA NOMBRE) es un jóven de 18 años, huérfano y criado por la aldea.
            <br />
            <br />
            Es un cazador nato, con habilidades para la batalla cuerpo a cuerpo y el uso de armas. Su objetivo es encontrar su origen y liberar a su pueblo.
          </p>
        </div>
        <div className='bg-neutral-500 h-[500px] rounded-3xl overflow-hidden'>
          <video playsInline loop className='block object-none h-full w-full object-[50%,50%]' src='/ride.mp4' muted autoPlay />
        </div>
        <Frame2 className='absolute w-full -left-20 sm:left-0 -top-40 sm:ml-20' />
      </div>
    </section>
  )
}

export default TheHero
