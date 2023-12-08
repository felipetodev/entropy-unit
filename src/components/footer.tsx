import { IconDiscord, IconInstagram, IconLinkedIn, IconYoutube } from './ui/icons'
import FooterLinks from './footer-links'

const SOCIALS = [
  {
    component: <IconInstagram className='h-7 w-7 sm:w-5 sm:h-5 lg:w-7 lg:h-7' />,
    name: 'Instagram',
    url: 'https://www.instagram.com/thevowofnazka'
  },
  {
    component: <IconDiscord className='h-7 w-7 sm:w-5 sm:h-5 lg:w-7 lg:h-7' />,
    name: 'Discord',
    url: 'https://discord.com/invite/nkfU4xeRht'
  },
  {
    component: <IconLinkedIn className='h-7 w-7 sm:w-5 sm:h-5 lg:w-7 lg:h-7' />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/entropy-unit'
  },
  {
    component: <IconYoutube className='h-7 w-7 sm:w-5 sm:h-5 lg:w-7 lg:h-7' />,
    name: 'Youtube',
    url: '#'
  }
]

function Footer () {
  return (
    <div className='bg-entropy-darkBlue py-8 px-5 sm:px-10'>
      <footer className='max-w-[2000px] mx-auto space-y-10'>
        <header className='flex flex-col font-transducer md:flex-row gap-y-10 items-center py-8 border-b-[0.5px] border-entropy-slateGray'>
          <p className='md:mr-6 font-semibold text-xs lg:text-base'>
            MANTENTE AL DÍA
          </p>
          <ul className='flex space-x-10 sm:space-x-8 items-center [&_a]:transition'>
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  aria-label={social.name}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-entropy-red focus-visible:text-entropy-red'
                >
                  {social.component}
                </a>
              </li>
            ))}
          </ul>
          <FooterLinks />
        </header>
        <img loading='lazy' className='block w-full' src='/entropy-unit-big-text.svg' alt='Entropy Unit' />
        <div className='group flex flex-col md:flex-row justify-between text-entropy-slateGray text-xs'>
          <span className='text-[10px] md:text-[12px]'>
            © Copyright 2023, Entropy Unit.
          </span>
          <a href='https://www.sebastianhansonstudio.com' target='_blank' className='text-[10px] md:text-[12px] focus-visible:underline' rel='noreferrer'>
            Diseño y desarrollo{' '}<span className='group-hover:underline'>Sebastian Hanson Studio</span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
