import React from "react";
import Button from "../ui/Button";
import "./Hero.scss";

interface HeroProps {
  heading: string;
  subHeading: string;
  buttonName1?: string;
  buttonName2?: string;
  image?: string;
  icon?: React.ReactNode; 
}
const HeroComponent: React.FC<HeroProps> = ({
  heading,
  subHeading,
  buttonName1,
  buttonName2,
  icon,
  image,
}) => {
  return (
    <div>
      <div className="hero">
        <div className="hero-info">
          <h2>{heading}</h2>
          <p>{subHeading}</p>
          <div className="hero-info-button-container">
            {buttonName1 &&
            
                      
            <Button text={buttonName1} icon={icon} varient={"white"} type={"submit"} />
          
          }
              {buttonName2 &&
            <Button text={buttonName2} varient={"active"} type={"submit"} />
            }

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
