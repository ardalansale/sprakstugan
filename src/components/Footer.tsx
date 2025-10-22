'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
    const t = useTranslation();

    return (
        <footer className="bg-gray-900 text-white mt-16">

        {/* Footer */}
        <div className="container py-12">
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Kolumn 1: Om Språkstugan */}
            <div>
                <h4 className="font-bold text-lg mb-4">
                {t.Footer?.aboutTitle || 'Om Språkstugan'}
                </h4>
                <ul className="space-y-2">
                <li>
                    <Link href="/om-oss" className="hover:text-blue-400 transition">
                    {t.Footer?.aboutLink || 'Om oss'}
                    </Link>
                </li>
                <li>
                    <Link href="/kontakta-oss" className="hover:text-blue-400 transition">
                    {t.Footer?.contactLink || 'Kontakta oss'}
                    </Link>
                </li>
                <li>
                    <Link href="/jobba-med-oss" className="hover:text-blue-400 transition">
                    {t.Footer?.careersLink || 'Jobba med oss'}
                    </Link>
                </li>
                </ul>
            </div>

            {/* Kolumn 2: Aktiviteter */}
            <div>
                <h4 className="font-bold text-lg mb-4">
                {t.Footer?.activitiesTitle || 'Aktiviteter'}
                </h4>
                <ul className="space-y-2">
                <li>
                    <Link href="/aktiviteter" className="hover:text-blue-400 transition">
                    {t.Footer?.allActivities || 'Alla aktiviteter'}
                    </Link>
                </li>
                <li>
                    <Link href="/aktiviteter?city=Stockholm" className="hover:text-blue-400 transition">
                    {t.Footer?.stockholmActivities || 'Aktiviteter Stockholm'}
                    </Link>
                </li>
                <li>
                    <Link href="/aktiviteter?city=Uppsala" className="hover:text-blue-400 transition">
                    {t.Footer?.uppsalaActivities || 'Aktiviteter Uppsala'}
                    </Link>
                </li>
                </ul>
            </div>

            {/* Kolumn 3: Policy */}
            <div>
                <h4 className="font-bold text-lg mb-4">
                {t.Footer?.policyTitle || 'Policy'}
                </h4>
                <ul className="space-y-2">
                <li>
                    <Link href="/privacy" className="hover:text-blue-400 transition">
                    {t.Footer?.privacyPolicy || 'Integritetspolicy'}
                    </Link>
                </li>
                <li>
                    <Link href="/terms" className="hover:text-blue-400 transition">
                    {t.Footer?.termsLink || 'Användarvillkor'}
                    </Link>
                </li>
                </ul>
            </div>

            {/* Kolumn 4: Sociala medier */}
            <div>
                <h4 className="font-bold text-lg mb-4">
                {t.Footer?.followTitle || 'Följ oss'}
                </h4>
                <div className="flex gap-4">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                    aria-label="Instagram"
                >
                    <Instagram size={24} />
                </a>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                    aria-label="Facebook"
                >
                    <Facebook size={24} />
                </a>
                <a
                    href="mailto:kontakt@sprakstugan.se"
                    className="hover:text-blue-400 transition"
                    aria-label="Email"
                >
                    <Mail size={24} />
                </a>
                </div>
            </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-8 pt-8">
            <p className="text-center text-gray-400 text-sm">
                {t.Footer?.copyright || '© 2025 Språkstugan. Alla rättigheter förbehållna.'}
            </p>
            </div>
        </div>
        </footer>
    );
}