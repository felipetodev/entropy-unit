import Subscribe from '@/components/subscribe'
import TeamHero from '../team/components/hero'
import { fetchPageContent } from '@/contentful/service'

export default async function Blog () {
  const content = await fetchPageContent('joinPage')

  return (
    <>
      <TeamHero
        className='sm:h-[650px]'
        title={content?.heroTitle}
        wallpaper={content.heroWallpaper}
      />
      <Subscribe
        isJoinNewsletter
        copy={content.newsletterTitle}
      />
    </>
  )
}
