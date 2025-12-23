import React, { useState } from "react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./Login.scss";
import { AuthLogin } from "../../api/Service/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle login logic here
    try {
      const response = await AuthLogin(form);
      if (response) {
        console.log("Login successful", response);
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
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
          text={"Login"}
          varient={"gradient"}
          onClick={handleOnClick}
          type={"submit"}
        />
      </form>
    </div>
  );
};

export default Login;
