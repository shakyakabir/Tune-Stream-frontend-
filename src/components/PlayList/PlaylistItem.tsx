import React from "react";

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  plays: string;
  duration: string;
  cover: string;
}

interface Props {
  track: Track;
  index: number;
}

const PlaylistItem: React.FC<Props> = ({ track, index }) => {
  return (
    <tr className="playlist-item">
      <td>{index}</td>
      <td className="title-cell">
        <img src={track.cover} alt={track.title} />
        <div className="title-info">
          <span className="track-title">{track.title}</span>
          <span className="track-artist">{track.artist}</span>
        </div>
      </td>
      <td>{track.album}</td>
      <td>{track.plays}</td>
      <td>{track.duration}</td>
    </tr>
  );
};

export default PlaylistItem;
