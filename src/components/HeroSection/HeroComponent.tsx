import React from "react";
import Button from "../ui/Button";
import "./Hero.scss";

interface HeroProps {
  heading: string;
  subHeading: string;
  buttonName1: string;
  buttonName2: string;
  image?: string;
}
const HeroComponent: React.FC<HeroProps> = ({
  heading,
  subHeading,
  buttonName1,
  buttonName2,
  image,
}) => {
  return (
    <div>
      <div className="hero">
        <div className="hero-info">
          <h2>{heading}</h2>
          <p>{subHeading}</p>
          <div className="hero-info-button-container">
            <Button text={buttonName1} varient={"active"} type={"submit"} />
            <Button text={buttonName2} varient={"active"} type={"submit"} />
          </div>
        </div>
        {image && (
          <div className="hero-image">
            <img src={image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroComponent;
