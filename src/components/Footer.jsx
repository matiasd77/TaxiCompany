import { FiMapPin, FiPhone } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Taxi Klodi Zguri</h3>
          <p className="mt-3 max-w-md text-sm text-zinc-300">{t('footer.description')}</p>
        </div>
        <div className="space-y-3 text-sm text-zinc-300">
          <p className="flex items-start gap-2">
            <FiMapPin className="mt-0.5 text-base text-yellow-400" />
            {t('contact.locationText')}
          </p>
          <p className="flex items-center gap-2">
            <FiPhone className="text-base text-yellow-400" />
            <a href="tel:+355674908618" className="hover:text-yellow-300">
              +355674908618
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Taxi Klodi Zguri. {t('footer.rights')}
      </div>
    </footer>
  )
}

export default Footer
