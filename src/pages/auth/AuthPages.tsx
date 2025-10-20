import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import FormContainer from "../../components/FormContainer/FormContainer";
import Button from "../../components/ui/Button";
import "./Auth.scss";

const AuthPages = () => {
  const [activePage, setActivePage] = useState<"signin" | "signup">("signin");

  return (
    <div className="auth-page">
      <FormContainer>
        <h2 className="auth-page-heading">Sign In to Tunespot</h2>
        <p className="auth-page-subheading">
          Your gateway to the music universe
        </p>
        <div className="auth-page-button-container">
          <Button
            text={"sign in"}
            varient={activePage === "signin" ? "active" : "not-active"}
            type={"submit"}
            onClick={() => {
              setActivePage("signin");
            }}
          />

          <Button
            onClick={() => {
              setActivePage("signup");
            }}
            text={"sign up"}
            varient={activePage === "signup" ? "active" : "not-active"}
            type={"submit"}
          />
        </div>
        {activePage === "signin" ? <Login /> : <Signup />}
      </FormContainer>
    </div>
  );
};

export default AuthPages;
