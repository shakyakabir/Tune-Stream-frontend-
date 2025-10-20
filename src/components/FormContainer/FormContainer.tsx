import React, { type ReactNode } from "react";
import "./FormContainer.scss";

type FormContainerProps = {
  children: ReactNode;
};

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return <div className="form-container">{children}</div>;
};

export default FormContainer;
