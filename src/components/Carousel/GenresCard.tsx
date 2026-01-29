import React, { useState } from "react";
import Button from "../ui/Button";
import "./GenresCard.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export interface Genre {
  title: string;
  view: string;
}

interface GenresCardProps {
  data: Genre[];
  visibleCount?: number; // number of visible cards
}

const GenresCard: React.FC<GenresCardProps> = ({ data, visibleCount = 6 }) => {
  const colors = ["#90284a", "#7e3016", "#4a3992", "#145e89", "#8f6605"];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const cardWidth = 100 / visibleCount;

  return (
    <div className="carousel">
      <h2>Browse Genres</h2>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * cardWidth}%)` }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="carousel-card"
            style={{
              flex: `0 0 ${cardWidth}%`,
              backgroundColor: colors[index % colors.length],
            }}
          >
            <p className="carousel-card-title">{item.title}</p>
            <h2 className="carousel-card-h2title">{item.title}</h2>
            <p className="carousel-card-view">{item.view} track</p>
          </div>
        ))}
      </div>

      <div className="carousel-button">
        <Button
          icon={<FaArrowLeft />}
          varient={""}
          type={"button"}
          onClick={prevSlide}
        />
        <Button
          icon={<FaArrowRight />}
          varient={""}
          type={"button"}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default GenresCard;
