'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Hero from '@/components/Hero';
import ActivityCard from '@/components/ActivityCard';
import Link from 'next/link';

interface Activity {
    id: number;
    title: string;
    category: string;
    description: string;
    location: string;
    locationUrl: string;
    image: string;
    date: string;
    city: string;
    }

    const CITIES = ['Stockholm', 'Uppsala'];

    export default function HomePage() {
    const t = useTranslation();
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedCity, setSelectedCity] = useState('Stockholm');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Hämta aktiviteter från JSON Server
    useEffect(() => {
        const fetchActivities = async () => {
        try {
            setLoading(true);
            const response = await fetch('/data/db.json');
            const raw = await response.json();
            setActivities(raw.activities);
            if (!response.ok) throw new Error('Failed to fetch activities');
            const data = await response.json();
            setActivities(data);
            setError(null);
        } catch (err) {
            setError('Kunde inte ladda aktiviteter. Försök igen senare.');
            console.error(err);
        } finally {
            setLoading(false);
        }
        };

        fetchActivities();
    }, []);

    // Filtrera aktiviteter efter stad och ta endast 8
    const filteredActivities = activities
        .filter((activity) => activity.city === selectedCity)
        .slice(0, 8);

    return (
        <main>
        {/* Hero */}
        <Hero />

        {/* Veckans aktiviteter */}
        <section className="section">
            <div className="container">
            {/* Rubrik + stad info */}
            <div className="mb-8">
                <h2 className="h2 mb-2">
                {t.Home?.weeklyActivities || 'Veckans aktiviteter i'} {selectedCity}
                </h2>
                <p className="body-text text-gray-600">
                {t.Home?.weeklyDescription || 'Träffa andra som lär sig svenska'}
                </p>
            </div>

            {/* Stad Filter */}
            <div className="mb-8 flex gap-3">
                {CITIES.map((city) => (
                <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`filter-pill ${
                    selectedCity === city ? 'active' : 'inactive'
                    }`}
                >
                    {city}
                </button>
                ))}
            </div>

            {/* Error banner */}
            {error && (
                <div className="error-banner mb-8">
                <p className="error-text">{error}</p>
                </div>
            )}

            {/* Loading state */}
            {loading && (
                <div className="flex justify-center py-12">
                <div className="loading-spinner"></div>
                </div>
            )}

            {/* Activities grid */}
            {!loading && !error && (
                <>
                {filteredActivities.length > 0 ? (
                    <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {filteredActivities.map((activity) => (
                        <ActivityCard key={activity.id} {...activity} />
                        ))}
                    </div>

                    {/* Knapp för alla aktiviteter */}
                    <div className="text-center">
                        <Link href="/aktiviteter" className="btn primary">
                        Se alla aktiviteter
                        </Link>
                    </div>
                    </>
                ) : (
                    <div className="text-center py-12">
                    <p className="body-text text-gray-500">
                        Inga aktiviteter funna för {selectedCity} just nu.
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