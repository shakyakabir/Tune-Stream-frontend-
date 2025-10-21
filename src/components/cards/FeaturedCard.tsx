import React from "react";
import type { FeaturedCard as FeaturedCardType } from "../types/cards";
import { FaPlay, FaStar, FaShoppingCart } from "react-icons/fa";
import "./FeaturedCard.scss";

const FeaturedCard: React.FC<FeaturedCardType> = ({
  type,
  image,
  title,
  subtitle,
  rating,
  reviews,
  badge,
  songsCount,
  duration,
  date,
  location,
  tags = [],
  priceRange,
  price,
  oldPrice,
  colors = [],
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="featuredCard">
      {/* Badge */}
      {badge && <span className="featuredCard__badge">{badge}</span>}

      {/* Image */}
      <div className="featuredCard__imageContainer">
        {image && (
          <img src={image} alt={title} className="featuredCard__image" />
        )}

        {type === "playlist" && (
          <button className="featuredCard__playButton">
            <FaPlay size={14} />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="featuredCard__content">
        {/* Tags */}
        {type === "event" && tags.length > 0 && (
          <div className="featuredCard__tags">
            {tags.map((t, i) => (
              <span key={i} className="featuredCard__tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <h3 className="featuredCard__title">{title}</h3>
        {subtitle && <p className="featuredCard__subtitle">{subtitle}</p>}

        {/* Playlist Info */}
        {type === "playlist" && (
          <p className="featuredCard__playlistInfo">
            {songsCount} songs • {duration}
          </p>
        )}

        {/* Event Info */}
        {type === "event" && (
          <div className="featuredCard__eventInfo">
            {rating && (
              <p className="featuredCard__rating">
                <FaStar size={12} /> {rating}
              </p>
            )}
            {date && <p>📅 {date}</p>}
            {location && <p>📍 {location}</p>}
            {priceRange && (
              <p className="featuredCard__priceRange">From {priceRange}</p>
            )}
          </div>
        )}

        {/* Product Info */}
        {type === "product" && (
          <>
            {rating && (
              <div className="featuredCard__productRating">
                <FaStar size={12} /> {rating}
                {reviews && (
                  <span className="featuredCard__reviews">
                    ({reviews} reviews)
                  </span>
                )}
              </div>
            )}

            {colors.length > 0 && (
              <div className="featuredCard__colors">
                <p className="featuredCard__colorsLabel">Colors:</p>
                {colors.map((c, i) => (
                  <span
                    key={i}
                    className="featuredCard__colorDot"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            )}

            <div className="featuredCard__productFooter">
              <div className="featuredCard__priceSection">
                <span className="featuredCard__price">{price}</span>
                {oldPrice && (
                  <span className="featuredCard__oldPrice">{oldPrice}</span>
                )}
              </div>
              {buttonText && (
                <button
                  className="featuredCard__button"
                  onClick={onButtonClick}
                >
                  <FaShoppingCart size={14} /> {buttonText}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedCard;
