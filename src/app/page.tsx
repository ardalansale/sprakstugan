'use client';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
    const t = useTranslation();

    return (
        <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">{t.Home.welcome}</h1>
        <p className="text-lg">{t.Home.description}</p>
        </main>
    );
}
