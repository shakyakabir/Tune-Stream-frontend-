import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "./trending.scss";

interface trendingProps {
  name: string;
  author: string;
  view: string;
  minute: string;
  image: string;
}

const Trending: React.FC<trendingProps> = ({
  image,
  name,
  author,
  view,
  minute,
}) => {
  return (
    <div className="trending">
      <div className="trending-left">
        <img src={image} alt="" />
        <div className="trending-left-info">
          <h2>{name}</h2>
          <p>{author}</p>
        </div>
      </div>

      <div className="trending-right">
        <p className="trending-right-view">{view}</p>
        <i>
          <FaHeart />
        </i>
        <p className="trending-right-minute">{minute}</p>
        <i>
          <HiOutlineDotsHorizontal />
        </i>
      </div>
    </div>
  );
};

export default Trending;
