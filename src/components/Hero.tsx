'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
    const t = useTranslation();

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center"
            style={{ backgroundImage: "url('/hero-bg.webp')" }}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-blue-900/70 z-0"></div>

            <div className="container text-center px-4">
                <h1 className="h1 mb-4 drop-shadow-lg text-white ">
                    {t.Hero?.title || 'Välkommen till Språkstugan'}
                </h1>
                <h3 className="h3 max-w-2xl mx-auto drop-shadow-md text-white">
                    {t.Hero?.subtitle || 'Hitta språkcaféer, träffar och aktiviteter där du kan öva svenska, träffa andra och få stöd i vardagen. Här samlar vi mötesplatser där du kan lära dig tillsammans med andra, utbyta erfarenheter och bygga nya relationer'}
                </h3>
            </div>
        </section>
    );
}