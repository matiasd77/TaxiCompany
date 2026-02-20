import { FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

function PopularRoutes() {
  const { t } = useTranslation()

  const routes = [
    { title: t('routes.items.airport.title'), desc: t('routes.items.airport.desc'), isGreece: false },
    { title: t('routes.items.tirana.title'), desc: t('routes.items.tirana.desc'), isGreece: false },
    { title: t('routes.items.durres.title'), desc: t('routes.items.durres.desc'), isGreece: false },
    { title: t('routes.items.vlore.title'), desc: t('routes.items.vlore.desc'), isGreece: false },
    { title: t('routes.items.sarande.title'), desc: t('routes.items.sarande.desc'), isGreece: false },
    { title: t('routes.items.thessaloniki.title'), desc: t('routes.items.thessaloniki.desc'), isGreece: true },
    { title: t('routes.items.ioannina.title'), desc: t('routes.items.ioannina.desc'), isGreece: true },
  ]

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <h2 className="text-2xl font-bold text-white md:text-3xl">{t('routes.title')}</h2>
      <h3 className="mt-2 text-lg font-semibold text-yellow-400">{t('routes.subtitle')}</h3>
      <p className="mt-3 max-w-3xl text-zinc-300">{t('routes.intro')}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <article
            key={route.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
          >
            <div className="inline-flex rounded-lg bg-yellow-400/15 p-2.5 text-yellow-400">
              <FiMapPin className="text-lg" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{route.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{route.desc}</p>
            {route.isGreece && (
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-yellow-300">
                {t('routes.greecePricing')}
              </p>
            )}
            <a
              href="tel:+355674908618"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-yellow-400/40 px-4 py-2 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
            >
              <FiPhoneCall />
              {t('common.callNow')}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PopularRoutes
