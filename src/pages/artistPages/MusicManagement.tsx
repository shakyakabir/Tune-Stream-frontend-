import React, { useState } from "react";
import "./MusicManagement.scss";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { UploadMusic } from "../../api/Service/Artist/UploadMusic";

const MusicManagement: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    artist_name: "",
    album: "",
    genre: "",
    file: null as File | null,
    image: null as File | null,
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, files } = e.target;

    if (type === "file" && files) {
      setFormData({ ...formData, [name]: files[0] }); // store first file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    const data = new FormData();
    data.append("title", formData.title);
    data.append("artist_name", formData.artist_name);
    data.append("album", formData.album);
    data.append("genre", formData.genre);
    if (formData.file) data.append("file", formData.file);
    if (formData.image) data.append("image", formData.image);

    // ✅ Verify FormData content
    for (const [key, value] of data.entries()) {
      console.log(key, value);
    }

    try {
      await UploadMusic(data); // No 'as any' needed if UploadMusic accepts FormData
      alert("Track uploaded successfully!");
      setFormData({
        title: "",
        artist_name: "",
        album: "",
        genre: "",
        file: null,
        image: null,
      });
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload track.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="music-management">
      <h2>Music Management</h2>
      <p className="subtitle">Upload and manage your tracks</p>

      <div className="upload-section">
        <h3>Upload New Track</h3>
        <p>Share your latest creation with your fans</p>

        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-row">
            <div className="form-group">
              <label>Track Title *</label>
              <Input
                type="text"
                name="title"
                placeholder="Enter track title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Artist Name</label>
              <Input
                type="text"
                name="artist_name"
                placeholder="Enter artist name"
                value={formData.artist_name}
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Genre</label>
              <Input
                type="text"
                name="genre"
                placeholder="e.g., Pop, Rock, Hip-Hop"
                value={formData.genre}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Audio File *</label>
              <Input
                type="file"
                placeholder=""
                name="file"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Cover Image</label>
              {/* <Input
                type="file"
                name="coverImage"
                placeholder=""
                value={formData.coverImage}
                onchange={handleChange}
              /> */}
              <Input
                type="file"
                name="image"
                onChange={handleChange}
                placeholder={""}
              />
            </div>
          </div>
          {isUploading ? (
            <Button
              text="Uploading..."
              type="submit"
              varient="primary"
              disabled
            />
          ) : (
            <Button text="Upload Track" type="submit" varient="gradient" />
          )}
        </form>
      </div>

      <div className="your-tracks">
        <h3>Your Tracks</h3>
        <div className="empty-tracks">
          No tracks yet. Upload your first track to get started!
        </div>
      </div>
    </div>
  );
};

export default MusicManagement;
