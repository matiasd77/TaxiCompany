import { FaBusinessTime, FaPlaneArrival, FaTaxi } from 'react-icons/fa'
import { FiGlobe, FiMapPin } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'

function ServicesPage() {
  const { t } = useTranslation()
  const services = [
    {
      title: t('services.items.taxi247Title'),
      icon: FaTaxi,
      description: t('services.items.taxi247Desc'),
    },
    {
      title: t('services.items.airportTitle'),
      icon: FaPlaneArrival,
      description: t('services.items.airportDesc'),
    },
    {
      title: t('services.items.intercityTitle'),
      icon: FiMapPin,
      description: t('services.items.intercityDesc'),
    },
    {
      title: t('services.items.greeceTitle'),
      icon: FiGlobe,
      description: t('services.items.greeceDesc'),
    },
    {
      title: t('services.items.businessTitle'),
      icon: FaBusinessTime,
      description: t('services.items.businessDesc'),
    },
  ]

  return (
    <>
      <Seo
        title={t('meta.servicesTitle')}
        description={t('meta.servicesDescription')}
        keywords={t('meta.keywords')}
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('services.heading')}</h1>
          <p className="mt-4 text-zinc-300">{t('services.intro')}</p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=1400&q=80"
            alt={t('services.imageAlt')}
            className="h-56 w-full object-cover"
            loading="lazy"
          />
        </div>

        <h2 className="mt-10 text-2xl font-bold text-white">{t('services.mainTitle')}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, description }) => (
            <article key={title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="inline-flex rounded-lg bg-yellow-400/15 p-3 text-yellow-400">
                <Icon className="text-xl" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
