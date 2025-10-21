// src/app/[locale]/page.tsx
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Home');

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
            <p className="text-lg">{t('description')}</p>
        </div>
    );
}
