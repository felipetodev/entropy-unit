import { cn } from '@/lib/utils'

const ROW_1 = [
  {
    title: 'PROGRAMMING',
    team: [
      'Javier Gonzalez',
      'Arturo Von Senger'
    ]
  },
  {
    title: 'MANAGEMENT',
    team: [
      'Angus Pollmann',
      'Javier Gonzalez',
      'Freddy Gazali'
    ]
  },
  {
    title: 'MARKETING AND BUSINESS',
    team: [
      'Cristobal Olmedo',
      'Cristobal Orellana',
      'Fabian Godoy',
      'Freddy Gazali'
    ]
  }
]

const ROW_2 = [
  {
    title: 'GAME DESIGN',
    team: [
      'Angus Pollmann'
    ]
  },
  {
    title: 'WRITERS',
    team: [
      'Isidora Molina',
      'Angus Pollmann'
    ]
  },
  {
    title: '2D ART',
    team: [
      'Catalina Carlesi (Alpaca)',
      'Cristobal Ferrer (Yitan)'
    ]
  }
]

const ROW_3 = [
  {
    title: '3D ART',
    team: [
      'Camilo Fuentes',
      'Eckart Krumbach'
    ]
  },
  {
    title: 'UI/UX',
    team: [
      'Fabian Godoy'
    ]
  },
  {
    title: 'AUDIO AND SOUND DESIGN',
    team: [
      'Freddy Gazali'
    ]
  }
]

function SquadGrid () {
  return (
    <section className='bg-gradient-to-t from-[#121212] from-20% to-100% to-entropy-blueUnit px-5 sm:px-10 py-24'>
      <div className='flex flex-col sm:flex-row font-transducer sm:h-[220px]'>
        {ROW_1.map((discipline, index) => (
          <div
            key={index} className={cn('flex flex-1 flex-col py-4 sm:p-4 lg:p-5 gap-y-5 border-b border-entropy-slateGray min-w-[180px]', {
              'sm:border-x': index === 1
            })}
          >
            <h2 className='text-lg font-semibold'>{discipline.title}</h2>
            <ul className='font-semibold leading-relaxed text-entropy-slateGray'>
              {discipline.team.map((member, i) => (
                <li key={i}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex flex-col sm:flex-row font-transducer sm:h-[220px]'>
        {ROW_2.map((discipline, index) => (
          <div
            key={index} className={cn('flex flex-1 flex-col py-4 sm:p-4 lg:p-5 gap-y-5 border-b border-entropy-slateGray min-w-[180px]', {
              'sm:border-x': index === 1
            })}
          >
            <h2 className='text-lg font-semibold'>{discipline.title}</h2>
            <ul className='font-semibold leading-relaxed text-entropy-slateGray'>
              {discipline.team.map((member, i) => (
                <li key={i}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex flex-col sm:flex-row font-transducer sm:h-[220px]'>
        {ROW_3.map((discipline, index) => (
          <div
            key={index} className={cn('flex flex-1 flex-col py-4 sm:p-4 lg:p-5 gap-y-5 border-b sm:border-b-transparent border-entropy-slateGray min-w-[180px]', {
              'sm:border-x': index === 1
            })}
          >
            <h2 className='text-lg font-semibold'>{discipline.title}</h2>
            <ul className='font-semibold leading-relaxed text-entropy-slateGray'>
              {discipline.team.map((member, i) => (
                <li key={i}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SquadGrid
