import "./LandingPage.scss";
import FeaturedCard from "../../components/cards/FeaturedCard";
import { playlistData, playlistDatas } from "../../components/mock/PlaylistData";
import Trending from "../../components/cards/Trending";
import { RecentData, TrendingData } from "../../components/mock/TrendingData";
import RecentCard from "../../components/cards/RecentCard";
import HeroComponent from "../../components/HeroSection/HeroComponent";
import GenresCard from "../../components/Carousel/GenresCard";
import { GenresData } from "../../components/mock/CategoryData";
import { FiPlay } from "react-icons/fi";


const LandingPage = () => {
  return (
    <div className="landing">
      {/* {hero section} */}
         <HeroComponent
        heading={"Welcome to Tunespot"}
        subHeading={"Discover new music, book events, and shop exclusive merch"}
        buttonName1={"Sign In to Listen"}
        icon={<FiPlay/>}
                buttonName2={"Browse Playlists"}
        image="/artist-1.jpg"
      />
      <GenresCard data={GenresData} />

      {/* {Featured Playlist} */}

      <div className="landing-playlist">
        <div className="landing-playlist-header">
          <h3>Recommended Playlist</h3>
          <p>View all</p>{" "}
        </div>

        <div className="landing-playlist-recommended-card">
          {playlistData.map((data) => (
            <FeaturedCard
              type="playlist"
              title={data.title}
              
              songsCount={data.songsCount}
              duration={data.duration}
              image={data.image}
            />
          ))}
        </div>
      </div>

      <div className="landing-playlist">
        <div className="landing-playlist-header">
          <h3>Featured Playlist</h3>
          <p>View all</p>{" "}
        </div>

        <div className="landing-playlist-card">
          {playlistDatas.map((data) => (
            <FeaturedCard
              type="playlist"
              title={data.title}
             
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
        
          <h3>Trending Playlist</h3>
     <div className="landing-player-layout-trending-content">
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
        </div>
        {/* {Recently Played} */}
        <div className="landing-player-layout-recent">
           
          <h3>Recent Played</h3>
     <div className="landing-player-layout-recent-content">
          {RecentData.map((data) => (
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
    </div>
  );
};

export default LandingPage;
