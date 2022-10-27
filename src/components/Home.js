import React from "react";
import styles from "./Home.module.css";
import twitBackground from "../images/twitter-background.jpg"


function Home () {
  return (
    <>
      <div className={styles.homie}>
        <h1 className={styles.title} >The Table Top Reporter!</h1>
        <div className={styles.newsPaper}>
          <div id="blurp" className={styles.blurb}>
            <h3 className={styles.h3}>Welcome to all things tabletop!</h3>
            <p>Hello</p>
          </div>
          <div>
            <img src={twitBackground} alt="twitter background" className={styles.twitBKG}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
