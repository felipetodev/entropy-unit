import { Frame } from '@/components/ui/frames'
import Video from '@/components/ui/video'

function JourneySection () {
  return (
    <section className='relative py-28 overflow-hidden'>
      <div className='px-5 md:px-20 relative grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[100px] w-full h-full max-w-[2000px] mx-auto'>
        <div className='bg-neutral-500 h-[500px] rounded-3xl overflow-hidden'>
          <Video src='/ride.mp4' className='object-none object-[50%,50%]' />
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
      </div>
      <Frame className='absolute top-[120px] sm:top-20 md:top-10 -right-32 w-[500px] sm:w-[600px] md:w-full' />
    </section>
  )
}

export default JourneySection
