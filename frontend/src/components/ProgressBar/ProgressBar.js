import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({onComplete}) => {
  const [value, setValue] = useState(0);
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((val) => {
        if (val >= 99) {
          clearInterval(intervalId);
          onComplete();
        }
        return val + 1;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={styles.progress_bar_box}>
      <div
        className={styles.progress}
        // style={{ width: `${value}%` }}
        style={{ transform: `scaleX(${value / 100})`, transformOrigin: "left" }}
      />
    </div>
  );
};

export default ProgressBar;
