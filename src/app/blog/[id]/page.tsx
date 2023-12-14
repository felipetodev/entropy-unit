import Link from 'next/link'

function BlogPost () {
  return (
    <div className='max-w-5xl mx-auto min-h-screen px-5 sm:px-10 pb-[100px] pt-[170px]'>
      <div className='flex flex-col gap-y-[60px]'>
        <div className='flex flex-col gap-y-[30px]'>
          <Link href='/blog' className='flex items-center text-entropy-blue transition-colors hover:underline hover:opacity-50'>
            <svg className='mr-2' width='22' height='18' viewBox='0 0 22 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M9.8165 16.8167L1.99994 9.00015M1.99994 9.00015L9.8165 1.18359M1.99994 9.00015L21.1161 9.00015' stroke='#F2F2F2' stroke-width='2' stroke-miterlimit='10' />
            </svg>
            Dev Blog
          </Link>
          <h1 className='font-transducer text-xl sm:text-2xl md:text-4xl font-semibold'>
            Title Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <div className='flex flex-col gap-y-5 justify-between sm:flex-row sm:gap-y-0 sm:items-center'>
            <div className='flex space-x-4'>
              <div className='w-[30px] h-[30px] sm:h-[50px] sm:w-[50px] bg-entropy-grayUnit rounded-full' />
              <div>
                <h4 className='font-bold text-sm sm:text-base'>Por Javier Gonzalez</h4>
                <span className='text-entropy-slateGray text-xs sm:text-sm'>Lead Developer</span>
              </div>
            </div>
            <span className='text-entropy-slateGray text-sm'>
              Nov 15, 2023
            </span>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Volutpat sed cras ornare arcu dui vivamus arcu felis. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. At erat pellentesque adipiscing commodo elit at. Fermentum posuere urna nec tincidunt praesent. Velit dignissim sodales ut eu.

          Tempor orci eu lobortis elementum. Sem et tortor consequat id porta nibh venenatis cras sed. Consequat interdum varius sit amet. Tortor at risus viverra adipiscing at. Rhoncus mattis rhoncus urna neque viverra. Faucibus vitae aliquet nec ullamcorper sit amet. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. In pellentesque massa placerat duis ultricies lacus sed turpis.
        </p>

        <div>
          <div className='h-[150px] sm:h-[300px] bg-entropy-grayUnit rounded-lg' />
        </div>

        {/* This is a markdown */}
        <div className='flex flex-col'>
          <h3 className='mb-10 font-semibold text-2xl'>
            Subtitle Cras adipiscing enim eu turpis
          </h3>
          <p>
            Subtitle Cras adipiscing enim eu turpis

            Egestas pretium. Enim sit amet venenatis urna. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Sagittis orci a scelerisque purus semper eget duis at. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.

            Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Nisi vitae suscipit tellus mauris. Placerat vestibulum lectus mauris ultrices eros. Imperdiet proin fermentum leo vel orci porta non pulvinar. Mattis vulputate enim nulla aliquet porttitor lacus luctus

            Sit amet commodo nulla facilisi nullam vehicula ipsum a. A cras semper auctor neque. Suscipit adipiscing bibendum est ultricies integer. Integer enim neque volutpat ac tincidunt vitae. Nisl nunc mi ipsum faucibus vitae aliquet nec. Eget felis eget nunc lobortis mattis aliquam faucibus. Tortor aliquam nulla facilisi cras. Nulla posuere sollicitudin aliquam ultrices Link Entropy Unit Discord

            Odio aenean sed adipiscing diam donec adipiscing tristique risus. Urna et pharetra pharetra massa. Vel turpis nunc eget lorem. Nunc lobortis mattis aliquam faucibus purus in massa. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Enim sed faucibus turpis in. Pretium viverra suspendisse potenti nullam ac tortor vitae purus.

          </p>
        </div>

      </div>
    </div>
  )
}

export default BlogPost
