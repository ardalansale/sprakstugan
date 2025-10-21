// components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations('Header');
    const router = useRouter();
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const switchLanguage = (locale: string) => {
        const newPath = pathname.replace(/^\/(en|sv)/, `/${locale}`);
        router.push(newPath);
        closeMenu();
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md">
            <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-gray-800">
                        {t('logo')}
                    </Link>

                    <button 
                        onClick={toggleMenu}
                        className="p-2"
                    >
                        {isMenuOpen ? (
                            <span className="text-2xl">✕</span>
                        ) : (
                            <span className="text-2xl">☰</span>
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
                        <div className="p-6">
                            <div className="flex justify-end mb-8">
                                <button 
                                    onClick={closeMenu}
                                    className="text-2xl p-2"
                                >
                                    ✕
                                </button>
                            </div>

                            <nav className="flex flex-col space-y-6">
                                <Link 
                                    href="/om-oss" 
                                    className="text-3xl font-bold text-gray-800"
                                    onClick={closeMenu}
                                >
                                    {t('about')}
                                </Link>
                                
                                <Link 
                                    href="/kontakta-oss" 
                                    className="text-3xl font-bold text-gray-800"
                                    onClick={closeMenu}
                                >
                                    {t('contact')}
                                </Link>
                                
                                <Link 
                                    href="/nyhetsbrev" 
                                    className="text-3xl font-bold text-gray-800"
                                    onClick={closeMenu}
                                >
                                    {t('newsletter')}
                                </Link>
                                
                                <Link 
                                    href="/jobba-med-oss" 
                                    className="text-3xl font-bold text-gray-800"
                                    onClick={closeMenu}
                                >
                                    {t('careers')}
                                </Link>
                                
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-2xl font-bold mb-4">{t('changeLanguage')}</p>
                                    <div className="flex space-x-4">
                                        <button 
                                            onClick={() => switchLanguage('sv')}
                                            className="text-xl font-bold text-gray-800"
                                        >
                                            Svenska
                                        </button>
                                        <button 
                                            onClick={() => switchLanguage('en')}
                                            className="text-xl font-bold text-gray-800"
                                        >
                                            English
                                        </button>
                                    </div>
                                </div>
                                
                                <Link 
                                    href="/sok-aktiviteter" 
                                    className="text-3xl font-bold text-gray-800"
                                    onClick={closeMenu}
                                >
                                    {t('searchActivities')}
                                </Link>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;