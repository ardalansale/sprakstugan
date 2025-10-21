import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export const useTranslation = () => {
    const { locale } = useLanguage();
    return translations[locale as keyof typeof translations];
};
