import React, { useState } from "react";
import "./MusicManagement.scss";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";


const MusicManagement: React.FC = () => {
  const [formData, setFormData] = useState({
    trackTitle: "",
    artistName: "",
    album: "",
    genre: "",
    audioFile: "",
    coverImage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Uploaded Track:", formData);
  };

  return (
    <div className="music-management">
      <h2>Music Management</h2>
      <p className="subtitle">Upload and manage your tracks</p>

      <div className="upload-section">
        <h3>📤 Upload New Track</h3>
        <p>Share your latest creation with your fans</p>

        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-row">
            <div className="form-group">
              <label>Track Title *</label>
              <Input
                type="text"
                name="trackTitle"
                placeholder="Enter track title"
                value={formData.trackTitle}
                onchange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Artist Name</label>
              <Input
                type="text"
                name="artistName"
                placeholder="Enter artist name"
                value={formData.artistName}
                onchange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Album</label>
              <Input
                type="text"
                name="album"
                placeholder="Enter album name"
                value={formData.album}
                onchange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Genre</label>
              <Input
                type="text"
                name="genre"
                placeholder="e.g., Pop, Rock, Hip-Hop"
                value={formData.genre}
                onchange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Audio File *</label>
              <Input
                type="file"
                name="audioFile"
                placeholder=""
                value={formData.audioFile}
                onchange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Cover Image</label>
              <Input
                type="file"
                name="coverImage"
                placeholder=""
                value={formData.coverImage}
                onchange={handleChange}
              />
            </div>
          </div>

          <Button text="Upload Track" type="submit" varient="primary" />
        </form>
      </div>

      <div className="your-tracks">
        <h3>Your Tracks</h3>
        <div className="empty-tracks">
          🎵 No tracks yet. Upload your first track to get started!
        </div>
      </div>
    </div>
  );
};

export default MusicManagement;
