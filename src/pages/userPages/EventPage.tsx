import HeroComponent from "../../components/HeroSection/HeroComponent";
import { EventData } from "../../components/mock/EventData";
import FeaturedCard from "../../components/cards/FeaturedCard";
import "./EventPage.scss";
import { CategoryData } from "../../components/mock/CategoryData";
import CategoryCard from "../../components/cards/CategoryCard";
import { FaShoppingBag } from "react-icons/fa";

const EventPage = () => {
  return (
    <div className="event">
      <HeroComponent
        heading={"Live Music Events"}
        subHeading={
          "Discover and book tickets for the hottest concerts, festivals, and live performances"
        }
        buttonName1={"Browse All Events"}
        buttonName2={"Find Events Near Me"}
      />
        <div className="event-header">
          <h3>Featured Events</h3>
          <p>View all</p>{" "}
        </div>


      <div className="event-featured">
        {EventData.map((card, index) => (
          <FeaturedCard key={index} {...card} />
        ))}
      </div>
      <h3 className="event-category-card-header">
        Browse by Category
      </h3>
 <div className="event-category-card">
          {CategoryData.map((data) => (
            <CategoryCard icon={<FaShoppingBag />} title={data.title} />
          ))}
        </div>

    </div>
  );
};

export default EventPage;
