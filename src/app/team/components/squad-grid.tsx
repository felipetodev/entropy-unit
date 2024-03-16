import { cn } from '@/lib/utils'

type RowProps = {
  fields: Array<{
    title: string
    team: string[]
  }>
}

type GridProps = {
  grid: Array<{
    rowOne: RowProps
    rowTwo: RowProps
    rowThree: RowProps
  }>
}

function SquadGrid ({ grid }: GridProps) {
  const [{ rowOne, rowTwo, rowThree }] = grid ?? [{}]
  return (
    <section className='bg-gradient-to-t from-[#121212] from-20% to-100% to-entropy-blueUnit px-5 sm:px-10 py-24'>
      <div className='flex flex-col md:flex-row font-transducer min-h-[200px] lg:h-[220px]'>
        {rowOne?.fields.map((discipline, index) => (
          <div
            key={index} className={cn('flex flex-1 flex-col py-4 sm:p-4 lg:p-5 gap-y-5 border-b border-entropy-slateGray min-w-[180px]', {
              'md:border-x': index === 1
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
      <div className='flex flex-col md:flex-row font-transducer min-h-[200px] lg:h-[220px]'>
        {rowTwo?.fields.map((discipline, index) => (
          <div
            key={index} className={cn('flex flex-1 flex-col py-4 sm:p-4 lg:p-5 gap-y-5 border-b border-entropy-slateGray min-w-[180px]', {
              'md:border-x': index === 1
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
      <div className='flex flex-col md:flex-row font-transducer min-h-[200px] lg:h-[220px]'>
        {rowThree?.fields.map((discipline, index) => (
          <div
            key={index} className={cn('flex flex-1 flex-col py-4 sm:p-4 lg:p-5 gap-y-5 border-b sm:border-b-transparent border-entropy-slateGray min-w-[180px]', {
              'md:border-x': index === 1
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
