'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Hero from '@/components/Hero';
import ActivityCard from '@/components/ActivityCard';
import Link from 'next/link';
import svMessages from '@/locales/sv.json';
import enMessages from '@/locales/en.json';

interface Activity {
    id: number;
    titleKey: string;
    categoryKey: string;
    descriptionKey: string;
    location: string;
    locationUrl: string;
    image: string;
    date: string;
}

interface ActivityWithTranslations {
    id: number;
    title: string;
    category: string;
    description: string;
    location: string;
    locationUrl: string;
    image: string;
    date: string;
    price: string;
}

const CITIES = [
    { key: 'stockholm', label: 'Stockholm' },
    { key: 'uppsala', label: 'Uppsala' },
];

export default function HomePage() {
    const t = useTranslation();
    const [activities, setActivities] = useState<Record<string, ActivityWithTranslations[]>>({});
    const [selectedCity, setSelectedCity] = useState('stockholm');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                setLoading(true);
                setError(null);

                // Hämta aktiviteter
                const activitiesResponse = await fetch('/data/db.json');
                if (!activitiesResponse.ok) {
                    throw new Error(`Failed to fetch activities: ${activitiesResponse.status}`);
                }
                const rawActivities = await activitiesResponse.json();

                // Detektera språk baserat på useTranslation hook
                const isSwedish = t?.Header?.openMenu === 'Öppna meny';
                const messages = isSwedish ? svMessages : enMessages;

                // Lägg till översättningar till aktiviteterna
                const activitiesWithTranslations: Record<string, ActivityWithTranslations[]> = {};

                for (const [city, cityActivities] of Object.entries(rawActivities)) {
                    activitiesWithTranslations[city] = (cityActivities as Activity[]).map((activity) => {
                        // Hämta city-baserad data från messages
                        const cityData = (messages as any)[city];
                        const activityKey = `activity${activity.id}`;
                        const translation = cityData?.[activityKey];

                        if (!translation) {
                            console.warn(`Missing translation for ${city}/${activityKey}`);
                        }

                        return {
                            id: activity.id,
                            title: translation?.title || 'Untitled',
                            category: translation?.category || 'Uncategorized',
                            description: translation?.description || 'No description',
                            price: translation?.price || 'N/A',
                            location: activity.location,
                            locationUrl: activity.locationUrl,
                            image: activity.image,
                            date: activity.date,
                        };
                    });
                }

                setActivities(activitiesWithTranslations);
            } catch (err) {
                setError(t?.Activities?.loadingError || 'Kunde inte ladda aktiviteter. Försök igen senare.');
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, [t]);

    const filteredActivities = (activities[selectedCity] || []).slice(0, 8);

    return (
        <main>
            <Hero />

            <section className="section">
                <div className="container">
                    <div className="mb-8">
                        <h2 className="h2 mb-2">
                            {t.Home?.weeklyActivities || 'Veckans aktiviteter i'} {CITIES.find(c => c.key === selectedCity)?.label}
                        </h2>
                        <p className="body-text text-gray-600">
                            {t.Home?.weeklyDescription || 'Träffa andra som lär sig svenska'}
                        </p>
                    </div>

                    <div className="mb-8 flex gap-3">
                        {CITIES.map((city) => (
                            <button
                                key={city.key}
                                onClick={() => setSelectedCity(city.key)}
                                className={`filter-pill ${selectedCity === city.key ? 'active' : 'inactive'}`}
                            >
                                {city.label}
                            </button>
                        ))}
                    </div>

                    {error && (
                        <div className="error-banner mb-8">
                            <p className="error-text">{error}</p>
                        </div>
                    )}

                    {loading && (
                        <div className="flex justify-center py-12">
                            <div className="loading-spinner"></div>
                        </div>
                    )}

                    {!loading && !error && (
                        <>
                            {filteredActivities.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                        {filteredActivities.map((activity) => (
                                            <ActivityCard key={activity.id} {...activity} />
                                        ))}
                                    </div>

                                    {/* <div className="text-center">
                                        <Link href="/aktiviteter" className="btn primary">
                                            {t.Home?.seeAllActivities || 'Se alla aktiviteter'}
                                        </Link>
                                    </div> */}
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="body-text text-gray-500">
                                        {t.Home?.noActivities || 'Inga aktiviteter funna för'} {CITIES.find(c => c.key === selectedCity)?.label} {t.Home?.rightNow || 'just nu.'}
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}