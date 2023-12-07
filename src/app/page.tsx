import Carousel from '@/components/carousel-blog'
import CaosSection from '@/components/caos-section'
import Hero from '@/components/hero'
import Subscribe from '@/components/subscribe'
import { cards } from '@/lib/constants'

export default function Home () {
  return (
    <>
      <Hero />
      <CaosSection />
      <Carousel cards={cards} />
      <Subscribe />
    </>
  )
}
