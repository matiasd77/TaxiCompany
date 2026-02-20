import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'

function PricesPage() {
  const { t } = useTranslation()
  const priceRows = [
    { route: t('prices.rows.cityRide'), daytime: '€--', night: '€--' },
    { route: t('prices.rows.toTirana'), daytime: '€--', night: '€--' },
    { route: t('prices.rows.toAirport'), daytime: '€--', night: '€--' },
    { route: t('prices.rows.toDurres'), daytime: '€--', night: '€--' },
    { route: t('prices.rows.toGreece'), daytime: '€--', night: '€--' },
  ]

  return (
    <>
      <Seo
        title={t('meta.pricesTitle')}
        description={t('meta.pricesDescription')}
        keywords={t('meta.keywords')}
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('prices.heading')}</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">{t('prices.intro')}</p>

        <h2 className="mt-8 text-xl font-semibold text-yellow-400">{t('prices.tableTitle')}</h2>
        <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-zinc-800/80 text-zinc-100">
              <tr>
                <th className="px-5 py-4 font-semibold">{t('prices.route')}</th>
                <th className="px-5 py-4 font-semibold">{t('prices.daytime')}</th>
                <th className="px-5 py-4 font-semibold">{t('prices.night')}</th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map((row) => (
                <tr key={row.route} className="border-t border-zinc-800 text-zinc-300">
                  <td className="px-5 py-4">{row.route}</td>
                  <td className="px-5 py-4">{row.daytime}</td>
                  <td className="px-5 py-4">{row.night}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default PricesPage
