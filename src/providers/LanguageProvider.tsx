import { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageContext from '../contexts/LanguageContext';

type LanguageProviderProps = {
 children: React.ReactNode
};

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const changeLanguage = useCallback(() => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'ru' : 'en');
  }, [language]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ lang: language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
