'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslation();
    const { setLocale } = useLanguage();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const switchLanguage = (locale: 'sv' | 'en') => {
        setLocale(locale);
        closeMenu();
    };

    return (
        // ====== HEADER WRAPPER ======
        <header className="header-wrapper">
            <div className="container py-4">
                {/* ====== NAVBAR (logo + hamburgare) ====== */}
                <div className="flex items-center justify-between relative z-[60]">
    {/* LOGO */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Logo className="w-24 h-auto text-blue-600" />
                    </Link>

                    {/* HAMBURGER / CLOSE ICON */}
                    <button onClick={toggleMenu} className="text-black">
                        {isMenuOpen ? <X size={42} /> : <Menu size={42} />}
                    </button>
                </div>

                {/* ====== SLIDE-IN MENU ====== */}
                <div
                    className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} mobile-menu`}
                >
                    {/* MENY-INNEHÅLL CENTRERAT */}
                    <div className="p-6 flex flex-col items-center justify-center h-full">
                        {/* ====== NAVIGATIONSLÄNKAR ====== */}
                        <nav className="flex flex-col space-y-6 items-center text-center">
                            <Link href="/" className="nav-link" onClick={closeMenu}>
                                {t.Header.landingPage}
                            </Link>
                            <Link href="/sok-aktiviteter" className="nav-link" onClick={closeMenu}>
                                {t.Header.searchActivities}
                            </Link>
                            <Link href="/om-oss" className="nav-link" onClick={closeMenu}>
                                {t.Header.about}
                            </Link>
                            <Link href="/kontakta-oss" className="nav-link" onClick={closeMenu}>
                                {t.Header.contact}
                            </Link>
                            <Link href="/nyhetsbrev" className="nav-link" onClick={closeMenu}>
                                {t.Header.newsletter}
                            </Link>
                            <Link href="/jobba-med-oss" className="nav-link" onClick={closeMenu}>
                                {t.Header.careers}
                            </Link>

                            {/* ====== SPRÅKVAL MED FLAGGOR ====== */}
                            <div className="pt-4 border-t border-gray-200 text-black w-full">
                                <p className="text-2xl font-bold mb-4">
                                    {t.Header.changeLanguage}
                                </p>
                                <div className="flex space-x-6 justify-center">
                                    <button
                                        onClick={() => switchLanguage('sv')}
                                        className="lang-button"
                                    >
                                        <Image
                                            src="/sv-flag.svg"
                                            alt="Svenska"
                                            width={24}
                                            height={24}
                                        />
                                        <span>Svenska</span>
                                    </button>
                                    <button
                                        onClick={() => switchLanguage('en')}
                                        className="lang-button"
                                    >
                                        <Image
                                            src="/uk-flag.svg"
                                            alt="English"
                                            width={24}
                                            height={24}
                                        />
                                        <span>English</span>
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
