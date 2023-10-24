import Hero from '@/app/games/components/hero'
import JourneySection from '@/app/games/components/journey-section'
import WorldVon from './components/world-von'
import TheHero from './components/the-hero'
import Release from './components/release-section'

function GamesPage () {
  return (
    <main>
      <Hero />
      <JourneySection />
      <WorldVon />
      <TheHero />
      <Release />
    </main>
  )
}

export default GamesPage
