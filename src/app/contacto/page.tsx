import ContactMarquee from './components/contact-marquee'
import ContactForm from './components/contact-form'
import Subscribe from '@/components/subscribe'
import { MotionDiv } from '@/components/ui/motion-div'
import { fetchPageContent } from '@/contentful/service'
import ReactMarkdown from 'react-markdown'

export const metadata = {
  title: 'Entropy Unit | Contact'
}

async function ContactPage () {
  const content = await fetchPageContent('contactPage')
  return (
    <main>
      <section className='flex flex-col items-center pt-[170px] pb-[100px] px-5 sm:px-10'>
        <div className='flex flex-col gap-y-10'>
          <MotionDiv className='text-3xl sm:text-6xl font-semibold font-transducer text-center'>
            {content.contactTitle}
          </MotionDiv>
          {content.contactDescription && (
            <MotionDiv delay={0.5} className='text-center text-balance uppercase'>
              <ReactMarkdown>
                {content.contactDescription}
              </ReactMarkdown>
            </MotionDiv>
          )}
        </div>
        <ContactForm emailTo={content.emailContactForm} />
      </section>
      <ContactMarquee
        title={content.emailSliderCopy}
        email={content.emailSliderLink}
      />
      <Subscribe copy={content.newsletterTitle} />
    </main>
  )
}

export default ContactPage
