export default function Home() {
  return (
    <main className="bg-[#171717] flex relative h-screen flex-col items-center justify-between overflow-hidden">
      <img className="min-w-[1000px] absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/icono.png" alt="logo" />
      <img className="min-w-[1000px] absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/coming-soon.png" alt="coming soon" />
      <img className='object-cover w-full h-full' src="/bg.png" alt="bg-entropy" />
      <img className='min-w-[900px] absolute top-0 right-0 z-10' src="/advert-top.png" alt="wip-top" />
      <img className='min-w-[900px] absolute bottom-0 left-0 z-10' src="/advert-bottom.png" alt="wip-bottom" />
    </main>
  )
}
