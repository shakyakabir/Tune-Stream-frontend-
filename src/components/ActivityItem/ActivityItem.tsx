import React from "react";
import "./ActivityItem.scss";

interface ActivityItemProps {
  text: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ text, time }) => {
  return (
    <div className="activity-item">
      <div className="activity-icon">⬆️</div>
      <div>
        <p>{text}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default ActivityItem;
