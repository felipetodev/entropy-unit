import { FireWorks } from '@/components/ui/icons'
import { MotionDiv } from '@/components/ui/motion-div'
import ReactMarkdown from 'react-markdown'

function Description ({ title, description }: { title: string, description: string }) {
  return (
    <section className='px-5 sm:px-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12 w-full h-full max-w-[2000px] mx-auto pt-20 pb-14 sm:py-36 gap-y-10'>
        <MotionDiv once className='flex flex-col gap-y-10 text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold'>
          <ReactMarkdown
            className='leading-tight font-transducer'
            components={
            {
              strong: ({ node, ...props }) => <strong {...props} className='text-entropy-slateGray font-semibold font-transducer' />
            }
          }
          >
            {title}
          </ReactMarkdown>
          <FireWorks />
        </MotionDiv>
        <MotionDiv once delay={0.25} className='flex flex-col justify-center mt-10 sm:mt-auto'>
          <ReactMarkdown
            className='flex flex-col gap-y-6'
          >
            {description}
          </ReactMarkdown>
        </MotionDiv>
      </div>
    </section>
  )
}

export default Description
