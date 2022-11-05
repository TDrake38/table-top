import React, { useState } from "react";
import styles from "./Home.module.css";
import twitBackground from "../images/twitter-background.jpg";
import spotify32 from "../images/spotify-32.png";
import twitter32 from "../images/twitter-32.png";
import fb32 from "../images/facebook-3-32.png";
import TweetFeed from "./Twitter";

function Home() {
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById("embed-iframe");
    let options = {
      width: "90%",
      height: "300",
      uri: "spotify:episode:2fI66ALYulJfKV56tEN86E",
    };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

  return (
    <>
      <div className={styles.homie}>
        <div className={styles.header}>
          <a href="https://open.spotify.com/show/4ggk2LZstPiXlDI870CMXG?si=8459761b71ea4dac">
            <img src={spotify32} />
          </a>
          <a href="https://twitter.com/TTR110983?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ATTR110983%7Ctwcon%5Es2">
            <img src={twitter32} />
          </a>
          <a href="https://www.facebook.com/TTReporter">
            <img src={fb32} />
          </a>
          <h1 className={styles.title}>The Table Top Reporter</h1>
        </div>
        <div className={styles.newsPaper}>
          <div id="blurp" className={styles.blurb}>
            <h3 className={styles.h3}>Welcome to my table top!</h3>
            <p className={styles.paraOne}>
              My passion for RPG's has driven me to begin this journey. Here you
              can keep up to date with the latest tweets and spotify episodes.
              You will also be able to find all of my social media links here in
              order to contact me with ideas and feedback. Enjoy!
            </p>
          </div>
          <div>
            <img
              src={twitBackground}
              alt="twitter background"
              className={styles.twitBKG}
            />
          </div>
          <div id="embed-iframe" className={styles.spotty}></div>
          <div className={styles.secondBlurb}>
            <h3 className={styles.updateTitle}>
              Adventures in Annam: A monthly DnD game where players live and
              quest in a land dominated by giants and dragons.
            </h3>
            <p className={styles.para}>
              <h4>Three lifelines intersect in the debut session.</h4>
              "A Red Wyrmling was following a herd of Mammoths when it caught
              the scent of minotaur, since it was looking for an easy meal, the
              dragon veered off towards the smell of its new prey. Little did
              the wyrmling know, its presence in the region had been noticed by
              a tribe of Loxodon who had sent two of their best to track and
              observe. Glorak and Heruj were close to catching up. At the same
              time, a very short distance away, two figures traversed the
              landscape together, a Stone Giant and a stranger to this world.
              The giant was escorting the "man who fell from the stars" back to
              the Storm Giants of the Floating Isles. From the crest of a hill,
              the star man saw the scene play out, a minotaur maneuvering
              through rocky outcroppings, the two loxodon moving towards their
              target, and the dragon swooping down to breath fire on its prey.
              The grey skinned man knew such a beast to be a threat and that it
              would be difficult to best. With a glance at the stone giant, he
              said, "Throw me!"
              <br />
              The stone giant looked out at the scene, dragons were the mortal
              enemies of his kind, and the little folk would make excellent
              servants, or at least the survivors would. Silently the giant
              nodded, picked up his companion and prepared to throw.
              <br />
              T'Zorem dove for cover just before the area was awash with dragon
              breath. Singed yet surviving, the minotaur' Zen Training kept him
              aware of his surroundings. He had of course been surviving on his
              own for as long as he could remember. Under attack now, from a
              dragon no less, T'Zorem took stock of his situation as the
              wyrmling circled around for another blast of flame. At that moment
              he witnessed the most peculiar happening. From off in the hills
              came a large gray skinned man, hurtling through the air, that
              collided with the flying dragon and somehow managed to cling to
              the beast!!
              <details>
                <summary>Read more.</summary>
                <p>
                  The dragon thrashed and flexed yet could not throw off the
                  restraining grapple of the goliath sized man. Unable to move
                  properly, the beast fell to the ground taking its grappler
                  with it. Some yards away, Glorak and Heruj witness all this as
                  well, looked at each other and sprang into action. Glorak
                  rushing forward, hurled javelins, while Heruj flung arrows at
                  the downed dragon. They had been sent to stalk, locate and
                  report back, but glory would be theirs if they could guarantee
                  the safety of the tribe.
                  <br />
                  As the dust settled from their impact with the ground, the
                  stranger quickly called upon divine magic and commanded the
                  red scaled serpent to sleep. The creature tried to resist the
                  magic but could not help itself. Before T'Zorem' eyes lay a
                  grounded, sleeping dragon and the minotaur leapt into action.
                  T'Zorem charged the prone creature and slammed it with horn
                  and fist, just barely able to breach the dragons hide and
                  inflict wounds upon it. At the same time, javelins landed wide
                  and missed their target while arrows found home, hitting
                  vulnerable spots on the dragon's body. It stirred under the
                  flurry of attacks its aggressors had laid upon it and no
                  longer under the stranger's magic, it rose up from the ground
                  and spewed forth a wide arc of flame.
                  <br />
                  Glorak had just reached the melee as the flames engulfed him,
                  the minotaur and the goliath. The gray skinned man was the
                  only one left standing after the breath attack as more arrows
                  zipped past, glancing off the beasts' scales.
                  <br />
                  With a thrust of its wings the wyrmling took to the air once
                  again and flew around to position itself for one more blast of
                  fire. the stranger healed himself and yelled back to the stone
                  giant who was approaching cautiously. The goliath called for
                  aid and the stone giant obliged. A mighty rock flew through
                  the air and slammed the remaining life from the dragon's body.
                  The creature fell back to the earth, dead.
                  <br />
                  "These little ones will make excellent servants" the stone
                  giant exclaimed as it approached. Glorak roused to his senses
                  and looked to Heruj who was by his side, Heruj knew his
                  tribemate would not be taken without a fight. The stranger
                  noticed this determination as well and spoke, "I cannot
                  guarantee your life, but come with us peacefully and the
                  giants will treat you fairly."
                  <br />
                  Heruj urged Glorak to comply, "At least until you are healed."
                  he whispered The stone giant picked up the unconscious
                  minotaur that had been stabilized by the goliath. Urging the
                  little folk forward, the Giant proceeded to escort them
                  towards the Storm Isles. Night would come however so the group
                  stopped and made camp to rest. The next four days of travel
                  would determine their fate.
                </p>
              </details>
            </p>
          </div>
          <TweetFeed />
        </div>
      </div>
    </>
  );
}

export default Home;
