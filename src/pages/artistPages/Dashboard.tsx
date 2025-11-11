import React from "react";
import "./Dashboard.scss";
import StatsCard from "../../components/cards/StatsCard";
import QuickActionCard from "../../components/cards/QuickActionCard";
import ActivityItem from "../../components/ActivityItem/ActivityItem";
import { activityData, quickActionsData, statsData } from "../../components/mock/DashboardData";
import HeroComponent from "../../components/HeroSection/HeroComponent";


const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">

        <HeroComponent
        heading={"Welcome Back Tunespot"}
        subHeading={"Your Creative hub is thriving . Here's what's Happening with your music and merchandise today"}

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
          />
        ))}
      </div>

      <h3 className="section-title">Recent Activity</h3>
      <div className="recent-activity">
        {activityData.map((item, index) => (
          <ActivityItem key={index} text={item.text} time={item.time} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
