import React, { type ReactNode } from "react";
import "./trending.scss";

interface RecentCardProps {
  image?: string;
  name: string;
  artist?: string;
  duration?: string;
  icon?: ReactNode;
}
const RecentCard: React.FC<RecentCardProps> = ({
  image,
  name,
  icon,
  artist,
  duration,
}) => {
  return (
    <div className="trending">
      <div className="trending-left">
        {image && <img src={image} alt="" />}
        {icon && <div className="icon">{icon}</div>}
        <div className="trending-left-info">
          <h2>{name}</h2>
          <p>{artist}</p>
          {/* <p>{duration}</p> */}
        </div>
      </div>
      <div className="trending-right">
        {/* <i>+</i> */}
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default RecentCard;
