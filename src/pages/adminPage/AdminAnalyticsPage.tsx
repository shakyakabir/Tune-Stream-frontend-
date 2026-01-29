import React from "react";
import styles from "./AdminAnalyticsPage.module.scss";

import { PendingRequests } from "../../components/Admin/PendingRequests";
import { TopArtists } from "../../components/Admin/TopArtists";
import { RecentActivity } from "../../components/Admin/RecentActivity";

import LineChart from "../../components/chart/LineChart";
import { GenrePieChart } from "../../components/chart/PieChart";
import { StatsCard } from "../../components/statsCard/StatsCard";

export const AdminAnalyticsPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles["page-statsRow"]}>
        <StatsCard
          label="Total Users"
          value="2.4M"
          change="+12.5%"
          changeType="up"
        />
        <StatsCard
          label="Active Artists"
          value="15.2K"
          change="+8.3%"
          changeType="up"
        />
        <StatsCard
          label="Total Streams"
          value="847M"
          change="-2.1%"
          changeType="down"
        />
        <StatsCard
          label="Revenue"
          value="$1.2M"
          change="+15.7%"
          changeType="up"
        />
      </div>

      <div className={styles["page-graphRow"]}>
        <LineChart />
        <GenrePieChart />
      </div>

      <div className={styles["page-bottomRow"]}>
        <PendingRequests />
        <TopArtists />
        <RecentActivity />
      </div>
    </div>
  );
};
