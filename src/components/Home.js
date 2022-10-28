import React from "react";
import styles from "./Home.module.css";
import twitBackground from "../images/twitter-background.jpg"
import spotify32 from "../images/spotify-32.png"
import twitter32 from "../images/twitter-32.png"
import fb32 from "../images/facebook-3-32.png"


function Home () {

  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
      width: '90%',
      height: '300',
        uri: 'spotify:episode:2fI66ALYulJfKV56tEN86E'
      };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

  return (
    <>
      <div className={styles.homie}>
        <div className={styles.header}>
        <a href="https://open.spotify.com/show/4ggk2LZstPiXlDI870CMXG?si=8459761b71ea4dac"><img src={spotify32}/></a>
        <a href="https://twitter.com/TTR110983?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ATTR110983%7Ctwcon%5Es2"><img src={twitter32}/></a>
        <a href="https://www.facebook.com/TTReporter"><img src={fb32}/></a>
          <h1 className={styles.title} >The Table Top Reporter!</h1>
        </div>
        <div className={styles.newsPaper}>
          <div id="blurp" className={styles.blurb}>
            <h3 className={styles.h3}>Welcome to all things tabletop!</h3>
            <p className={styles.para}>My passion for DnD has driven me to begin this website. Here you can keep up to date with the latest tweets and spotify episodes. You will also be able to find all of my social media links here in order to contact me with ideas and feedback. Enjoy!</p>
          </div>
          <div>
            <img src={twitBackground} alt="twitter background" className={styles.twitBKG}/>
          </div>
          <div id="embed-iframe" className={styles.spott}>
          </div>
          <div className={styles.secondBlurb}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
            </p>
          </div> 
          <a class="twitter-timeline" className={styles.tweet} data-width="800" data-height="500" data-theme="dark" href="https://twitter.com/TTR110983?ref_src=twsrc%5Etfw">Tweets by TTR110983</a>
          <h4 className={styles.h4}>Thank you for visiting!</h4>
        </div>
      </div>
    </>
  );
}

export default Home;
