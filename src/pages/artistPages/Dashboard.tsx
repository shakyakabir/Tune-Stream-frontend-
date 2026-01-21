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
import { RecentData, TrendingData } from "../../components/mock/TrendingData";
import RecentCard from "../../components/cards/RecentCard";
import Trending from "../../components/cards/Trending";
import { playlistData } from "../../components/mock/PlaylistData";
import FeaturedCard from "../../components/cards/FeaturedCard";

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
      <div className="stats-section">
        {statsData.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
          />
        ))}
      </div>
      <h3 className="section-title">Quick Actions</h3>
      <div className="quick-actions">
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
      <div className="landing-playlist">
        <div className="landing-playlist-header">
          <h3>Albums & Singlest</h3>
        </div>
        <div className="landing-playlist-recommended-card">
          {playlistData.map((data) => (
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
      //{" "}
    </div>
  );
};

export default Dashboard;
