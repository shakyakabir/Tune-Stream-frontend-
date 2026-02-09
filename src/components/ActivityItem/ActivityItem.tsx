import React from "react";
import "./ActivityItem.scss";
import { FaMusic } from "react-icons/fa"; // Optional: using an icon library like lucide-react

interface EarningTrackProps {
  rank: number;
  title: string;
  streams: string;
  amount: string;
  trend: number; // e.g., 18 or -5
  onClick: () => void; // Added this
  isActive: boolean; // Added to show which one is selected
}

const ActivityItem: React.FC<EarningTrackProps> = ({
  rank,
  title,
  streams,
  amount,
  trend,
  onClick,
  isActive,
}) => {
  const isPositive = trend > 0;

  return (
    <div
      className={`earning-track ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="rank-section">
        <span className="rank-number">{rank}</span>
        <div className="track-icon">
          <FaMusic size={18} color="#a855f7" />
        </div>
        <div className="track-info">
          <p className="track-title">{title}</p>
          <span className="track-streams">{streams} streams</span>
        </div>
      </div>

      <div className="earning-info">
        <p className="amount">₹{amount}</p>
        <span className={`trend ${isPositive ? "up" : "down"}`}>
          {isPositive ? "↗" : "↘"} {isPositive ? "+" : ""}
          {trend}%
        </span>
      </div>
    </div>
  );
};

export default ActivityItem;
