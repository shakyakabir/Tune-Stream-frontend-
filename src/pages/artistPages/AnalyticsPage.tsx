import React, { useState } from "react";

import "./AnalyticsPage.scss";
import StatsCard from "../../components/cards/StatsCard";
import ActivityItem from "../../components/ActivityItem/ActivityItem";

import LineChart from "../../components/chart/LineChart";
import ChartModal from "../../components/ActivityItem/modal/ChartModal";

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

  const topTracksData = [
    {
      rank: 1,
      title: "Midnight Dreams",
      streams: "43.2k",
      amount: "12,450",
      trend: 18,
      history: [300, 500, 400, 700, 600, 800, 950],
    },
    {
      rank: 2,
      title: "Electric Sunset",
      streams: "38.9k",
      amount: "10,890",
      trend: 24,
      history: [300, 500, 400, 700, 600, 800, 950],
    },
    {
      rank: 3,
      title: "Neon Waves",
      streams: "32.1k",
      amount: "8,760",
      trend: 15,
      history: [300, 500, 400, 700, 600, 800, 950],
    },
    {
      rank: 4,
      title: "City Lights",
      streams: "28.4k",
      amount: "7,230",
      trend: -5,
      history: [300, 500, 400, 700, 600, 800, 950],
    },
    {
      rank: 5,
      title: "Summer Vibes",
      streams: "24.7k",
      amount: "6,180",
      trend: 8,
      history: [300, 500, 400, 700, 600, 800, 950],
    },
  ];
  const [selectedTrack, setSelectedTrack] = useState<any | null>(null);

  return (
    <div className="analytics">
      <h2
        style={{
          color: "#fff",
          marginBottom: "0px",
          marginTop: "0",
          fontSize: "2rem",
        }}
      >
        Analytics Overview
      </h2>
      <p
        style={{
          color: "#a9a9a99f",
          marginBottom: "20px",
          marginTop: "0",
          fontSize: "1rem",
        }}
      >
        Track your performance with real-time insights into streams, audience
        growth, and engagement to understand what’s working and where to improve
      </p>
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
      <div
        className="analytics-tracks"
        // style={{
        //   backgroundColor: "#0d0f14",
        //   padding: "20px",
        //   borderRadius: "16px",
        //   // maxWidth: "450px",
        // }}
      >
        <h2 style={{ color: "#fff", marginBottom: "20px", fontSize: "1.2rem" }}>
          Top Earning Tracks
        </h2>

        <div className="analytics-tracks-list">
          {topTracksData.map((track) => (
            <ActivityItem
              key={track.rank}
              rank={track.rank}
              title={track.title}
              streams={track.streams}
              amount={track.amount}
              trend={track.trend}
              isActive={selectedTrack?.rank === track.rank} // Highlights if selected
              onClick={() => setSelectedTrack(track)} // Opens the modal
            />
          ))}
        </div>

        {/* The Popup Component */}
        <ChartModal
          isOpen={!!selectedTrack} // True if selectedTrack is not null
          onClose={() => setSelectedTrack(null)} // Resets state to close modal
          trackData={selectedTrack}
        />
      </div>

      {/* RIGHT SIDE — LISTENER DEMOGRAPHICS */}
      {/* <div className="analytics-box">
          <h3>Listener Demographics</h3>

          {demographics.map((item, index) => (
            <ProgressBar
              key={index}
              label={item.label}
              value={item.value}
              max={item.max}
            />
          ))}
        </div> */}
    </div>
  );
};

export default AnalyticsPage;
