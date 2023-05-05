export default function Home() {
  return (
    <main className="bg-[#171717] flex relative h-screen flex-col items-center justify-between overflow-hidden">
      <img className="min-w-[800px] top-[160px] sm:min-w-[1000px] w-full max-w-[1400px] absolute z-20 sm:top-[250px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/icono.png" alt="logo" />
      <img className="min-w-[1400px] top-[110px] absolute z-20 sm:top-[210px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/coming-soon.png" alt="coming soon" />
      <img className="min-w-[50px] absolute z-50 top-[350px] sm:top-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/celta.svg" alt="main-logo" />

      <a href="https://www.instagram.com/thevowofnazka/" target="_blank" className="w-[300px] sm:min-w-[400px] top-[420px] absolute z-30 sm:top-[560px] object-cover max-w-[400px]">
        <img src="/cta.svg" alt="bg-entropy" />
      </a>

      <a href="mailto:entropyunit1@gmail.com" className="min-w-[200px] z-20 absolute top-[650px] sm:top-[790px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="/button.svg" alt="btn" />
      </a>

      <img className='object-cover w-full h-full' src="/bg.png" alt="bg-entropy" />
      <img className='min-w-[900px] absolute top-0 right-0 z-10' src="/advert-top.png" alt="wip-top" />
      <img className='min-w-[900px] absolute bottom-0 left-0 z-10' src="/advert-bottom.png" alt="wip-bottom" />
    </main>
  )
}
