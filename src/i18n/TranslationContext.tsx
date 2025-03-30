import React, { createContext, useContext, useState } from 'react';
import { en } from './en';
import { fi } from './fi';
import { Language, Translations, TranslationSection } from './types';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: TranslationSection) => string;
}

const translations: Record<Language, Translations> = {
  en,
  fi,
};

export const TranslationContext = createContext<TranslationContextType | null>(null);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string, section: TranslationSection = 'ui'): string => {
    const sectionTranslations = translations[language][section];
    const translation = section === 'elements' 
      ? (sectionTranslations as Record<string, string>)[key]
      : (sectionTranslations as Record<string, string>)[key];
      
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in section: ${section}`);
      return key;
    }
    return translation;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}; 