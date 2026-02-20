import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enTranslation from './locales/en/translation.json'
import alTranslation from './locales/al/translation.json'
import grTranslation from './locales/gr/translation.json'

const resources = {
  en: { translation: enTranslation },
  al: { translation: alTranslation },
  gr: { translation: grTranslation },
}

const syncHtmlLang = (lang) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'al', 'gr'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'taxi-klodi-zguri-lang',
    },
  })

syncHtmlLang(i18n.resolvedLanguage || 'en')
i18n.on('languageChanged', syncHtmlLang)

export default i18n
