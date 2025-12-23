import React from "react";
import styles from "./PendingRequests.module.scss";

export const PendingRequests: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper-item"]}>
        <div>
          <div className={styles["wrapper-name"]}>Luna Martínez</div>
          <div className={styles["wrapper-genre"]}>Pop, R&B</div>
        </div>
        <button className={styles["wrapper-arrow"]}>→</button>
      </div>

      <button className={styles["wrapper-viewBtn"]}>View All Requests</button>
    </div>
  );
};
