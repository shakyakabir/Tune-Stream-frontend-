import React from "react";
import "./Input.scss";
type InputProps = {
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <>
      <input
        className="input-form"
        type={type}
        name={name}
        {...(type !== "file" ? { value } : {})}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
