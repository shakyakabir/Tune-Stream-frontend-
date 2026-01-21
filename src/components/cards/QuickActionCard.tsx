import React from "react";
import "./QuickActionCard.scss";

interface QuickActionCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  index?: number;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  icon,
  title,
  description,
  index = 0,
  link,
}) => {
  const gradients = [
    "linear-gradient(150deg, #251231, #191021)",
    "linear-gradient(150deg, #2e1428, #1f101d)",
    "linear-gradient(150deg, #162138, #121826)",
  ];
  const color = ["#2a1c33", "#311b2c", " #1d2944"];
  const randomGradient = gradients[index % gradients.length];
  const randomcolor = color[index % color.length];
  return (
    <div className="quick-action-card" style={{ background: randomGradient }}>
      <div className="icon" style={{ background: randomcolor }}>
        {icon}
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p className="link">
          <a href="#">{link}</a>
        </p>
      </div>
    </div>
  );
};

export default QuickActionCard;
