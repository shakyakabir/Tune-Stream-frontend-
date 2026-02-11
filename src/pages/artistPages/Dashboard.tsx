import React from "react";
import "./Dashboard.scss";
import StatsCard from "../../components/cards/StatsCard";
import QuickActionCard from "../../components/cards/QuickActionCard";
// import ActivityItem from "../../components/ActivityItem/ActivityItem";
import { FaPlay, FaShuffle, FaRegHeart } from "react-icons/fa6";
import {
  // activityData,
  quickActionsData,
  statsData,
} from "../../components/mock/DashboardData";
import HeroComponent from "../../components/HeroSection/HeroComponent";

import RecentCard from "../../components/cards/RecentCard";
import Trending from "../../components/cards/Trending";
import { playlistData } from "../../components/mock/PlaylistData";
import FeaturedCard from "../../components/cards/FeaturedCard";
import { FaMusic } from "react-icons/fa";

const RecentData = [
  {
    name: "your track mdinight has reached 10k Stream",
    icon: <FaMusic />,
  },
  {
    name: "your track mdinight has reached 10k Stream",
    icon: <FaMusic />,
  },
  {
    name: "your track mdinight has reached 10k Stream",
    icon: <FaMusic />,
  },
];
const TrendingData = [
  {
    id: 1,
    title: "Neon Nights",
    artist: "Cyber Echo",
    plays: "2.1M",
    icon: "🍹",
    duration: "3:42",
    image: "/playlist-image.jpg",
  },
  {
    id: 2,
    title: "Starlight",
    artist: "Aurora Wave",
    plays: "1.8M",
    icon: "🍹",
    duration: "4:15",
    image: "/playlist-image.jpg",
  },
  {
    id: 3,
    title: "Neon Nights",
    artist: "Cyber Echo",
    plays: "2.1M",
    icon: "🍹",
    duration: "3:42",
    image: "/playlist-image.jpg",
  },
  {
    id: 4,
    title: "Starlight",
    artist: "Aurora Wave",
    plays: "1.8M",
    icon: "🍹",
    duration: "4:15",
    image: "/playlist-image.jpg",
  },
  {
    id: 5,
    title: "Neon Nights",
    artist: "Cyber Echo",
    plays: "2.1M",
    icon: "🍹",
    duration: "3:42",
    image: "/playlist-image.jpg",
  },
  {
    id: 2,
    title: "Starlight",
    artist: "Aurora Wave",
    plays: "1.8M",
    icon: "🍹",
    duration: "4:15",
    image: "/playlist-image.jpg",
  },
];
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <HeroComponent
        heading={"Welcome Back Tunespot"}
        subHeading={
          "Your Creative hub is thriving . Here's what's Happening with your music and merchandise today"
        }
        buttonName1="play All"
        image1="/artist-1.jpg"
        icon1={<FaPlay />}
        icon2={<FaShuffle />}
        icon3={<FaRegHeart />}
        varient1="darkgradient"
        varient2="light"
        buttonName2="Shuffle"
        name="Change"
        buttonName3="uploadMusic"
      />
      <div className="dashboard-stats-section">
        {statsData.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
          />
        ))}
      </div>
      <h3 className="dashboard-section-title">Quick Actions</h3>
      <div className="dashboard-quick-actions">
        {quickActionsData.map((item, index) => (
          <QuickActionCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            link={item.link}
            index={index}
          />
        ))}
      </div>
      {/* <h3 className="section-title">Recent Activity</h3>
      <div className="recent-activity">
        {activityData.map((item, index) => (
          <ActivityItem key={index} text={item.text} time={item.time} />
        ))}
      </div> */}
      <div className="dashboard-playlist-layout">
        {/* {Trending Now} */}
        <div className="dashboard-playlist-layout-track">
          <div className="dashboard-playlist-layout-track-content">
            <h3>Popular Track</h3>
            {TrendingData.map((data) => (
              <>
                <Trending
                  name={data.title}
                  author={data.artist}
                  view={data.plays}
                  minute={data.duration}
                  image={data.image}
                />
                <hr />
              </>
            ))}
          </div>
          <div className="dashboard-playlist-layout-track-albums">
            <div className="dashboard-playlist-layout-track-albums-header">
              <h3>Albums & Singlest</h3>
            </div>
            <div className="dashboard-playlist-layout-track-albums-card">
              {playlistData.slice(0, 4).map((data) => (
                <FeaturedCard
                  type="playlist"
                  title={data.title}
                  audioUrl={data.audioUrl}
                  songsCount={data.songsCount}
                  duration={data.duration}
                  image={data.image}
                />
              ))}
            </div>
          </div>
        </div>
        {/* {Recently Played} */}
        <div className="dashboard-playlist-layout-recent">
          <div className="dashboard-playlist-layout-recent-content">
            <h3>Recent Played</h3>
            {RecentData.map((data) => (
              <RecentCard name={data.name} icon={data.icon} />
            ))}
          </div>
          <div className="dashboard-playlist-layout-recent-about">
            <h5>About</h5>

            <p>
              A passionate artist blending emotion and sound, creating music
              that connects deeply with listeners. Known for a unique style and
              heartfelt performances that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
