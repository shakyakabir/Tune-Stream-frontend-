import React from "react";
import "./ProgressBar.scss";

interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, max = 100 }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="progress">
      <div className="progress-header">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
