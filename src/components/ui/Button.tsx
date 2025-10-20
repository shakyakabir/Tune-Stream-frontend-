import React from "react";
import "./Button.scss";

type ButtonProps = {
  text: string;
  varient: string;
  type: "submit" | "button";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, varient, onClick, type }) => {
  return (
    <button type={type} className={`button-${varient}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
