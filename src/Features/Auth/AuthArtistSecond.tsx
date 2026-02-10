import React, { useState } from "react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const AuthArtistSecond = ({ data, setData, next, back }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="artist-auth-card">
      <form className="artist-auth-form">
        <label className="artist-auth-label">Artist / Stage Name</label>
        <Input
          name="stageName"
          value={data.stageName}
          onChange={handleChange}
          type={"text"}
          placeholder={"stage Name"}
        />

        <label className="artist-auth-label">Short Bio</label>
        <textarea
          name="bio"
          value={data.bio}
          onChange={handleChange}
          placeholder={"About your"}
        />

        <div className="artist-auth-actions">
          <Button text="Back" onClick={back} type={"button"} />
          <Button text="Next" onClick={next} type={"button"} />
        </div>
      </form>
    </div>
  );
};

export default AuthArtistSecond;
