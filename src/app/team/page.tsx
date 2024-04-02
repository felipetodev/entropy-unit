import Description from './components/description'
import TeamHero from './components/hero'
import TeamMarquee from './components/team-marquee'
import SquadGrid from './components/squad-grid'
import Mision from './components/mision'
import { fetchPageContent } from '@/contentful/service'

export const metadata = {
  title: 'Entropy Unit | Team'
}

async function TeamPage () {
  const content = await fetchPageContent('teamPage')
  return (
    <main>
      <TeamHero
        title={content?.heroTitle}
        wallpaper={content.heroImage}
      />
      <Description
        title={content?.teamTitle}
        description={content?.teamDescription}
      />
      <Mision title={content?.teamDescriptionDown ?? ''} />
      <TeamMarquee />
      <SquadGrid grid={content.squadGrid} />
    </main>
  )
}

export default TeamPage
