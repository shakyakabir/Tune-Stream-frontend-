import React from "react";
import "./trending.scss";

interface RecentCardProps {
  image: string;
  name: string;
  artist: string;
  duration: string;
}
const RecentCard: React.FC<RecentCardProps> = ({
  image,
  name,
  artist,
  duration,
}) => {
  return (
    <div className="trending">
      <div className="trending-left">
        <img src={image} alt="" />
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
