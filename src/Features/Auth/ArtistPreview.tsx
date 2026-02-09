import Button from "../../components/ui/Button";

const ArtistPreview = ({ data, back, handleSubmit }) => {
  return (
    <div className="preview">
      <h2>Preview Your Profile</h2>

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

      <div>
        <img
          src={URL.createObjectURL(data.profileImg)}
          alt="Profile"
          width={100}
        />
      </div>

      <Button text="Back" type={"button"} onClick={back} />
      <Button text="Submit" type={"submit"} onClick={handleSubmit} />
    </div>
  );
};

export default ArtistPreview;
