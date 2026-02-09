import React from "react";
import PlaylistItem from "./PlaylistItem";
import "./Playlist.scss";
import { FaHeart, FaShare } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";

export interface Category {
  id: string;
  name: string;
}

export interface Artist {
  id: string;
  fullName: string;
  email: string;
  contactNo: string;
  password: string;
  stageName: string;
  shortBio: string;
  profileImage: string;
  role: "ARTIST" | "ADMIN" | "USER";
}

export interface Song {
  id: string;
  title: string;
  artistName: string;
  album: string;
  featuredArtists: string;
  audioPath: string;
  imagePath: string;
  releaseDate: [number, number, number]; // [year, month, day]
  category: Category;
  artist: Artist;
  visibility: "public" | "private";
  explicit: boolean;
}
interface PLayListProps {
  data?: Song[];
  name?: string;
  bio?: string;
  numbersong?: number;
  image?: string;
}

// console.log(data, "Dsd");
const Playlist: React.FC<PLayListProps> = ({
  data,
  name,
  bio,
  numbersong,
  image,
}) => {
  if (!data || data.length === 0) {
    return <div>No tracks found</div>;
  }
  return (
    // <div className="playlist">
    //   <div className="playlist-header">
    //     <div className="cover">
    //       <img src={image} alt="Playlist Cover" />
    //     </div>

    //     <div className="playlist-info">
    //       <span className="recommended">{name}</span>
    //       {data.map((item) =>
    //         item.title ? <h2 key={item.id}>{item.title}</h2> : null,
    //       )}
    //       <span className="sub-info">{bio}</span>
    //       <span className="sub-info">{numbersong} songs • 2h 1m</span>
    //       <div className="actions">
    //         <button className="play-btn">Play</button>
    //         <button className="icon-btn">♥</button>
    //         <button className="icon-btn">↗</button>
    //         <button className="icon-btn">⋯</button>
    //       </div>
    //     </div>
    //   </div>

    //   <table className="playlist-table">
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th>TITLE</th>
    //         <th>ALBUM</th>
    //         <th>PLAYS</th>
    //         <th>⏱</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((track, index) => (
    //         <PlaylistItem key={track.id} index={index + 1} track={track} />
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="playlist-container">
      <div className="playlist-header">
        <div className="cover-wrapper">
          <img src={image} alt={name} />
        </div>

        <div className="playlist-info">
          <span className="label">ARTIST</span>
          <h1 className="artist-name">{name}</h1>
          <div className="stats">
            <span className="bio-text">{bio}</span>
            <span className="dot">•</span>
            <span>{numbersong} songs</span>
            <span className="dot">•</span>
            <span className="followers">84.2K followers</span>
          </div>

          <div className="actions">
            <button className="play-btn">
              <span className="play-icon">▶</span> Play
            </button>
            <span className="icon-btn-outline">
              <FaHeart />
            </span>
            <span className="icon-btn-outline">
              <FaShare />
            </span>
            <span className="icon-btn-outline">
              <FaEllipsis />
            </span>
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
            <th className="time-icon">⏱</th>
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
