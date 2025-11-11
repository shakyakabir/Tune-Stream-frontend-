import React from "react";
import "./QuickActionCard.scss";

interface QuickActionCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="quick-action-card">
      <div className="icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#">{link}</a>
      </div>
    </div>
  );
};

export default QuickActionCard;
