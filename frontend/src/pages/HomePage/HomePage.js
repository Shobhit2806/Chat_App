import React from "react";
import styles from "./HomePage.module.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const onComplete=()=>{
    navigate("/chat")
  }
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage_progress_bar}>
        <ProgressBar onComplete={onComplete}/>
      </div>
      <p className={styles.homepage_title}>CONVERSIFY</p>
    </div>
  );
};

export default HomePage;
