'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sv' | 'en';

type LanguageContextType = {
    locale: Language;
    setLocale: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Language>('sv');

    return (
        <LanguageContext.Provider value={{ locale, setLocale }}>
        {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
}
