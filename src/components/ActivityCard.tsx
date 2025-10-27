'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

interface ActivityCardProps {
    id: number;
    title: string;
    category: string;
    description: string;
    location: string;
    locationUrl: string;
    image: string;
    date: string;
    price?: string;
}

// Kategori-färger
const categoryColorMap: Record<string, { bg: string; text: string; border: string }> = {
    'Språkcafé': {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-300',
    },
    'Konversation': {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-300',
    },
    'Möte': {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-300',
    },
    'Träff': {
        bg: 'bg-pink-100',
        text: 'text-pink-700',
        border: 'border-pink-300',
    },
    'Language Café': {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-300',
    },
    'Conversation': {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-300',
    },
    'Meeting': {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-300',
    },
    'Meet Up': {
        bg: 'bg-pink-100',
        text: 'text-pink-700',
        border: 'border-pink-300',
    },
};

// Fallback färg om kategorin inte finns
const defaultColor = {
    bg: 'bg-gray-100',
    text: 'text-gray-700',
    border: 'border-gray-300',
};

export default function ActivityCard({
    id,
    title,
    category,
    description,
    location,
    locationUrl,
    image,
    date,
    price = 'Pris saknas',
}: ActivityCardProps) {
    const colors = categoryColorMap[category] || defaultColor;

    return (
        <div className="activity-card">
            {/* Bild */}
            <div className="relative">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={200}
                    className="activity-card-image"
                />
            </div>

            {/* Innehåll */}
            <div className="activity-card-content flex flex-col h-full">
                {/* Kategori tag med dynamisk färg */}
                <div className="mb-3">
                    <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                        {category}
                    </span>
                </div>

                {/* Rubrik */}
                <h3 className="h3 mb-2 line-clamp-2">{title}</h3>

                {/* Beskrivning */}
                <p className="body-text-sm mb-4 line-clamp-2 text-gray-600">{description}</p>

                {/* Spacer för att push info ner */}
                <div className="flex-grow"></div>

                {/* Info sektion */}
                <div className="space-y-2 mb-4 pt-4 border-t border-gray-200">
                    {/* Datum */}
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-500 flex-shrink-0" />
                        <p className="text-base font-medium text-gray-900">{date}</p>
                    </div>

                    {/* Plats */}
                    <div className="flex items-start gap-2">
                        <MapPin size={16} className="text-gray-500 mt-0.5 flex-shrink-0" />
                        <a
                            href={locationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium text-blue-600 hover:text-blue-700 hover:underline"
                        >
                            {location}
                        </a>
                    </div>

                    {/* Pris */}
                    <div className="flex items-center gap-2">
                        <DollarSign size={16} className="text-gray-500 flex-shrink-0" />
                        <p className="text-base font-bold text-green-600">{price}</p>
                    </div>
                </div>

                {/* Länk knapp */}
                <Link
                    href={locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors"
                >
                    Hitta hit →
                </Link>
            </div>
        </div>
    );
}