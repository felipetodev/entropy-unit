export default function Home() {
  return (
    <main className="bg-[#171717] flex relative h-screen flex-col items-center justify-between overflow-hidden">

      <div className="z-20 absolute flex flex-col items-center gap-10 w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img className="h-[200px] sm:min-h-[300px]" src="/TITLE.svg" alt="main-logo" />
        <img className="h-28" src="/celta.svg" alt="main-logo" />

        <a href="https://www.instagram.com/thevowofnazka/" target="_blank">
          <img src="/cta.svg" alt="bg-entropy" />
        </a>

        <a href="mailto:entropyunit1@gmail.com" className="bg-[#c70039] border-2 border-transparent rounded-[10px] hover:border-[#e81551] hover:opacity-90">
          <img src="/button.svg" alt="btn" />
        </a>
      </div>

      {/* Background */}
      <img className='object-cover w-full h-full' src="/bg.png" alt="bg-entropy" />
      <img className='min-w-[900px] absolute top-0 right-0 z-10' src="/advert-top.png" alt="wip-top" />
      <img className='min-w-[900px] absolute bottom-0 left-0 z-10' src="/advert-bottom.png" alt="wip-bottom" />
    </main>
  )
}
