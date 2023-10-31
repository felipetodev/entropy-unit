function TeamHero () {
  return (
    <section className='relative h-[320px] sm:h-[800px]'>
      <img className='block w-full h-full object-cover' src='/team.webp' alt='team-hero' />
      <div className='absolute bottom-0 flex flex-col md:space-y-3 font-transducer text-3xl sm:text-6xl lg:text-7xl font-semibold p-5 sm:px-10 sm:pb-[60px]'>
        <h4>
          SOMOS
        </h4>
        <h1 className='mr-14 sm:mr-auto'>
          ENTROPY UNIT
        </h1>
      </div>
    </section>
  )
}

export default TeamHero
