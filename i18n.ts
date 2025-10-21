// i18n.ts
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Enkel koll - bara 'en' eller 'sv' är tillåtna
    if (locale !== 'en' && locale !== 'sv') {
    notFound();
    }

    return {
    locale: locale,
    messages: (await import(`./locales/${locale}.json`)).default
    };
});