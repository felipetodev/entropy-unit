import Marquee from '@/components/ui/marquee'

const images = [
  'https://images.unsplash.com/photo-1561573047-0db8c33aec3b?auto=format&fit=crop&q=80&w=1992&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1472791108553-c9405341e398?auto=format&fit=crop&q=80&w=2137&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

function WorldVon () {
  return (
    <section>
      <div className='flex items-center justify-center flex-col sm:flex-row'>
        <h2 className='text-7xl md:text-[7rem] font-semibold'>
          EL MUNDO
        </h2>
        <div className='ml-4 flex sm:flex-col text-xl'>
          <h3 className='sm:hidden'>DE THE VOW OF NAZKA</h3>
          <span className='hidden sm:flex'>DE</span>
          <h3 className='hidden sm:flex'>THE VOW</h3>
          <h3 className='hidden sm:flex'>OF NAZKA</h3>
        </div>
      </div>
      <Marquee>
        {images.map((image, i) => (
          // create a random height and width for each image
          <li key={i} className='h-max min-w-[450px] rounded-3xl overflow-hidden'>
            <img className='block h-full w-full object-cover' src={image} alt='tst' />
          </li>
        ))}
      </Marquee>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-[40px] sm:gap-[60px] py-10 px-6'>
        <div className='border-l border-entropy-red max-w-sm'>
          <p className='ml-6'>
            Los Eidolon reinaron en Astrix, otorgando dones a los humanos, incluyendo la clarividencia y la fuerza bruta a "los cazadores".
          </p>
        </div>
        <div className='border-l border-entropy-red max-w-sm'>
          <p className='ml-6'>
            El último cazador se enfrenta a las entidades astrales para liberar almas humanas contaminadas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WorldVon
