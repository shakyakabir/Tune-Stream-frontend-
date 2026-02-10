import React from "react";

export interface popularType {
    id: number;
    title: string;
    duration: string;
    plays: string;
    isLiked: boolean
}

export const Populars: popularType[] = [
    {
        id: 1,
        title: "Midnight Echo",
        duration: "3:42",
        plays: "12.4M",
        isLiked: true
    },
    {
        id: 2,
        title: "Neon Dreams",
        duration: "4:05",
        plays: "9.8M",
        isLiked: false
    },
    {
        id: 3,
        title: "Ocean Lights",
        duration: "2:58",
        plays: "6.3M",
        isLiked: false
    }
]
