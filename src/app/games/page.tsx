import Hero from '@/app/games/components/hero'
import JourneySection from '@/app/games/components/journey-section'
import WorldVon from './components/world-von'
import TheHero from './components/the-hero'
import Release from './components/release-section'
import { fetchPageContent } from '@/contentful/service'

export const metadata = {
  title: 'Entropy Unit | Games'
}

async function GamesPage () {
  const content = await fetchPageContent('gamesPage')
  return (
    <main>
      <Hero
        title={content.heroTitle}
        buttonScrollCopy={content.heroScrollButtonTitle}
        image={content.heroImage}
        logo={content.heroLogo}
        platformIcons={content.heroPlatformIcons}
        platformCopy={content.heroPlatformDetailCopy}
      />
      <JourneySection
        title={content.journeyTitle}
        description={content.journeyDescription}
        asset={content.journeyVideo}
      />
      <WorldVon
        images={content.carousel}
        leftDescription={content.carouselDescriptionLeft}
        rightDescription={content.carouselDescriptionRight}
      />
      <TheHero
        title={content.characterTitle}
        description={content.characterDescription}
        asset={content.characterVideo}
      />
      <Release
        title={content.releaseTitle}
        releaseDate={content.releaseDateTitle}
        platformIcons={content.releasePlatformIcons}
        platformCopy={content.releasePlatformDetailCopy}
      />
    </main>
  )
}

export default GamesPage
