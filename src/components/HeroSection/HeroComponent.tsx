import React from "react";
import Button from "../ui/Button";
import "./Hero.scss";

interface HeroProps {
  heading: string;
  name?: string;
  subHeading: string;
  buttonName1?: string;
  buttonName2?: string;
  buttonName3?: string;
  buttonName4?: string;
  image?: string;
  image1?: string;
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  icon3?: React.ReactNode;
  varient1?: string;
  varient2?: string;
  varient3?: string;
  varient4?: string;
}
const HeroComponent: React.FC<HeroProps> = ({
  heading,
  name,
  subHeading,
  buttonName1,
  buttonName2,
  buttonName3,
  buttonName4,
  varient1,
  varient2,
  // varient3,
  // varient4,
  icon1,
  icon2,
  icon3,
  image,
  image1,
}) => {
  return (
    <div>
      <div className={name ? `hero${name}` : "hero"}>
        {image1 && (
          <div className="heroChange-image1">
            <img src={image1} alt="" />
          </div>
        )}
        <div className={name ? `hero${name}-info` : "hero-info"}>
          <h2>{heading}</h2>
          <p>{subHeading}</p>
          <div
            className={
              name
                ? `hero${name}-info-button-container`
                : "hero-info-button-container"
            }
          >
            {buttonName1 && (
              <Button
                text={buttonName1}
                icon={icon1}
                varient={varient1}
                type={"submit"}
              />
            )}
            {buttonName2 && (
              <Button
                text={buttonName2}
                icon={icon2}
                varient={varient2}
                type={"submit"}
              />
            )}
            {buttonName3 && (
              <Button
                text={buttonName3}
                icon={icon3}
                varient={varient2}
                type={"submit"}
              />
            )}
            {buttonName4 && (
              <Button
                text={buttonName4}
                icon={icon3}
                varient={varient2}
                type={"submit"}
              />
            )}
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
