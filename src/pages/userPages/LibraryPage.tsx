import React from "react";

import "./Library.scss";
import FeaturedCard from "../../components/cards/FeaturedCard";

import CreatePlaylistModal from "../../components/Modals/CreatePlaylistModal";
import { useNavigate } from "react-router-dom";

interface Playlist {
  id: string;
  name: string;
  description: string;
}

const Library: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [playlists, setPlaylists] = React.useState<Playlist[]>([]);

  const navigate = useNavigate();

  const handleCreate = (playlist: Playlist) => {
    const updatedPlaylist = [...playlists, playlist];
    setPlaylists(updatedPlaylist);

    localStorage.setItem("libraryPlaylist", JSON.stringify(updatedPlaylist));
  };
  const handle = () => {
    setIsOpen(!isOpen);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleDetail = (id: string) => {
    // Navigate to playlist detail page
    console.log("Navigate to playlist detail page");
    navigate(`/libraryDetail/${id}`);
  };
  return (
    <section className="library">
      <div className="library__header">
        <h2>Your Library</h2>
        <p>Your personal collection of playlists and music</p>
      </div>

      <div className="library__grid">
        {playlists.map((item, i) => (
          <span
            key={i}
            onClick={() => {
              handleDetail(item.id);
            }}
          >
            <FeaturedCard
              type="playlist"
              id={item.id}
              title={item.name}
              subtitle={item.description}
              songsCount={24}
              duration="1h 32m"
              image="" // optional gradient fallback
              audioUrl="/audio/sample.mp3"
            />
          </span>
        ))}
        <div className="library__create-card" onClick={handleOpen}>
          <div className="library__create-icon">+</div>
          <h3>Create New Playlist</h3>
          <p>Add your favorite songs</p>
        </div>
      </div>
      {isOpen && (
        <div className="library__modal">
          <CreatePlaylistModal onClose={handle} onCreate={handleCreate} />
        </div>
      )}
    </section>
  );
};

export default Library;
