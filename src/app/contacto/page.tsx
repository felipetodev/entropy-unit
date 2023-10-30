import ContactMarquee from './components/contact-marquee'
import ContactForm from './components/contact-form'
import Subscribe from '@/components/subscribe'

function ContactPage () {
  return (
    <main>
      <section className='flex flex-col items-center pt-[170px] pb-[100px] px-5 sm:px-10'>
        <div className='flex flex-col gap-y-10'>
          <h1 className='text-3xl sm:text-6xl font-semibold font-transducer text-center'>
            ¿NECESITAS DECIRNOS ALGO?
          </h1>
          <p className='uppercase'>
            ¿Necesitas materiales de prensa? ¿Tienes una solicitud de medios?
            Para consultas sobre medios, consultas generalES y otros, por favor completa el siguiente formulario.
          </p>
        </div>
        <ContactForm />
      </section>
      <ContactMarquee />
      <Subscribe />
    </main>
  )
}

export default ContactPage
