import React from "react";
import styles from "./Home.module.css";


function Home () {
  return (
    <>
      <div className={styles.homie}>
        <h1 className={styles.title} >The Table Top Reporter!</h1>
        <div className={styles.newsPaper}>
          <p>Hello</p>
        </div>
      </div>
    </>
  );
}

export default Home;
