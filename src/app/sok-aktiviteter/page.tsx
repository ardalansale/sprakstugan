'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import ActivityCard from '@/components/ActivityCard';
import { Search } from 'lucide-react';

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

    export default function ActivitiesPage() {
    const t = useTranslation();
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedCity, setSelectedCity] = useState('Stockholm');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Hämta aktiviteter från JSON Server
    useEffect(() => {
        const fetchActivities = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3001/activities');
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

    // Filtrera aktiviteter efter stad och sökterm
    const filteredActivities = activities.filter((activity) => {
        const matchesCity = activity.city === selectedCity;
        const matchesSearch =
        activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.category.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCity && matchesSearch;
    });

    return (
        <main className="section">
        <div className="container">
            {/* Rubrik */}
            <div className="mb-8">
            <h1 className="h1 mb-4">{t.Activities?.title || 'Alla aktiviteter'}</h1>
            <p className="body-text text-gray-600">
                {t.Activities?.description || 'Hitta alla språkrelaterade aktiviteter i'} {selectedCity}
            </p>
            </div>

            {/* Stad Filter */}
            <div className="mb-8">
            <p className="body-text font-semibold mb-3">{t.Activities?.selectCity || 'Välj stad:'}</p>
            <div className="flex gap-3 flex-wrap">
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
            </div>

            {/* Sökfält */}
            <div className="mb-8">
            <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                type="text"
                placeholder="Sök på aktiviteter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
            </div>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredActivities.map((activity) => (
                    <ActivityCard key={activity.id} {...activity} />
                    ))}
                </div>
                ) : (
                <div className="text-center py-12">
                    <p className="body-text text-gray-500">
                    {t.Activities?.noActivitiesFound || 'Inga aktiviteter funna.'}
                    {searchQuery && ` ${t.Activities?.tryDifferentSearch || 'Prova en annan sökterm.'}`}
                    </p>
                </div>
                )}
            </>
            )}
        </div>
        </main>
  );
}