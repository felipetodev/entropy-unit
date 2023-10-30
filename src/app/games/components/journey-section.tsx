import { Frame } from '@/components/ui/frames'

function JourneySection () {
  return (
    <section className='py-28 px-5 md:px-20 overflow-hidden'>
      <div className='relative grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[100px] w-full h-full max-w-[2000px] mx-auto'>
        <div className='bg-neutral-500 h-[500px] rounded-3xl overflow-hidden'>
          <video playsInline loop className='block object-none h-full w-full object-[50%,50%]' src='/ride.mp4' muted autoPlay />
        </div>
        <div className='flex flex-col justify-center gap-y-10 z-10'>
          <h2 id='the-journey' className='scroll-m-[580px] sm:scroll-m-[260px] font-semibold text-4xl font-transducer'>EL VIAJE</h2>
          <p>
            Acompaña al último cazador en su búsqueda por su identidad y la liberación de su pueblo de las entidades astrales.
            <br />
            <br />
            El juego combina combate cuerpo a cuerpo, habilidades de caza y la invocación de dioses para desbloquear poderes especiales.
          </p>
        </div>
        <Frame className='absolute -right-8 -top-32 sm:-top-36 md:-top-20 lg:-top-16 w-full' />
      </div>
    </section>
  )
}

export default JourneySection
