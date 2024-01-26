import React from "react";
import styles from "./HomePage.module.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage_progress_bar}>
        <ProgressBar />
      </div>
      <p className={styles.homepage_title}>CONVERSIFY</p>
    </div>
  );
};

export default HomePage;
