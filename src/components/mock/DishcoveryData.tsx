import React from "react";

export interface DiscographyType {
    id: number;
    title: string;
    releaseDate: string;
    imageUrl: string;
    type: string;
}

export const releases: DiscographyType[] = [
    {
        id: 1,
        title: "Midnight Dreams",
        releaseDate: "2025-12-10",
        imageUrl: "https://images.pexels.com/photos/35740982/pexels-photo-35740982.jpeg",
        type: "ALBUM"
    },
    {
        id: 2,
        title: "Summer Vibes",
        releaseDate: "2025-08-02",
        imageUrl: "https://images.pexels.com/photos/2400594/pexels-photo-2400594.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400&h=250&fit=crop&crop=focalpoint",
        type: "SINGLE"
    },
    {
        id: 3,
        title: "Acoustic Sessions",
        releaseDate: "2024-11-15",
        imageUrl: "https://images.pexels.com/photos/6131932/pexels-photo-6131932.jpeg",
        type: "EP"
    }
];
