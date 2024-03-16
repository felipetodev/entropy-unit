import { Suspense } from 'react'
import Carousel from '@/components/carousel'
import CaosSection from '@/components/caos-section'
import Hero from '@/components/hero'
import Subscribe from '@/components/subscribe'
import CarouselSkeleton from '@/components/carousel-skeleton'
import { fetchPageContent } from '@/contentful/service'

export default async function Home () {
  const content = await fetchPageContent('homePage')

  return (
    <>
      <Hero
        video={content.heroWallpaper}
        logo={content.heroLogo}
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        buttonTitle={content.heroButtonTitle}
        buttonLink={content.heroButtonLink}
      />
      <CaosSection
        title={content.aboutUsTitle}
        description={content.aboutUsDescription}
        buttonTitle={content.aboutUsButtonTitle}
        buttonLink={content.aboutUsButtonLink}
      />
      <Suspense fallback={<CarouselSkeleton />}>
        <Carousel />
      </Suspense>
      <Subscribe copy={content.newsletterTitle} />
    </>
  )
}
