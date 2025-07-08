import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md mr-2 ${i18n.language === 'en' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-3 py-1 rounded-md ${i18n.language === 'fr' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        Français
      </button>
    </div>
  );
};

export default LanguageSwitcher;
