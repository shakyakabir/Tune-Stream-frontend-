import React from "react";
import "./Input.scss";
type InputProps = {
  type: string;
  name: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  onchange,
  value,
}) => {
  return (
    <>
      <input
        className="input-form"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onchange}
      />
    </>
  );
};

export default Input;
