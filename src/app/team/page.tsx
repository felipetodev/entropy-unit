import Description from './components/description'
import TeamHero from './components/hero'
import TeamMarquee from './components/team-marquee'
import SquadGrid from './components/squad-grid'
import Mision from './components/mision'

export const metadata = {
  title: 'Entropy Unit | Team'
}

function TeamPage () {
  return (
    <main>
      <TeamHero />
      <Description />
      <Mision />
      <TeamMarquee />
      <SquadGrid />
    </main>
  )
}

export default TeamPage
