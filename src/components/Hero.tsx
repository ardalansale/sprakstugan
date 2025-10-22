'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
    const t = useTranslation();

    return (
        <section className="section bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container">
            <div className="text-center">
            <h1 className="h1 mb-4">
                {t.Hero?.title || 'Välkommen till Språkstugan'}
            </h1>
            <p className="body-text max-w-2xl mx-auto">
                {t.Hero?.subtitle || 'Hitta språkcaféer, träffar och möten där du kan lära dig svenska tillsammans med andra.'}
            </p>
            </div>
        </div>
        </section>
    );
}