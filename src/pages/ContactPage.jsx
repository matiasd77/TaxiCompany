import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'

function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t('meta.contactTitle')}
        description={t('meta.contactDescription')}
        keywords={t('meta.keywords')}
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('contact.heading')}</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">{t('contact.intro')}</p>

        <h2 className="mt-8 text-xl font-semibold text-yellow-400">{t('contact.detailsTitle')}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-sm text-zinc-300">
            <p className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-base text-yellow-400" />
              {t('contact.locationText')}
            </p>
            <p className="flex items-center gap-3">
              <FiPhone className="text-base text-yellow-400" />
              <a href="tel:+355674908618" className="hover:text-yellow-300">
                +355674908618
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FiClock className="text-base text-yellow-400" />
              {t('contact.availabilityText')}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold text-yellow-400">{t('contact.quickRequestTitle')}</h3>
            <p className="mt-3 text-sm text-zinc-300">{t('contact.quickRequestText')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+355674908618"
                className="rounded-lg bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
              >
                {t('common.callNow')}
              </a>
              <a
                href="https://wa.me/355674908618"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-green-500 hover:text-green-400"
              >
                {t('common.whatsAppChat')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
