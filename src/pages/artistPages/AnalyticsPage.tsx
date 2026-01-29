import React from "react";

import "./AnalyticsPage.scss";
import StatsCard from "../../components/cards/StatsCard";
import ActivityItem from "../../components/ActivityItem/ActivityItem";
import ProgressBar from "../../components/Progressbar/ProgressBar";
import LineChart from "../../components/chart/LineChart";

const AnalyticsPage: React.FC = () => {
  // 👉 Top Stats Data
  const statsData = [
    {
      title: "Total Streams",
      value: "284,548",
      change: "+24.5% from last month",
    },
    {
      title: "Active Listeners",
      value: "52,348",
      change: "+12.2% from last month",
    },
    {
      title: "Engagement Rate",
      value: "68.5%",
      change: "+6.2% from last month",
    },
    {
      title: "Avg Listen Time",
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
    <div className="analytics">
      {/* TOP CARDS */}
      <div className="analytics-cards">
        {statsData.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
          />
        ))}
      </div>

      <div>
        <LineChart />
      </div>
      <div className="analytics-grid">
        {/* LEFT SIDE — TOP TRACKS */}
        <div className="analytics-box">
          <h3>Top Performing Tracks</h3>

          {topTracks.map((track, index) => (
            <ActivityItem key={index} text={track.text} time={track.time} />
          ))}
        </div>

        {/* RIGHT SIDE — LISTENER DEMOGRAPHICS */}
        <div className="analytics-box">
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
    </div>
  );
};

export default AnalyticsPage;
