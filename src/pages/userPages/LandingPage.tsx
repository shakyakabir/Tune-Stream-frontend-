import "./LandingPage.scss";
import FeaturedCard from "../../components/cards/FeaturedCard";
import { playlistData } from "../../components/mock/PlaylistData";
import Trending from "../../components/cards/Trending";
import { TrendingData } from "../../components/mock/TrendingData";
import RecentCard from "../../components/cards/RecentCard";
import HeroComponent from "../../components/HeroSection/HeroComponent";

const LandingPage = () => {
  return (
    <div className="landing">
      {/* {hero section} */}
      <HeroComponent
        heading={"Welcome to Tunespot"}
        subHeading={"Discover new music, book events, and shop exclusive merch"}
        buttonName1={"Sign In to Listen"}
        buttonName2={"Browse Playlists"}
      />

      {/* {Featured Playlist} */}

      <div className="landing-playlist">
        <div className="landing-playlist-header">
          <h3>Featured Playlist</h3>
          <p>View all</p>{" "}
        </div>

        <div className="landing-playlist-card">
          {playlistData.map((data) => (
            <FeaturedCard
              type="playlist"
              title={data.title}
              subtitle={data.subtitle}
              songsCount={data.songsCount}
              duration={data.duration}
              image={data.image}
            />
          ))}
        </div>
      </div>

      <div className="landing-player-layout">
        {/* {Trending Now} */}
        <div className="landing-player-layout-trending">
          {TrendingData.map((data) => (
            <Trending
              name={data.title}
              author={data.artist}
              view={data.plays}
              minute={data.duration}
              image={data.image}
            />
          ))}
        </div>
        {/* {Recently Played} */}
        <div className="landing-player-layout-recent">
          {TrendingData.map((data) => (
            <RecentCard
              name={data.title}
              artist={data.artist}
              duration={data.duration}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
