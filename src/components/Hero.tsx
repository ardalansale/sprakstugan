'use client';

import Link from 'next/link';
import { BookOpen, Users, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
    const t = useTranslation();

    return (
        <section className="section">
        <div className="container">
            {/* Huvudtext */}
            <div className="mb-12 text-center">
            <h1 className="h1 mb-4">
                {t.Hero.title}
            </h1>
            <p className="body-text max-w-2xl mx-auto mb-8 text-lg">
                {t.Hero.subtitle}
            </p>
            <Link href="/sok-aktiviteter" className="btn primary">
                {t.Hero.cta}
            </Link>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card">
                <div className="flex justify-center mb-4">
                <BookOpen size={32} className="text-blue-600" />
                </div>
                <h3 className="h2 text-center mb-2">Lär dig nya ord</h3>
                <p className="body-text text-center text-sm">
                Bygga upp ditt ordförråd med interaktiva övningar och verkliga exempel.
                </p>
            </div>

            {/* Card 2 */}
            <div className="card">
                <div className="flex justify-center mb-4">
                <Users size={32} className="text-blue-600" />
                </div>
                <h3 className="h2 text-center mb-2">Träna samtal</h3>
                <p className="body-text text-center text-sm">
                Öva på praktiska situationer som du möter i din dagliga liv.
                </p>
            </div>

            {/* Card 3 */}
            <div className="card">
                <div className="flex justify-center mb-4">
                <Zap size={32} className="text-blue-600" />
                </div>
                <h3 className="h2 text-center mb-2">Snabb framgång</h3>
                <p className="body-text text-center text-sm">
                Korta övningar som passar in i din dagliga rutin.
                </p>
            </div>
            </div>
        </div>
    </section>
  );
}