import { useState } from "react";

import AuthArtistSecond from "../../Features/Auth/AuthArtistSecond";
import AuthArtistImg from "../../Features/Auth/AuthArtistImg";
import AristInitailPage from "../../Features/Auth/AristInitailPage";
import "./ArtistRegister.scss";
import ArtistPreview from "../../Features/Auth/ArtistPreview";
import { registerArtist } from "../../api/Service/authService";
import { useNavigate } from "react-router-dom";

const ArtistRegister = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    password: "",
    stageName: "",
    bio: "",
    profileImg: null,
    coverImg: null,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleSubmit = async () => {
    try {
      const formDataPayload = new FormData();

      formDataPayload.append("fullName", formData.fullName);
      formDataPayload.append("email", formData.email);
      formDataPayload.append("contactNo", formData.contact);
      formDataPayload.append("password", formData.password);

      formDataPayload.append("stageName", formData.stageName);
      formDataPayload.append("shortBio", formData.bio);

      // auto role
      formDataPayload.append("role", "ARTIST");

      if (formData.profileImg) {
        formDataPayload.append("profileImage ", formData.profileImg);
      }

      // if (formData.coverImg) {
      //   formDataPayload.append("coverImg", formData.coverImg);
      // }

      const response = await registerArtist(formDataPayload);
      console.log("Artist registered:", response);
      if (response) {
        navigate("/ArtistLogin");
        localStorage.clear();
      }
    } catch (error) {
      console.error("Artist registration failed", error);
    }
  };

  return (
    <div className="artist">
      <div className="artist-auth">
        <div className="artist-auth-stepper">Step {step} of 4</div>

        {step === 1 && (
          <AristInitailPage
            data={formData}
            setData={setFormData}
            next={nextStep}
          />
        )}
        {step === 2 && (
          <AuthArtistSecond
            data={formData}
            setData={setFormData}
            next={nextStep}
            back={prevStep}
          />
        )}

        {step === 3 && (
          <AuthArtistImg
            data={formData}
            setData={setFormData}
            next={nextStep}
            back={prevStep}
          />
        )}

        {step === 4 && (
          <ArtistPreview
            data={formData}
            back={prevStep}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default ArtistRegister;
