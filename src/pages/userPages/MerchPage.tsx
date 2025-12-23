import HeroComponent from "../../components/HeroSection/HeroComponent";
import CategoryCard from "../../components/cards/CategoryCard";
import { CategoryData } from "../../components/mock/CategoryData";
import { FaShoppingBag } from "react-icons/fa";
import "./MerchPage.scss";
import FeaturedCard from "../../components/cards/FeaturedCard";

import { useEffect, useState } from "react";
import { type MerchData } from "../../api/Type/Merch";
import { MerchServices } from "../../api/Service/MerchServices";

const MerchPage = () => {
  const [merchDatas, setMerchDatas] = useState<MerchData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMerchData = async () => {
      try {
        setLoading(true);
        const response = await MerchServices();
        console.log("Fetched Merch Data:", response);
        setMerchDatas(response);
      } catch (error) {
        console.error("Error fetching merch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMerchData();
  }, []);

  console.log("Merch Data in Component:", merchDatas);
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
      {loading ? (
        <p>Loading merchandise...</p>
      ) : (
        <div className="merch-item">
          <div className="merch-item-header">
            <h3>Featured Playlist</h3>
            <p>View all</p>{" "}
          </div>
          <div className="merch-item-card">
            {merchDatas.map((data, index) => (
              <FeaturedCard
                key={index}
                type="product"
                image={data.imageurl}
                title={data.name}
                subtitle={data.description ?? ""}
                price={data.price}
                // colors: item.color ? [item.color] : []
                colors={data.color ? [data.color] : []}
                size={data.size}
                buttonText="Add"
                onButtonClick={() => alert(`Added ${data.name} to cart`)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchPage;
