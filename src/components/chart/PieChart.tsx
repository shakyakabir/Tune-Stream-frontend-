import React from "react";
import styles from "./PieChart.module.scss";

export const GenrePieChart: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper-header"]}>Popular Genres</div>
      {/* Insert your pie chart library */}
    </div>
  );
};
