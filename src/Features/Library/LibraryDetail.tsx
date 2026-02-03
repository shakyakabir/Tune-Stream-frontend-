import React from "react";
import "./LibraryPlaylistDetail.scss";
import { useParams } from "react-router-dom";
import { playlistData } from "../../components/mock/PlaylistData";
interface Playlist {
  id: string;
  name: string;
  description: string;
  songsCount?: number;
  duration?: string;
}

const LibraryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const palylistdata = localStorage.getItem("libraryPlaylist");
  const playlistArray = palylistdata ? JSON.parse(palylistdata) : [];

  const data = playlistArray.find((p: any) => p.id === id);

  console.log(data);

  return (
    <section className="libraryPlaylist">
      {/* Back */}
      <div className="libraryPlaylist-back">← Back to Library</div>

      {/* Header */}
      <div className="libraryPlaylist-header">
        <div className="libraryPlaylist-header-cover">🎵</div>

        <div className="libraryPlaylist-header-info">
          <span className="libraryPlaylist-header-type">Playlist</span>
          <h1 className="libraryPlaylist-header-title">{data.name}</h1>
          <p className="libraryPlaylist-header-desc">{data.description}</p>
          <span className="libraryPlaylist-header-meta">0 songs • 0m</span>

          <div className="libraryPlaylist-header-actions">
            <button className="libraryPlaylist-play">▶ Play</button>
            <button className="libraryPlaylist-icon">♡</button>
            <button className="libraryPlaylist-icon">↗</button>
            <button className="libraryPlaylist-icon">⋯</button>
          </div>
        </div>
      </div>

      {/* Add song button */}
      <button className="libraryPlaylist-add">＋ Add Songs</button>

      {/* Empty State */}
      <div className="libraryPlaylist-empty">
        <div className="libraryPlaylist-empty-icon">🎵</div>
        <h3>This playlist is empty</h3>
        <p>Add some music to get started</p>
        <button className="libraryPlaylist-empty-btn">＋ Add Songs</button>
      </div>
    </section>
  );
};

export default LibraryDetail;
