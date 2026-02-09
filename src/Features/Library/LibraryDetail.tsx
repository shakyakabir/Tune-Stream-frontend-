import React, { use, useEffect, useState } from "react";
import "./LibraryPlaylistDetail.scss";
import { useParams } from "react-router-dom";
import { playlistData } from "../../components/mock/PlaylistData";
import { GetLibraryId } from "../../api/Service/library/libraryService";
import { FaHeart, FaShare } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
interface Playlist {
  id: number;
  name: string;
  description: string;
  songsCount?: number;
  duration?: string;
}

const LibraryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const playlistId = Number(id);

  // const palylistdata = localStorage.getItem("libraryPlaylist");
  const [libdata, setLibData] = useState<Playlist | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await GetLibraryId(playlistId);
      setLibData(res);
      console.log(res);
    };
    fetch();
  }, [id]);
  const dataMatches = libdata?.id === playlistId;
  if (!libdata) return <div>Loading...</div>;
  if (!dataMatches) return <div>Playlist not found</div>;

  return (
    <section className="libraryPlaylist">
      {/* Back */}
      <div className="libraryPlaylist-back">← Back to Library</div>

      {/* Header */}
      <div className="libraryPlaylist-header">
        <div className="libraryPlaylist-header-cover">🎵</div>

        <div className="libraryPlaylist-header-info">
          <span className="libraryPlaylist-header-type">Playlist</span>
          <h1 className="libraryPlaylist-header-title">{libdata.name}</h1>
          <p className="libraryPlaylist-header-desc">{libdata.description}</p>
          <span className="libraryPlaylist-header-meta">0 songs • 0m</span>

          <div className="libraryPlaylist-header-actions">
            <button className="libraryPlaylist-play">▶ Play</button>
            <span className="libraryPlaylist-icon">
              <FaHeart />
            </span>
            <span className="libraryPlaylist-icon">
              <FaShare />
            </span>
            <span className="libraryPlaylist-icon">
              <FaEllipsis />
            </span>
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
