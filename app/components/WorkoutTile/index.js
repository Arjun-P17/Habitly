import React from "react";
import styles from "./WorkoutTile.module.scss";

export const WorkoutTile = ({ name }) => {
  return (
    <div className={styles.base}>
      <h6 className={styles["workout-name"]}>{name}</h6>
    </div>
  );
};
