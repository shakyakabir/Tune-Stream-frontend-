import React, { useContext, useEffect, useState } from "react";
import { MusicContext } from "../../context/MusicContext";

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
interface Props {
  track: Song;
  index: number;
}

const PlaylistItem: React.FC<Props> = ({ track, index }) => {
  const [duration, setDuration] = useState(0);
  const getAudioDurationInMinutes = (audioPath: string) => {
    return new Promise<number>((resolve) => {
      const audio = new Audio(
        `http://localhost:8080/uploads/audio/${audioPath}`,
      );

      audio.onloadedmetadata = () => {
        const durationInMinutes = Math.floor(audio.duration / 60);
        resolve(durationInMinutes);
      };
    });
  };
  useEffect(() => {
    getAudioDurationInMinutes(track.audioPath).then((minutes) => {
      setDuration(minutes);
      console.log("Duration in minutes:", minutes); // Correct
    });
  }, [track.audioPath]);
  console.log(duration);
  const { setCurrentSong } = useContext(MusicContext);

  const music = `http://localhost:8080/uploads/audio/${track.audioPath}`;
  const handlePlayClick = () => {
    setCurrentSong(track); // sets the current song in the context
  };

  return (
    // <tr className="playlist-item" onClick={handlePlayClick}>
    //   <td>{index}</td>
    //   <td className="title-cell">
    //     <img
    //       src={`http://localhost:8080/uploads/images/${track.imagePath}`}
    //       alt={track.title}
    //     />
    //     <div className="title-info">
    //       <span className="track-title">{duration}/min</span>
    //       <span className="track-artist">{track.artist.stageName}</span>
    //     </div>
    //   </td>
    //   <td>{track.album}</td>
    //   {/* <td>{track.plays}</td>
    //   <td>{track.duration}</td> */}
    // </tr>

    <tr className="playlist-item" onClick={() => setCurrentSong(track)}>
      <td className="index-cell">{index}</td>
      <td className="title-cell">
        <img
          src={`http://localhost:8080/uploads/images/${track.imagePath}`}
          alt={track.title}
        />
        <div className="title-info">
          <span className="track-title">{track.title}</span>
          <span className="track-artist">{track.artist.stageName}</span>
        </div>
      </td>
      <td className="album-cell">{track.album}</td>
      <td className="plays-cell">2,345,678</td>{" "}
      {/* Replace with track.plays if available */}
      <td className="duration-cell">{duration}</td>
    </tr>
  );
};

export default PlaylistItem;
