import React, { useState } from "react";
import { IoClose, IoSearch, IoAdd, IoCheckmarkCircle } from "react-icons/io5";
import "./AddSongModal.scss";

interface MusicItem {
  id: number;
  title: string;
  artistName: string;
  imagePath: string;
}

interface AddSongModalProps {
  isOpen: boolean;
  onClose: () => void;
  musicList: MusicItem[];
  onAddSelected: (ids: number[]) => void;
}

const AddSongModal: React.FC<AddSongModalProps> = ({
  isOpen,
  onClose,
  musicList,
  onAddSelected,
}) => {
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  if (!isOpen) return null;

  const filteredMusic = musicList.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artistName.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handlePost = () => {
    onAddSelected(selectedIds);
    setSelectedIds([]); // Clear selection after adding
    onClose(); // Close modal
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add Songs</h2>
          <button className="close-btn" onClick={onClose}>
            <IoClose />
          </button>
        </div>

        <div className="search-container">
          <IoSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search songs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="song-list">
          {filteredMusic.map((song) => (
            <div className="song-item" key={song.id}>
              <div className="song-info">
                <span className="song-title">{song.title}</span>
                <span className="song-artist">{song.artistName}</span>
              </div>
              <button
                className={`add-btn ${selectedIds.includes(song.id) ? "selected" : ""}`}
                onClick={() => toggleSelect(song.id)}
              >
                {selectedIds.includes(song.id) ? (
                  <IoCheckmarkCircle />
                ) : (
                  <IoAdd />
                )}
              </button>
            </div>
          ))}
        </div>
        {selectedIds.length > 0 && (
          <div className="modal-footer">
            <button className="confirm-add-btn" onClick={handlePost}>
              Add {selectedIds.length}{" "}
              {selectedIds.length === 1 ? "Song" : "Songs"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSongModal;
