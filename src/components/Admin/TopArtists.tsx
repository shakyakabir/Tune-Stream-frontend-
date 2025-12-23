import React from "react";
import styles from "./TopArtists.module.scss";

export const TopArtists: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper-row"]}>
        <div>Marcus Johnson</div>
        <div>2.4M streams</div>
      </div>

      <button className={styles["wrapper-btn"]}>View Full Rankings</button>
    </div>
  );
};
