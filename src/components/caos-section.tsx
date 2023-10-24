
function CaosSection () {
  return (
    <section className='md:h-[572px] px-5 sm:px-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12 w-full h-full max-w-[2000px] mx-auto'>
        <div className='relative w-full flex justify-center h-[320px] md:h-full'>
          <img
            className='absolute object-contain block z-10 -mt-28 h-[500px] md:h-auto'
            src='/pj.png'
            alt='entropy pj'
          />
        </div>
        <div className='flex flex-col justify-center gap-y-10'>
          <h2 className='font-transducer text-xl sm:text-3xl lg:text-4xl font-semibold [text-wrap:balance]'>
            DEL CAOS A LA EVOLUCIÓN
          </h2>
          <p className='[text-wrap:balance]'>
            Entropy Unit es más que solo un estudio de videojuegos. Somos narradores de corazón, comprometidos con contar historias de forma única y cautivadora. Reunido en Chile, nuestro equipo de profesionales dedicados abarca un conglomerado de apasionados por el arte y la ingeniería, cada uno aportando su toque único a nuestras creaciones.
          </p>
          <button className='md:max-w-fit font-transducer font-normal text-[11px] border rounded-md h-12 px-6'>
            CONOCE EL ESTUDIO
          </button>
        </div>
      </div>
    </section>
  )
}

export default CaosSection
