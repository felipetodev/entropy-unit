import { WordByWord } from '@/components/ui/word-by-word'

function Mision ({ title }: { title: string }) {
  return (
    <section className='px-5 sm:px-10 flex flex-col gap-y-[60px] sm:gap-y-[100px] pt-8 pb-32 sm:pb-24'>
      <img className='mx-auto max-w-max block aspect-[5/9] w-full h-[60px]' src='eu-symbol.svg' alt='logo' />
      <WordByWord className='uppercase font-transducer max-w-4xl mx-auto text-xl text-entropy-slateGray font-semibold text-center space-x-2'>
        {title}
      </WordByWord>
    </section>
  )
}

export default Mision
