import React, { useState } from "react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./Login.scss";
import { AuthRegister } from "../../api/Service/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    contact: "",
    role: "user",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle login logic here

    if (loading) return; // prevent double click
    setLoading(true);
    try {
      const response = await AuthRegister(form);
      console.log("Signup Response:", response);

      if (response) {
        navigate("/");
        setForm({
          username: "",
          role: "user",
          email: "",
          password: "",
          name: "",
          contact: "",
        });
      }
    } catch (error) {
      console.error("Signup failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <form className="login-form">
        <label className="login-label" htmlFor="">
          Name
        </label>
        <Input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter Your name"
        />
        <label className="login-label" htmlFor="">
          email
        </label>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter Your email"
        />

        <label className="login-label" htmlFor="">
          Fullname
        </label>
        <Input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Your name"
        />
        <label className="login-label" htmlFor="">
          contact
        </label>
        <Input
          type="number"
          name="contact"
          value={form.contact}
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
          text={loading ? "Signing up..." : "Signup"}
          onClick={handleOnClick}
          varient={"gradient"}
          type={"button"}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default Signup;
