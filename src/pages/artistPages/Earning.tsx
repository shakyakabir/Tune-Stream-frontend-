import React from "react";

import "./Earning.scss";
import StatsCard from "../../components/cards/StatsCard";
import ActivityItem from "../../components/ActivityItem/ActivityItem";
import ProgressBar from "../../components/Progressbar/ProgressBar";
import DoughnutChart from "../../components/chart/DoughnutChart";
import { TrendingData } from "../../components/mock/TrendingData";
import Trending from "../../components/cards/Trending";

const Earning: React.FC = () => {
  // 👉 Top Stats Data
  const statsData = [
    {
      title: "Total Earnings",
      value: "284,548",
      change: "+24.5% from last month",
    },
    {
      title: "Earnings This Month",
      value: "52,348",
      change: "+12.2% from last month",
    },
    {
      title: "Earnings Growth",
      value: "68.5%",
      change: "+6.2% from last month",
    },
    {
      title: "Revenue per Stream",
      value: "3m 42s",
      change: "+8% from last month",
    },
  ];

  // 👉 Top Tracks Data
  const topTracks = [
    { text: "Midnight Dreams • 43.2k streams", time: "+18%" },
    { text: "Electric Sunset • 38.9k streams", time: "+24%" },
    { text: "Neon Waves • 32.1k streams", time: "+15%" },
  ];

  // 👉 Listener Demographics
  const demographics = [
    { label: "United States", value: 22.1, max: 25 },
    { label: "United Kingdom", value: 8.4, max: 25 },
    { label: "Canada", value: 6.3, max: 25 },
    { label: "Australia", value: 4.2, max: 25 },
  ];

  return (
    <div className="earning">
      <div className="earning-header">
        <h2>Earnings Overview</h2>
        <p>Track your revenue and income analytics</p>
      </div>

      <div className="earning-overview">
        <h5>
          <span className="title">Total Earnings</span> <br />
          <span className="earning">Rs 74,000</span>
        </h5>

        {/* TOP CARDS */}
        <div className="earning-overview-cards">
          {statsData.map((item, index) => (
            <StatsCard
              key={index}
              title={item.title}
              value={item.value}
              change={item.change}
            />
          ))}
        </div>
      </div>

      <div className="earning-analytics-grid">
        {/* LEFT SIDE -— TOP TRACKS */}
        <div className="earning-analytics-grid-box">
          <h3>Top Performing Tracks</h3>

          {/* {topTracks.map((track, index) => (
            <ActivityItem key={index} text={track.text} time={track.time} />
          ))} */}
          <div className="earning-analytics-grid-box-chart">
            <DoughnutChart />
          </div>
        </div>

        {/* RIGHT SIDE — LISTENER DEMOGRAPHICS */}
        <div className="earning-analytics-box">
          <h3>Listener Demographics</h3>

          {demographics.map((item, index) => (
            <ProgressBar
              key={index}
              label={item.label}
              value={item.value}
              max={item.max}
            />
          ))}
        </div>
      </div>
      <div className="earning-trend">
        <h2>Top Earning Tracks</h2>
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
  );
};

export default Earning;
