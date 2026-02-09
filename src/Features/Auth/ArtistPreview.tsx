import Button from "../../components/ui/Button";
import "./Preview.scss";

const ArtistPreview = ({ data, back, handleSubmit }) => {
  return (
    <div className="artist-preview">
      <div className="artist-preview__card">
        <h2 className="artist-preview__title">Preview Your Profile</h2>

        <div className="artist-preview__info">
          <p>
            <strong>Name:</strong> {data.fullName}
          </p>
          <p>
            <strong>Stage Name:</strong> {data.stageName}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Bio:</strong> {data.bio}
          </p>
        </div>

        <div className="artist-preview__image">
          <img src={URL.createObjectURL(data.profileImg)} alt="Profile" />
        </div>

        <div className="artist-preview__actions">
          <Button text="Back" type="button" onClick={back} />
          <Button text="Submit" type="submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ArtistPreview;
