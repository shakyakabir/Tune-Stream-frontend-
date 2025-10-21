import HeroComponent from "../../components/HeroSection/HeroComponent";
import { EventData } from "../../components/mock/EventData";
import FeaturedCard from "../../components/cards/FeaturedCard";
import "./EventPage.scss";

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

      <div className="event-featured">
        {EventData.map((card, index) => (
          <FeaturedCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
