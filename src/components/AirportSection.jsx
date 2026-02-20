import { FiCheckCircle, FiPhoneCall } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import airportPhoto from '../assets/Airport.jpg'

function AirportSection() {
  const { t } = useTranslation()

  const highlights = [
    t('airport.point1'),
    t('airport.point2'),
    t('airport.point3'),
    t('airport.point4'),
  ]

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <div className="grid items-center gap-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:grid-cols-2 md:p-8">
        <div className="animate-fade-up overflow-hidden rounded-xl border border-zinc-700/70">
          <img
            src={airportPhoto}
            alt={t('airport.imageAlt')}
            className="h-72 w-full object-cover md:h-96"
            loading="lazy"
          />
        </div>

        <div className="animate-fade-up-delay">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{t('airport.title')}</h2>
          <h3 className="mt-3 text-lg font-semibold text-yellow-400">{t('airport.subtitle')}</h3>
          <p className="mt-4 text-zinc-300">{t('airport.intro')}</p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-200">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <FiCheckCircle className="mt-0.5 text-base text-yellow-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="tel:+355674908618"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            <FiPhoneCall />
            {t('common.callNow')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default AirportSection
