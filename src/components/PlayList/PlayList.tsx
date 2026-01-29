import React from "react";
import PlaylistItem from "./PlaylistItem";
import "./Playlist.scss";

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  plays: string;
  duration: string;
  cover: string;
  song: song[];
}
interface song {
  id: string;
  title: string;
  artist: string;
  album: string;
  plays: string;
  duration: string;
  cover: string;
}

// const tracks: Track[] = [
//   {
//     id: 1,
//     title: "Neon Nights",
//     artist: "Cyber Echo",
//     album: "Digital Dreams",
//     plays: "2.1M",
//     duration: "3:42",
//     cover: "/artist-1.jpg",
//   },
//   {
//     id: 2,
//     title: "Starlight",
//     artist: "Aurora Wave",
//     album: "Cosmic",
//     plays: "1.8M",
//     duration: "4:15",
//     cover: "/artist-1.jpg",
//   },
//   {
//     id: 3,
//     title: "Digital Love",
//     artist: "Synth Master",
//     album: "Electric",
//     plays: "1.6M",
//     duration: "3:28",
//     cover: "/artist-1.jpg",
//   },
//   {
//     id: 4,
//     title: "Future Bass",
//     artist: "Beat Drift",
//     album: "Wave",
//     plays: "1.5M",
//     duration: "4:02",
//     cover: "/artist-1.jpg",
//   },
//   {
//     id: 5,
//     title: "Unknown Track",
//     artist: "Unknown Artist",
//     album: "Mystery",
//     plays: "1.1M",
//     duration: "3:55",
//     cover: "/artist-1.jpg",
//   },
//   {
//     id: 6,
//     title: "Midnight Dreams",
//     artist: "Luna Rose",
//     album: "Nocturne",
//     plays: "900K",
//     duration: "3:33",
//     cover: "/artist-1.jpg",
//   },
// ];

interface PLayListProps {
  data?: Track[];
}

// console.log(data, "Dsd");
const Playlist: React.FC<PLayListProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No tracks found</div>;
  }
  return (
    <div className="playlist">
      <div className="playlist-header">
        <div className="cover">
          <img src="/sam.jpg" alt="Playlist Cover" />
        </div>
        <div className="playlist-info">
          <span className="recommended">RECOMMENDED PLAYLIST</span>
          <h1>Unholy</h1>
          <span className="sub-info">Based on your listening history</span>
          <span className="sub-info">45 songs • 2h 1m</span>
          <div className="actions">
            <button className="play-btn">Play</button>
            <button className="icon-btn">♥</button>
            <button className="icon-btn">↗</button>
            <button className="icon-btn">⋯</button>
          </div>
        </div>
      </div>

      <table className="playlist-table">
        <thead>
          <tr>
            <th>#</th>
            <th>TITLE</th>
            <th>ALBUM</th>
            <th>PLAYS</th>
            <th>⏱</th>
          </tr>
        </thead>
        <tbody>
          {data.map((track, index) => (
            <PlaylistItem key={track.id} index={index + 1} track={track} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Playlist;
