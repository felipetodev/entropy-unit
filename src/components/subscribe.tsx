function Subscribe () {
  return (
    <section className='bg-[#0a0a0a] px-5 sm:px-10'>
      <div className='py-32 max-w-7xl mx-auto space-y-8'>
        <span className='flex justify-center'>
          <svg width='114' height='19' viewBox='0 0 114 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M113.235 0.598999L95.365 18.469M97.465 0.598999L79.595 18.469M81.705 0.598999L63.835 18.469M65.935 0.598999L48.065 18.469M50.165 0.598999L32.305 18.469M34.405 0.598999L16.535 18.469M18.635 0.598999L0.765015 18.469' stroke='white' strokeMiterlimit='10' />
          </svg>
        </span>
        <h2 className='[text-wrap:balance] text-center font-transducer text-lg sm:text-2xl font-semibold'>
          ÚNETE A NUESTRO BOLETÍN SEMANAL Y MANTENTE INFORMADO SOBRE EL DESARROLLO DE THE VOW OF NAZKA.
        </h2>
        <form action='' className='flex flex-col'>
          <div className='flex flex-col sm:flex-row w-full sm:border-y sm:rounded-r-md overflow-hidden [&_input]:border-y sm:[&_input]:border-none gap-y-6 sm:gap-y-0'>
            <input
              required
              name='id'
              type='text'
              placeholder='TU EMAIL'
              className='rounded-none uppercase font-transducer w-full bg-transparent outline-none py-4 placeholder:text-entropy-slateGray placeholder:font-semibold'
            />
            <button className='mx-auto w-max text-xs sm:text-base rounded-md sm:rounded-none font-transducer h-11 sm:h-16 px-4 bg-entropy-neutral text-entropy-black text font-semibold transition hover:bg-white/60'>
              SUSCRIBETE
            </button>
          </div>
        </form>
        <p className='text-xs text-center sm:text-start font-transducer text-entropy-red font-semibold'>
          INGRESA UN EMAIL VÁLIDO
        </p>
      </div>
    </section>
  )
}

export default Subscribe
