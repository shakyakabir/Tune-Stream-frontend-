import React, { useContext, useEffect, useState } from "react";
import "./LibraryPlaylistDetail.scss";
import { useParams } from "react-router-dom";

import {
  GetLibraryId,
  GetMusicLibrary,
  PostMusicLibrary,
} from "../../api/Service/library/libraryService";
import { FaHeart, FaShare } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { getAllMusic } from "../../api/Service/Artist/UploadMusic";
import AddSongModal from "../../components/ActivityItem/modal/AddSongModal";
import { MusicContext } from "../../context/MusicContext";

interface Playlist {
  id: number;
  name: string;
  description: string;
  songsCount?: number;
  duration?: string;
}

const LibraryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setCurrentSong } = useContext(MusicContext);
  const playlistId = Number(id);

  // const palylistdata = localStorage.getItem("libraryPlaylist");
  const [libdata, setLibData] = useState<Playlist | null>(null);
  const [musicList, setMusicList] = useState<any[]>([]); // To store API results
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await GetLibraryId(playlistId);
      setLibData(res);
      console.log(res);
      const getMusic = await getAllMusic();
      console.log(getMusic, "music");
      setMusicList(getMusic);
    };

    fetch();
  }, [id]);
  const [libMusic, setLibMusic] = useState<any[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await GetMusicLibrary(playlistId);
      setLibMusic(res);
    };
    fetch();
  }, []);
  const fetchPlaylistMusic = async () => {
    const res = await GetMusicLibrary(playlistId);

    setLibMusic(res || []);
  };
  const dataMatches = libdata?.id === playlistId;
  if (!libdata) return <div>Loading...</div>;
  if (!dataMatches) return <div>Playlist not found</div>;

  console.log(libMusic, "sas");

  const handleAddSongsToPlaylist = async (songIds: number[]) => {
    const send = await PostMusicLibrary(playlistId, songIds);
    await fetchPlaylistMusic();
  };

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
        </div>
      </div>
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

      {/* Add song button */}
      <button
        className="libraryPlaylist-add"
        onClick={() => setIsModalOpen(true)}
      >
        ＋ Add Songs
      </button>
      <div className="playlist-songs-container">
        {libMusic.length > 0 ? (
          <div className="songs-table">
            <div className="table-header">
              <span>#</span>
              <span>Title</span>
              <span>Artist</span>
              <span>Date Added</span>
              <span></span>
            </div>
            <hr className="divider" />
            {libMusic.map((item: any, index: number) => (
              <div
                className="song-row"
                key={item.id}
                onClick={() => setCurrentSong(item)}
              >
                <span className="index">{index + 1}</span>
                <div className="song-main-info">
                  {/* If you have imagePath in libMusic items, use it here */}
                  <div>
                    <img
                      src={`http://localhost:8080/uploads/images/${item.imagePath}`}
                      alt=""
                    />
                  </div>
                  <div className="song-title-group">
                    <span className="song-title">{item.title}</span>
                  </div>
                </div>
                <span className="song-artist">{item.artistName}</span>
                <span className="song-date">Recent</span>
                <span className="song-options">
                  <FaEllipsis />
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State - Only shows if libMusic is empty */
          <div className="libraryPlaylist-empty">
            <div className="libraryPlaylist-empty-icon">🎵</div>
            <h3>This playlist is empty</h3>
            <p>Add some music to get started</p>
            <button
              className="libraryPlaylist-empty-btn"
              onClick={() => setIsModalOpen(true)}
            >
              ＋ Add Songs
            </button>
          </div>
        )}
      </div>
      <AddSongModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        musicList={musicList}
        onAddSelected={handleAddSongsToPlaylist}
      />

      {/* Empty State */}
      {/* <div className="libraryPlaylist-empty">
        <div className="libraryPlaylist-empty-icon">🎵</div>
        <h3>This playlist is empty</h3>
        <p>Add some music to get started</p>
        <button
          className="libraryPlaylist-empty-btn"
          onClick={() => setIsModalOpen(true)}
        >
          ＋ Add Songs
        </button>
      </div> */}
    </section>
  );
};

export default LibraryDetail;
