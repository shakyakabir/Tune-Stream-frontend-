import React, { useEffect, useState } from "react";
import "./MusicManagement.scss";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import {
  AllMusic,
  UploadMusic,
  type MusicResponse,
  UpdateMusic,
  DeleteMusic,
} from "../../api/Service/Artist/UploadMusic";

const MusicManagement: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [tracks, setTracks] = useState<MusicResponse[]>([]);
  const [loadingTracks, setLoadingTracks] = useState(true);
  const [editingTrack, setEditingTrack] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    artistName: "",
    album: "",
    categoryId: null,
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

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsUploading(true);
  //   const data = new FormData();
  //   data.append("title", formData.title);
  //   data.append("artistName", formData.artistName);
  //   data.append("album", formData.album);
  //   data.append("categoryId", formData.categoryId);
  //   if (formData.file) data.append("file", formData.file);
  //   if (formData.image) data.append("image", formData.image);

  // for (const [key, value] of data.entries()) {
  //   console.log(key, value);
  // }

  //   try {
  //     const res = await UploadMusic(data);
  //     console.log(res);
  //     setFormData({
  //       title: "",
  //       artistName: "",
  //       album: "",
  //       categoryId: "",
  //       file: null,
  //       image: null,
  //     });
  //   } catch (error: any) {
  //     console.error("Upload failed:", error);
  //     // Show backend error if available
  //     if (error.response?.data?.message) {
  //       alert("Failed: " + error.response.data.message);
  //     } else {
  //       alert("Failed to upload track.");
  //     }
  //   } finally {
  //     setIsUploading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("artistName", formData.artistName);
    data.append("album", formData.album);
    data.append("categoryId", String(formData.categoryId));

    if (formData.file) data.append("file", formData.file);
    if (formData.image) data.append("image", formData.image);

    try {
      if (editingTrack) {
        // UPDATE
        await UpdateMusic(editingTrack.id, data);
      } else {
        // CREATE
        await UploadMusic(data);
      }

      const refreshed = await AllMusic();
      setTracks(refreshed.data);

      setEditingTrack(null);
      setFormData({
        title: "",
        artistName: "",
        album: "",
        categoryId: "",
        file: null,
        image: null,
      });
    } catch (error) {
      alert("Operation failed");
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await AllMusic();
        setTracks(res);

        if (res.success) {
          // setTracks(res.data);
          console.log(res, "sa ");
        } else {
          console.error("Failed to fetch tracks:", res.message);
        }
      } catch (err) {
        console.error("Error fetching tracks:", err);
      } finally {
        setLoadingTracks(false);
      }
    };

    fetchTracks();
  }, []);

  const handleEdit = (track: any) => {
    setEditingTrack(track);
    setFormData({
      title: track.title,
      artistName: track.artistName || "",
      album: track.album || "",
      categoryId: track.categoryId,
      file: null,
      image: null,
    });
  };
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this track?")) return;

    try {
      await DeleteMusic(id);
      setTracks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      alert("Failed to delete track");
    }
  };

  return (
    // <div className="music-management">
    //   <h2>Music Management</h2>
    //   <p className="subtitle">Upload and manage your tracks</p>

    //   <div className="upload-section">
    //     <h3>Upload New Track</h3>
    //     <p>Share your latest creation with your fans</p>

    //     <form onSubmit={handleSubmit} className="upload-form">
    //       <div className="form-row">
    //         <div className="form-group">
    //           <label>Track Title *</label>
    //           <Input
    //             type="text"
    //             name="title"
    //             placeholder="Enter track title"
    //             value={formData.title}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label>Artist Name</label>
    //           <Input
    //             type="text"
    //             name="artist_name"
    //             placeholder="Enter artist name"
    //             value={formData.artist_name}
    //             onChange={handleChange}
    //           />
    //         </div>
    //       </div>

    //       <div className="form-row">
    //         <div className="form-group">
    //           <label>Album</label>
    //           <Input
    //             type="text"
    //             name="album"
    //             placeholder="Enter album name"
    //             value={formData.album}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label>Genre</label>
    //           <Input
    //             type="text"
    //             name="categoryId"
    //             placeholder="e.g., Pop, Rock, Hip-Hop"
    //             value={formData.categoryId}
    //             onChange={handleChange}
    //           />
    //         </div>
    //       </div>

    //       <div className="form-row">
    //         <div className="form-group">
    //           <label>Audio File *</label>
    //           <Input
    //             type="file"
    //             placeholder=""
    //             name="file"
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label>Cover Image</label>
    //           {/* <Input
    //             type="file"
    //             name="coverImage"
    //             placeholder=""
    //             value={formData.coverImage}
    //             onchange={handleChange}
    //           /> */}
    //           <Input
    //             type="file"
    //             name="image"
    //             onChange={handleChange}
    //             placeholder={""}
    //           />
    //         </div>
    //       </div>
    //       {isUploading ? (
    //         <Button
    //           text="Uploading..."
    //           type="submit"
    //           varient="primary"
    //           disabled
    //         />
    //       ) : (
    //         <Button text="Upload Track" type="submit" varient="gradient" />
    //       )}
    //     </form>
    //   </div>

    //   <div className="your-tracks">
    //     <h3>Your Tracks</h3>
    //     {loadingTracks ? (
    //       <div>Loading tracks...</div>
    //     ) : tracks.length === 0 ? (
    //       <div className="your-tracks-empty">
    //         No tracks yet. Upload your first track to get started!
    //       </div>
    //     ) : (
    //       <table className="your-tracks-table">
    //         <thead>
    //           <tr>
    //             <th>Title</th>
    //             <th>Artist</th>
    //             <th>Album</th>
    //             <th>Genre</th>
    //             <th>Image</th>
    //             <th>Audio</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {tracks.map((track) => (
    //             <tr key={track.id}>
    //               <td>{track.title}</td>
    //               <td>{track.artistName || "Unknown"}</td>
    //               <td>{track.album || "Unknown"}</td>
    //               <td>{track.categoryId}</td>
    //               <td>
    //                 {track.imagePath && (
    //                   <img
    //                     width={50}
    //                     src={`http://localhost:8080/uploads/images/${track.imagePath}`}
    //                   />
    //                 )}
    //               </td>
    //               <td>
    //                 {track.audioPath && (
    //                   <audio controls>
    //                     <source
    //                       src={`http://localhost:8080/uploads/audio/${track.audioPath}`}
    //                       type="audio/mpeg"
    //                     />
    //                     Your browser does not support the audio element.
    //                   </audio>
    //                 )}
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     )}
    //   </div>
    // </div>

    <div className="music-mgmt">
      <header className="music-mgmt__header">
        <h2>Music Management</h2>
        <p>Upload and manage your tracks</p>
      </header>

      <section className="music-mgmt__upload-card">
        <h3>Upload New Track</h3>
        <p className="description">Share your latest creation with your fans</p>

        <form onSubmit={handleSubmit} className="upload-form">
          <div className="upload-form__row">
            <div className="upload-form__group">
              <label>Track Title *</label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter track title"
              />
            </div>
            <div className="upload-form__group">
              <label>Artist Name</label>
              <Input
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                placeholder="Enter artist name"
              />
            </div>
          </div>

          <div className="upload-form__row">
            <div className="upload-form__group">
              <label>Album</label>
              <Input
                name="album"
                value={formData.album}
                onChange={handleChange}
                placeholder="Enter album name"
              />
            </div>
            <div className="upload-form__group">
              <label>Genre</label>
              <Input
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                placeholder="e.g. Pop, Rock"
              />
            </div>
          </div>

          <div className="upload-form__row">
            <div className="upload-form__group">
              <label>Audio File *</label>
              <div className="file-drop-zone">
                <input type="file" name="file" onChange={handleChange} />
                <span>
                  {formData.file
                    ? formData.file.name
                    : "Drag & drop audio or browse"}
                </span>
              </div>
            </div>
            <div className="upload-form__group">
              <label>Cover Image</label>
              <div className="file-drop-zone">
                <input type="file" name="image" onChange={handleChange} />
                <span>
                  {formData.image
                    ? formData.image.name
                    : "Drag & drop image or browse"}
                </span>
              </div>
            </div>
          </div>

          <Button
            text={
              isUploading
                ? "Saving..."
                : editingTrack
                  ? "Update Track"
                  : "Upload Track"
            }
            type="submit"
            varient="gradient"
            // className="btn-full"
          />
        </form>
      </section>

      <section className="music-mgmt__list-card">
        <div className="list-header">
          <h3>Your Tracks</h3>
          <span className="count">{tracks.length} Tracks Total</span>
        </div>

        {loadingTracks ? (
          <div className="status-msg">Loading...</div>
        ) : (
          <table className="track-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>TRACK</th>
                <th>Audio</th>
                <th>Name</th>
                <th>ALBUM</th>
                <th>GENRE</th>
                <th style={{ textAlign: "right" }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track) => (
                <tr key={track.id}>
                  <td>
                    <div className="track-info">
                      <div className="track-info__icon">
                        <img
                          src={`http://localhost:8080/uploads/images/${track.imagePath}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="track-info__text">
                      <span className="title">{track.title}</span>
                    </div>
                  </td>
                  <td>
                    <div className="track-info__text">
                      {track.audioPath && (
                        <audio controls>
                          <source
                            src={`http://localhost:8080/uploads/audio/${track.audioPath}`}
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className="track-info__artist">
                      {track.artistName || "Unknown Artist"}
                    </span>
                  </td>
                  <td>{track.album || "Single"}</td>
                  <td>
                    <span className="genre-pill">{track.categoryId}</span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button
                      className="action-btn edit"
                      onClick={() => handleEdit(track)}
                    >
                      ✏️
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={() => handleDelete(track.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default MusicManagement;
