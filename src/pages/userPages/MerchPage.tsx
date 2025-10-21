import HeroComponent from "../../components/HeroSection/HeroComponent";
import CategoryCard from "../../components/cards/CategoryCard";
import { CategoryData } from "../../components/mock/CategoryData";
import { FaShoppingBag } from "react-icons/fa";
import "./MerchPage.scss";
import FeaturedCard from "../../components/cards/FeaturedCard";
import { ItemsData } from "../../components/mock/ItemData";

const MerchPage = () => {
  return (
    <div className="merch">
      <HeroComponent
        heading={"Artist Merchandise"}
        subHeading={
          "Show your love for your favorite artists with exclusive merch, limited editions, and festival gear"
        }
        buttonName1={"Shop All Items"}
        buttonName2={"Filter by Artist"}
      />

      <div className="merch-category">
        <h3>Featured Playlist</h3>
        <div className="merch-category-card">
          {CategoryData.map((data) => (
            <CategoryCard icon={<FaShoppingBag />} title={data.title} />
          ))}
        </div>
      </div>
      <div className="merch-item">
        <div className="merch-item-header">
          <h3>Featured Playlist</h3>
          <p>View all</p>{" "}
        </div>
        <div className="merch-item-card">
          {ItemsData.map((data, index) => (
            <FeaturedCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchPage;
