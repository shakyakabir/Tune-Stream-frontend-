import React from "react";
import styles from "./RecentActivity.module.scss";

export const RecentActivity: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper-row"]}>
        <div className={`${styles["wrapper-dot"]} ${styles.green}`}></div>
        <span>New artist approved</span>
      </div>

      <button className={styles["wrapper-btn"]}>View All Activity</button>
    </div>
  );
};
