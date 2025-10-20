import React, { useState } from "react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./Login.scss";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
          onchange={handleChange}
          placeholder="Enter Your email"
        />
        <label className="login-label" htmlFor="">
          Password
        </label>
        <Input
          type="password"
          name="password"
          value={form.password}
          onchange={handleChange}
          placeholder="Enter Your password"
        />
        <div className="login-links">
          <a href="#">Forgot Password?</a>
        </div>
        <Button text={"Login"} varient={"gradient"} type={"submit"} />
      </form>
    </div>
  );
};

export default Login;
