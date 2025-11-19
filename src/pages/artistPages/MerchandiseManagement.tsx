
// import "./MerchPage.scss";
import FeaturedCard from "../../components/cards/FeaturedCard";
import { ItemsData } from "../../components/mock/ItemData";


const list = ["All", "Clothing", "Accessories", "Posters", "Vinyl", "Digital"];

const MerchandiseManagement = () => {
  return (
    <div className="merch"> 
        <div className="merch-header">
        <h2>Merchandise Management</h2>
        </div>
        <div className="merch-header-buttons">
          {list.map((item, index) => (
            <button key={index} className="merch-header-buttons-btn">
              {item}
            </button>
          ))}
        </div>
            
    
      <div className="merch-item">
     
        <div className="merch-item-card">
          {ItemsData.map((data, index) => (
            <FeaturedCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchandiseManagement;
