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
            <p className={styles.para}>My passion for DnD has driven me to begin this website. Here you can keep up to date with the latest tweets and spotify episodes. You will also be able to find all of my social media links here in order to contact me with ideas and feedback. Enjoy!</p>
          </div>
          <div>
            <img src={twitBackground} alt="twitter background" className={styles.twitBKG}/>
          </div>
          <div className={styles.spotify}>
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
