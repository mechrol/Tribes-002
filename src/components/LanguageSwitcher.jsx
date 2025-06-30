import React, { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  
  const languages = [
    { code: 'en', name: t('english'), flag: '🇺🇸' },
    { code: 'pl', name: t('polish'), flag: '🇵🇱' },
    { code: 'es', name: t('spanish'), flag: '🇪🇸' },
    { code: 'fr', name: t('french'), flag: '🇫🇷' },
    { code: 'de', name: t('german'), flag: '🇩🇪' },
    { code: 'it', name: t('italian'), flag: '🇮🇹' },
    { code: 'pt', name: t('portuguese'), flag: '🇵🇹' },
    { code: 'id', name: t('indonesian'), flag: '🇮🇩' },
    { code: 'da', name: t('danish'), flag: '🇩🇰' }
  ]
  
  const currentLang = languages.find(lang => lang.code === currentLanguage)
  
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => setLanguage(language.code)}
          className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium transition-all ${
            currentLanguage === language.code
              ? 'bg-primary-100 text-primary-700 ring-2 ring-primary-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          title={language.name}
        >
          <span className="text-sm">{language.flag}</span>
          <span className="hidden sm:inline">{language.name}</span>
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
