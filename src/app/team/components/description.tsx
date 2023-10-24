function Description () {
  return (
    <>
      <section className='px-5 sm:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12 w-full h-full max-w-[2000px] mx-auto py-14 sm:py-36 gap-y-10'>
          <div className='flex flex-col font-transducer text-xl sm:text-3xl lg:text-4xl font-semibold'>
            <h2>
              ABRAZAMOS LA CONVERGENCIA DEL{' '}
              <span className='text-entropy-slateGray'>
                ARTE
              </span>{' '}
              CON LA
              <span className='text-entropy-slateGray'>
                {' '}TECNOLOGÍA
              </span>
            </h2>
            <svg width='215' height='27' viewBox='0 0 215 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M197.93 13.3798L1.16972e-06 13.3797M184.54 -0.000237207L184.54 26.7598M194.01 3.91976L175.08 22.8398M175.08 3.91976L194.01 22.8398M214.32 21.4598L214.32 5.28977' stroke='white' strokeMiterlimit='10' />
            </svg>

          </div>
          <div className='flex flex-col justify-center'>
            <p className=''>
              Ubicados en Santiago de Chile, con presencia en España y Japón, en Entropy Unit nos enorgullece contar con un equipo de profesionales talentosos, altamente capacitados y en constante evolución. Nuestra pasión por el arte y la ingeniería es lo que impulsa cada uno de nuestros proyectos.
              <br />
              <br />
              En cada etapa del proceso de desarrollo, desde la conceptualización hasta la implementación, nuestro enfoque se basa en la excelencia. Nos desafiamos constantemente a nosotros mismos, buscando superar los límites establecidos y ofrecer juegos que sorprendan y cautiven a los jugadores.
            </p>
          </div>
        </div>
      </section>
      <section className='px-5 sm:px-10 flex flex-col gap-y-[60px] sm:gap-y-[100px] pt-8 pb-24'>
        <img className='block aspect-[5/9] w-full h-[60px]' src='eu-symbol.svg' alt='logo' />
        <p className='font-transducer max-w-4xl mx-auto text-xl text-entropy-slateGray font-semibold text-center'>
          En Entropy Unit, creemos en el poder de la sinergia entre el arte y la ingeniería. Nuestro objetivo es crear experiencias significativas que despierten la imaginación y dejen una huella duradera en el corazón de quienes las disfrutan.
        </p>
      </section>
    </>
  )
}

export default Description
