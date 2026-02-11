import React, { useEffect, useState } from "react";
import "./MusicManagement.scss";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import {
  UploadMusic,
  UpdateMusic,
  DeleteMusic,
  ArtistSong,
  type MusicResponse,
} from "../../api/Service/Artist/UploadMusic";

const MusicManagement: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [tracks, setTracks] = useState<MusicResponse[]>([]);
  const [loadingTracks, setLoadingTracks] = useState(true);
  const [editingTrack, setEditingTrack] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    artistName: "",
    featuredArtists: "",
    album: "",
    categoryId: "",
    releaseDate: "",
    visibility: "public",
    isExplicit: false,
    lyrics: "",
    file: null as File | null,
    image: null as File | null,
  });

  /* =========================
     HANDLE INPUT CHANGE
  ========================== */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type } = e.target;

    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setFormData((prev) => ({ ...prev, [name]: files[0] }));
      }
      return;
    }

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  /* =========================
     SUBMIT FORM
  ========================== */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("artistName", formData.artistName);
    data.append("featuredArtists", formData.featuredArtists);
    data.append("album", formData.album);
    data.append("categoryId", formData.categoryId);
    data.append("releaseDate", formData.releaseDate);
    data.append("visibility", formData.visibility);
    data.append("isExplicit", String(formData.isExplicit));
    data.append("lyrics", formData.lyrics);

    if (formData.file) data.append("file", formData.file);
    if (formData.image) data.append("image", formData.image);

    try {
      if (editingTrack) {
        await UpdateMusic(editingTrack.id, data);
      } else {
        await UploadMusic(data);
      }

      await fetchTracks();
      setEditingTrack(null);

      setFormData({
        title: "",
        artistName: "",
        featuredArtists: "",
        album: "",
        categoryId: "",
        releaseDate: "",
        visibility: "public",
        isExplicit: false,
        lyrics: "",
        file: null,
        image: null,
      });
    } catch (err) {
      alert("Operation failed");
    } finally {
      setIsUploading(false);
    }
  };

  /* =========================
     FETCH TRACKS
  ========================== */
  const fetchTracks = async () => {
    setLoadingTracks(true);
    try {
      const res = await ArtistSong();
      setTracks(res?.data || res || []);
    } catch (err) {
      console.error(err);
      setTracks([]);
    } finally {
      setLoadingTracks(false);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  /* =========================
     EDIT & DELETE
  ========================== */
  const handleEdit = (track: any) => {
    setEditingTrack(track);
    setFormData({
      title: track.title || "",
      artistName: track.artistName || "",
      featuredArtists: track.featuredArtists || "",
      album: track.album || "",
      categoryId: String(track.categoryId || ""),
      releaseDate: track.releaseDate || "",
      visibility: track.visibility || "public",
      isExplicit: track.isExplicit || false,
      lyrics: track.lyrics || "",
      file: null,
      image: null,
    });
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this track?")) return;
    try {
      await DeleteMusic(id);
      setTracks((prev) => prev.filter((t) => t.id !== id));
    } catch {
      alert("Delete failed");
    }
  };

  /* =========================
     JSX
  ========================== */
  return (
    <div className="music-mgmt">
      <header className="music-mgmt__header">
        <h2>Music Management</h2>
        <p style={{ marginTop: "0" }}>Upload and manage your tracks</p>
      </header>

      <section className="music-mgmt__upload-card">
        <h3>{editingTrack ? "Edit Track" : "Upload New Track"}</h3>

        <form onSubmit={handleSubmit} className="upload-form">
          {/* ROW 1 */}
          <div className="upload-form__row">
            <div className="upload-form__group">
              <label>Track Title *</label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                type={"text"}
                placeholder={"Track Title"}
              />
            </div>
            <div className="upload-form__group">
              <label>Main Artist</label>
              <Input
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                type={"text"}
                placeholder={"Artist Name"}
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="upload-form__row">
            <div className="upload-form__group">
              <label>Genre</label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="custom-select"
              >
                <option value="">Select Genre</option>
                <option value="1">Pop</option>
                <option value="2">Hip Hop</option>
                <option value="3">Rock</option>
                <option value="4">Bollywood</option>
              </select>
            </div>
            <div className="upload-form__group">
              <label>Featured Artist</label>
              <Input
                name="featuredArtists"
                value={formData.featuredArtists}
                onChange={handleChange}
                type={"text"}
                placeholder={"Featured Artist"}
              />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="upload-form__row">
            <div className="upload-form__group">
              <label>Release Date</label>
              <input
                type="date"
                name="releaseDate"
                value={formData.releaseDate}
                onChange={handleChange}
              />
            </div>
            <div className="upload-form__group">
              <label>Visibility</label>
              <select
                name="visibility"
                value={formData.visibility}
                onChange={handleChange}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="unlisted">Unlisted</option>
              </select>
            </div>
          </div>

          {/* ROW 4 */}
          <div className="upload-form__row">
            <div className="upload-form__group">
              <label>
                <input
                  type="checkbox"
                  name="isExplicit"
                  checked={formData.isExplicit}
                  onChange={handleChange}
                />{" "}
                Explicit Lyrics
              </label>
            </div>
            {/* <div className="upload-form__group">
              <label>Lyrics</label>
              <textarea
                name="lyrics"
                value={formData.lyrics}
                onChange={handleChange}
              />
            </div> */}
          </div>

          {/* ROW 5 */}
          <div className="upload-form__row">
            <div className="upload-form__group">
              <label>Audio File *</label>
              <div className="file-drop-zone cover-drop">
                <span className="file-drop-zone__content">
                  <strong>Upload audio</strong>
                  <small>MP3, WAV, up to 10MB</small>
                </span>
                <input
                  type="file"
                  name="file"
                  accept="audio/*"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="upload-form__group">
              <label>Cover Image</label>
              <div className="file-drop-zone cover-drop">
                <span className="file-drop-zone__content">
                  <strong>Upload cover image</strong>
                  <small>JPG, PNG (optional)</small>
                </span>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            varient="gradient"
            text={
              isUploading
                ? "Saving..."
                : editingTrack
                  ? "Update Track"
                  : "Upload Track"
            }
          />
        </form>
      </section>

      <section className="music-mgmt__list-card">
        {loadingTracks ? (
          <p>Loading...</p>
        ) : (
          <>
            {" "}
            <h4>Track List</h4>
            <table className="track-table">
              <thead>
                <tr>
                  <th>Track</th>
                  <th>Image</th>
                  <th>Audio</th>
                  <th>Artist</th>
                  <th>Album</th>
                  <th>Genre</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track) => (
                  <tr key={track.id}>
                    <td>{track.title}</td>
                    <td>
                      <img
                        src={`http://localhost:8080/uploads/images/${track.imagePath}`}
                        alt="Artist Profile"
                        alt=""
                        srcset=""
                      />
                    </td>
                    <td>
                      <audio
                        controls
                        src={`http://localhost:8080/uploads/audio/${track.audioPath}`}
                      />
                    </td>

                    <td>{track.artistName}</td>
                    <td>{track.album || "Single"}</td>
                    <td>{track.category.name}</td>
                    <td>
                      <button onClick={() => handleEdit(track)}>✏️</button>
                      <button onClick={() => handleDelete(track.id)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </section>
    </div>
  );
};

export default MusicManagement;
