import React from "react";
import styles from "./Home.module.css";
import twitBackground from "../images/twitter-background.jpg"


function Home () {

  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
      width: '45%',
      height: '300',
        uri: 'spotify:episode:2fI66ALYulJfKV56tEN86E'
      };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

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
          <div id="embed-iframe">
          </div> 
          <a class="twitter-timeline" data-width="250" data-height="500" data-theme="dark" href="https://twitter.com/TTR110983?ref_src=twsrc%5Etfw">Tweets by TTR110983</a>
        </div>
      </div>
    </>
  );
}

export default Home;
