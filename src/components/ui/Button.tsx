import React from "react";
import "./Button.scss";

type ButtonProps = {
  text?: string;
  varient?: string;
  icon?: React.ReactNode;
  type: "submit" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  varient,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`button-${varient}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="button-icon">{icon}</span>}

      <span>{text}</span>
    </button>
  );
};

export default Button;
