import React from "react";
import styles from "./StatsCard.module.scss";

interface Props {
  label: string;
  value: string;
  change: string;
  changeType: "up" | "down" | "neutral";
}

export const StatsCard: React.FC<Props> = ({
  label,
  value,
  change,
  changeType,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-label"]}>{label}</div>
      <div className={styles["card-value"]}>{value}</div>

      <div className={`${styles["card-change"]} ${styles[changeType]}`}>
        {change}
      </div>
    </div>
  );
};
