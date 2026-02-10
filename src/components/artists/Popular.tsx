import React, { useEffect, useState } from "react";
import type { popularType } from "../mock/PopularTracks";
import { FaHeart } from "react-icons/fa";
import "./Popular.scss"; // optional styling
import { FaPlay } from "react-icons/fa6";

interface PopularProps {
    popular: popularType;
    index: number; // to show the track number
}

const Popular: React.FC<PopularProps> = ({ data, index }) => {
    const [isHoverd, setIsHovered] = useState(false);


    return (
        <div className="popular-track" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* Track number */}
            {isHoverd ? (
                <div className="show"><FaPlay /></div>
            ) : (
                <div className={isHoverd ? "track-number" : "hide"}>{index + 1}</div>
            )
            }

            {/* Title and album */}
            <div className="track-info">
                <span className="track-title">{data.title}</span>
                <span className="track-album">{data.album}</span>
            </div>

            {/* Plays */}
            <div className="track-plays">{data.plays}</div>

            {/* Like */}
            <div className="track-like">
                {data.isLiked ? <FaHeart className="liked" /> : <FaHeart className="unlike" />}
            </div>

            {/* Duration */}
            <div className="track-duration">{data.duration}</div>
        </div>
    );
};

export default Popular;
