import Button from "../../components/ui/Button";

const AuthArtistImg = ({ data, setData, next, back }) => {
  return (
    <div className="artist-auth-card">
      <div className="artist-auth-profile">
        <label className="artist-auth-label">Profile Image</label>

        <label className="artist-auth-profile-upload">
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setData({ ...data, profileImg: e.target.files[0] })
            }
          />
          <div>
            <p>Click or drag profile image</p>
            <span>JPG, PNG (Max 5MB)</span>
          </div>
        </label>
      </div>

      <label className="artist-auth-label">Cover Image</label>
      <label className="artist-auth-cover">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setData({ ...data, coverImg: e.target.files[0] })}
        />
        <p>Upload a banner image for your profile</p>
      </label>

      <div className="artist-auth-actions">
        <Button text="Back" onClick={back} type="button" />
        <Button text="Preview" onClick={next} type="button" />
      </div>
    </div>
  );
};

export default AuthArtistImg;
