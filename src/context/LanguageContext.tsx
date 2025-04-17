import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './translations';

export type Language = 'ua' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ua');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}

export function useTranslation() {
  const { language } = useLanguage();
  function t(key: string): string {
    return translations[language][key] || key;
  }
  return { t };
}
