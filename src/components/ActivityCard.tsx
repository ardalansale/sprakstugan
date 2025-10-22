'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface ActivityCardProps {
    id: number;
    title: string;
    category: string;
    description: string;
    location: string;
    locationUrl: string;
    image: string;
    date: string;
}

export default function ActivityCard({
    id,
    title,
    category,
    description,
    location,
    locationUrl,
    image,
    date,
}: ActivityCardProps) {
    return (
        <Link href={`/aktiviteter/${id}`}>
        <div className="activity-card cursor-pointer">
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
            <div className="activity-card-content">
            {/* Kategori tag */}
            <div className="mb-2">
                <span className="activity-tag">{category}</span>
            </div>

            {/* Rubrik */}
            <h3 className="h3 mb-2 line-clamp-2">{title}</h3>

            {/* Datum */}
            <p className="body-text-sm mb-3 text-gray-500">{date}</p>

            {/* Beskrivning */}
            <p className="body-text-sm mb-4 line-clamp-2">{description}</p>

            {/* Plats */}
            <div className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="body-text-sm text-blue-600 underline">{location}</p>
            </div>
            </div>
        </div>
        </Link>
    );
}