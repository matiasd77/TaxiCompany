import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import AirportSection from '../components/AirportSection'
import PopularRoutes from '../components/PopularRoutes'
import MapSection from '../components/MapSection'

function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t('meta.homeTitle')}
        description={t('meta.homeDescription')}
        keywords={t('meta.keywords')}
      />
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1800&q=80")',
          }}
          role="img"
          aria-label={t('hero.bgAlt')}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" />

        <div className="relative mx-auto grid min-h-[70vh] w-full max-w-6xl items-center gap-10 px-4 py-12 sm:min-h-[78vh] sm:px-6 sm:py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-300">
              <FiClock />
              {t('common.available247')}
            </p>
            <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {t('hero.headline')}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-zinc-200 sm:text-lg">
              {t('hero.subheadline')}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="tel:+355674908618"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 sm:w-auto"
              >
                <FiPhoneCall />
                {t('common.callNow')}
              </a>
              <a
                href="https://wa.me/355674908618"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-green-500/80 bg-green-500/10 px-6 py-3 text-sm font-semibold text-green-200 transition hover:bg-green-500/20 sm:w-auto"
              >
                <FaWhatsapp className="text-base" />
                {t('common.whatsApp')}
              </a>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-500/60 bg-black/30 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-yellow-400/60 hover:text-yellow-300 sm:w-auto"
              >
                {t('common.bookNow')}
                <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="animate-fade-up-delay rounded-2xl border border-zinc-700/70 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80"
              alt={t('hero.sideImageAlt')}
              className="h-44 w-full rounded-lg object-cover"
              loading="lazy"
            />
            <h2 className="mt-5 text-lg font-semibold text-yellow-400">{t('hero.whyTitle')}</h2>
            <ul className="mt-5 space-y-4 text-sm text-zinc-200">
              <li className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                <h3 className="font-semibold text-white">{t('hero.reasons.fastTitle')}</h3>
                <p className="mt-1 text-zinc-300">{t('hero.reasons.fastDesc')}</p>
              </li>
              <li className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                <h3 className="font-semibold text-white">{t('hero.reasons.qualityTitle')}</h3>
                <p className="mt-1 text-zinc-300">{t('hero.reasons.qualityDesc')}</p>
              </li>
              <li className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                <h3 className="font-semibold text-white">{t('hero.reasons.transferTitle')}</h3>
                <p className="mt-1 text-zinc-300">{t('hero.reasons.transferDesc')}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-white">{t('home.coverageTitle')}</h2>
        <div className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:grid-cols-3">
          <div className="rounded-lg bg-zinc-950 p-5">
            <h3 className="text-xs uppercase tracking-wide text-zinc-400">{t('home.locationTitle')}</h3>
            <p className="mt-2 flex items-start gap-2 text-sm text-zinc-200">
              <FiMapPin className="mt-0.5 text-yellow-400" />
              {t('home.locationText')}
            </p>
          </div>
          <div className="rounded-lg bg-zinc-950 p-5">
            <h3 className="text-xs uppercase tracking-wide text-zinc-400">{t('home.serviceAreaTitle')}</h3>
            <p className="mt-2 text-sm text-zinc-200">{t('home.serviceAreaText')}</p>
          </div>
          <div className="rounded-lg bg-zinc-950 p-5">
            <h3 className="text-xs uppercase tracking-wide text-zinc-400">{t('home.availabilityTitle')}</h3>
            <p className="mt-2 text-sm text-zinc-200">{t('home.availabilityText')}</p>
          </div>
        </div>
      </section>

      <AirportSection />
      <PopularRoutes />
      <MapSection />
    </>
  )
}

export default HomePage
