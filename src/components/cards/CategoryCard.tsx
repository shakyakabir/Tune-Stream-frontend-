import React from "react";
import "./CategoryCard.scss";
interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title }) => {
  return (
    <div className="CategoryCard">
      <span>{icon}</span>
      <h6>{title}</h6>
    </div>
  );
};

export default CategoryCard;
