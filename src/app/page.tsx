'use client';
import { useTranslation } from '@/hooks/useTranslation';
import Hero from '@/components/Hero';


export default function Home() {
    const t = useTranslation();

    return (
        <main className="p-6">
            <Hero />
        </main>
    );
}
