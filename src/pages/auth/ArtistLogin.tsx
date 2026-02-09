import React, { useState } from "react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./Login.scss";
import { ArtistAuthLogin } from "../../api/Service/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ArtistLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle login logic here
    setLoading(true);
    try {
      const response = await ArtistAuthLogin(form);
      if (response) {
        console.log("Login successful", response);

        navigate("/");
      }
    } catch (error: any) {
      if (error.response.data === "Invalid username/email or password") {
        toast.error("Invalid email or password");
        console.log("d");
      } else {
        toast.error("something went wrong");
        console.log("e");
        setLoading(false);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login">
      <form className="login-form">
        <label className="login-label" htmlFor="">
          Email
        </label>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter Your email"
        />
        <label className="login-label" htmlFor="">
          Password
        </label>
        <Input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter Your password"
        />
        <div className="login-links">
          <a href="#">Forgot Password?</a>
        </div>
        <Button
          text={loading ? "loading..." : "Login"}
          varient={"gradient"}
          onClick={handleOnClick}
          type={"submit"}
        />
      </form>
    </div>
  );
};

export default ArtistLogin;
