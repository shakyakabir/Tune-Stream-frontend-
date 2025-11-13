import React from "react";
import "./Button.scss";

type ButtonProps = {
  text?: string;
  varient: string;
  icon?: React.ReactNode;
  type: "submit" | "button";
  onClick?:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => void;
};

const Button: React.FC<ButtonProps> = ({ text,icon, varient, onClick, type }) => {
  return (
    <button type={type} className={`button-${varient}`} onClick={onClick}>
   {icon&& <span className="button-icon">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
