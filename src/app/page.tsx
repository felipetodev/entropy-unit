import CaosSection from '@/components/caos-section'
import Hero from '@/components/hero'
import Subscribe from '@/components/subscribe'

export default function Home () {
  return (
    <main>
      <Hero />
      <CaosSection />
      <section className='mt-24 h-[500px] text-6xl grid place-content-center'>
        TODO: Carousel here
      </section>
      <Subscribe />
    </main>
  )
}
