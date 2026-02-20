import { FaWhatsapp } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

function WhatsAppButton() {
  const { t } = useTranslation()

  return (
    <>
      <a
        href="tel:+355674908618"
        className="fixed bottom-4 left-3 z-40 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3.5 py-2.5 text-xs font-semibold text-black shadow-lg transition hover:bg-yellow-300 sm:bottom-6 sm:left-6 sm:px-4 sm:py-3 sm:text-sm"
        aria-label={t('floating.callAria')}
      >
        <FiPhoneCall className="text-base" />
        {t('common.callNow')}
      </a>

      <a
        href="https://wa.me/355674908618"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-3 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        aria-label={t('floating.whatsAppAria')}
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  )
}

export default WhatsAppButton
