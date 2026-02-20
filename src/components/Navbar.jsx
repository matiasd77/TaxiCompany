import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const navItems = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.services', to: '/services' },
  { labelKey: 'nav.prices', to: '/prices' },
  { labelKey: 'nav.contact', to: '/contact' },
]

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'al', label: 'Albanian', flag: '🇦🇱' },
  { code: 'gr', label: 'Greek', flag: '🇬🇷' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const activeLang = i18n.resolvedLanguage || 'en'

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-yellow-500/20 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="rounded-md bg-yellow-400 px-2 py-1 text-sm font-bold text-black">TAXI</span>
          <span className="text-sm font-semibold tracking-wide text-zinc-100 sm:text-base">Klodi Zguri</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-yellow-400' : 'text-zinc-200 hover:text-yellow-300'}`
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div
            className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/80 p-1"
            aria-label={t('nav.languageSwitcherLabel')}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => handleLanguageChange(language.code)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                  activeLang === language.code
                    ? 'bg-yellow-400 text-black'
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-yellow-300'
                }`}
                aria-label={language.label}
              >
                <span className="inline-flex items-center gap-1.5">
                  <span>{language.flag}</span>
                  <span className="hidden lg:inline">{language.label}</span>
                </span>
              </button>
            ))}
          </div>
          <a
            href="tel:+355674908618"
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            <FiPhoneCall className="text-base" />
            {t('nav.callNow')}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-zinc-100 md:hidden"
          aria-label={t('nav.toggleMenu')}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-2 py-2 text-sm font-medium ${isActive ? 'bg-zinc-800 text-yellow-400' : 'text-zinc-200'}`
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
            <div className="mt-2 inline-flex w-full items-center justify-between rounded-full border border-zinc-700 bg-zinc-900 p-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => handleLanguageChange(language.code)}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                    activeLang === language.code
                      ? 'bg-yellow-400 text-black'
                      : 'text-zinc-300 hover:bg-zinc-800 hover:text-yellow-300'
                  }`}
                  aria-label={language.label}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span>{language.flag}</span>
                    <span>{language.label}</span>
                  </span>
                </button>
              ))}
            </div>
            <a
              href="tel:+355674908618"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black"
            >
              <FiPhoneCall className="text-base" />
              {t('nav.callNow')}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
