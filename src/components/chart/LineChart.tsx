import React from "react";
import styles from "./LineChart.module.scss";

export const StreamingChart: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper-header"]}>Streaming Trends</div>
      {/* Insert your chart library here */}
    </div>
  );
};
