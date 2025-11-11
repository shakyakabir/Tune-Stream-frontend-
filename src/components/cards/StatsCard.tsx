import React from "react";
import "./StatsCard.scss";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change }) => {
  return (
    <div className="stats-card">
      <p className="stats-title">{title}</p>
      <h2 className="stats-value">{value}</h2>
      <p className="stats-change">{change}</p>
    </div>
  );
};

export default StatsCard;
