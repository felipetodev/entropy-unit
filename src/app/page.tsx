import Carousel from '@/components/carousel-blog'
import CaosSection from '@/components/caos-section'
import Hero from '@/components/hero'
import Subscribe from '@/components/subscribe'

const Cards = [
  {
    id: 'Card 1',
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  },
  {
    id: 'Card 2',
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  },
  {
    id: 'Card 3',
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'

  },
  {
    id: 'Card 4',
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  },
  {
    id: 'Card 5',
    title: 'Duis aute irure dolor in reprehenderit in voluptate.',
    date: new Date().toISOString(),
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  }
]

export default function Home () {
  return (
    <main>
      <Hero />
      <CaosSection />
      <Carousel cards={Cards} />
      <Subscribe />
    </main>
  )
}
