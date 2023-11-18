import { FireWorks } from '@/components/ui/icons'
import { MotionDiv } from '@/components/ui/motion-div'

function Description () {
  return (
    <section className='px-5 sm:px-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12 w-full h-full max-w-[2000px] mx-auto pt-20 pb-14 sm:py-36 gap-y-10'>
        <MotionDiv once className='flex flex-col gap-y-10 font-transducer text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold'>
          <h2 className='leading-tight'>
            ABRAZAMOS LA CONVERGENCIA DEL{' '}
            <span className='text-entropy-slateGray'>
              ARTE
            </span>{' '}
            CON LA
            <span className='text-entropy-slateGray'>
              {' '}TECNOLOGÍA
            </span>
          </h2>
          <FireWorks />
        </MotionDiv>
        <MotionDiv once delay={0.25} className='flex flex-col justify-center mt-10 sm:mt-auto'>
          <p>
            Ubicados en Santiago de Chile, con presencia en España y Japón, en Entropy Unit nos enorgullece contar con un equipo de profesionales talentosos, altamente capacitados y en constante evolución. Nuestra pasión por el arte y la ingeniería es lo que impulsa cada uno de nuestros proyectos.
            <br />
            <br />
            En cada etapa del proceso de desarrollo, desde la conceptualización hasta la implementación, nuestro enfoque se basa en la excelencia. Nos desafiamos constantemente a nosotros mismos, buscando superar los límites establecidos y ofrecer juegos que sorprendan y cautiven a los jugadores.
          </p>
        </MotionDiv>
      </div>
    </section>
  )
}

export default Description
