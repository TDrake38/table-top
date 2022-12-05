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
              <h4>Three lifelines intersect in these session recaps.</h4>
              <details>
                <summary>Debut</summary>
                <p>
                  "A Red Wyrmling was following a herd of Mammoths when it
                  caught the scent of minotaur, since it was looking for an easy
                  meal, the dragon veered off towards the smell of its new prey.
                  Little did the wyrmling know, its presence in the region had
                  been noticed by a tribe of Loxodon who had sent two of their
                  best to track and observe. Glorak and Heruj were close to
                  catching up. At the same time, a very short distance away, two
                  figures traversed the landscape together, a Stone Giant and a
                  stranger to this world. The giant was escorting the "man who
                  fell from the stars" back to the Storm Giants of the Floating
                  Isles. From the crest of a hill, the star man saw the scene
                  play out, a minotaur maneuvering through rocky outcroppings,
                  the two loxodon moving towards their target, and the dragon
                  swooping down to breath fire on its prey. The grey skinned man
                  knew such a beast to be a threat and that it would be
                  difficult to best. With a glance at the stone giant, he said,
                  "Throw me!"
                </p>
                <p>
                  The stone giant looked out at the scene, dragons were the
                  mortal enemies of his kind, and the little folk would make
                  excellent servants, or at least the survivors would. Silently
                  the giant nodded, picked up his companion and prepared to
                  throw.
                </p>
                <p>
                  T'Zorem dove for cover just before the area was awash with
                  dragon breath. Singed yet surviving, the minotaur' Zen
                  Training kept him aware of his surroundings. He had of course
                  been surviving on his own for as long as he could remember.
                  Under attack now, from a dragon no less, T'Zorem took stock of
                  his situation as the wyrmling circled around for another blast
                  of flame. At that moment he witnessed the most peculiar
                  happening. From off in the hills came a large gray skinned
                  man, hurtling through the air, that collided with the flying
                  dragon and somehow managed to cling to the beast!!
                </p>
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
                </p>
                <p>
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
                </p>
                <p>
                  Glorak had just reached the melee as the flames engulfed him,
                  the minotaur and the goliath. The gray skinned man was the
                  only one left standing after the breath attack as more arrows
                  zipped past, glancing off the beasts' scales.
                </p>
                <p>
                  With a thrust of its wings the wyrmling took to the air once
                  again and flew around to position itself for one more blast of
                  fire. the stranger healed himself and yelled back to the stone
                  giant who was approaching cautiously. The goliath called for
                  aid and the stone giant obliged. A mighty rock flew through
                  the air and slammed the remaining life from the dragon's body.
                  The creature fell back to the earth, dead.
                </p>
                <p>
                  "These little ones will make excellent servants" the stone
                  giant exclaimed as it approached. Glorak roused to his senses
                  and looked to Heruj who was by his side, Heruj knew his
                  tribemate would not be taken without a fight. The stranger
                  noticed this determination as well and spoke, "I cannot
                  guarantee your life, but come with us peacefully and the
                  giants will treat you fairly."
                </p>
                <p>
                  Heruj urged Glorak to comply, "At least until you are healed."
                  he whispered The stone giant picked up the unconscious
                  minotaur that had been stabilized by the goliath. Urging the
                  little folk forward, the Giant proceeded to escort them
                  towards the Storm Isles. Night would come however so the group
                  stopped and made camp to rest. The next four days of travel
                  would determine their fate.
                </p>
              </details>
              <details>
                <summary>Session #2</summary>
                <p>
                  As the group awoke from their night's rest Neuran the giant
                  ushered them forward on their journey to the storm isles. Just
                  as their trek across the land started, Heruj caught a faint
                  scent of mammoth in the vicinity. He expressed this to the
                  party so they might take caution in their travels, Neuran had
                  other plans. Having seen the little folk best a wyrm and the
                  goliaths desire to prove their worth to be greater than food
                  and slaves was struck, Neuran decided to test them further.
                  Looking at the little folks he said “I am hungry, bring me a
                  mammoth to eat and Ill remember your efforts”
                </p>
                <p>
                  Glorak was disgusted that he would be commanded to slay one of
                  his ancestors, in protest he quickly refused the giants
                  demands. The goliath took the time, attempting to open the
                  loxodons eyes to the possible outcome of gaining the giants
                  favor and what that could mean for his entire race, speaking
                  the age-old tale of the needs of the many outweigh the needs
                  of the few. Begrudgingly the loxodon agreed, Heruj used his
                  tracking abilities to allow the party to sneak up on the
                  mammoth. As they approached, they found a single massive
                  patriarch mammoth wandering the planes. Spurred on by the
                  Giant, they move in for the kill.
                </p>
                <p>
                  Heruj enchanted an arrow firing down upon the mammoth from
                  atop the hill, on contact it exploded into a flurry of thorns
                  and vines devastating the mammoth. T’zerom managed to use the
                  mammoth's agony as a perfect distraction, hastily and
                  stealthily charging the monstrous beast, landing a furious set
                  of blows. Glorak, although feeling the strain on his heart and
                  soul charged into battle, harnessing the anguish he was
                  undergoing, went into a berserker rage slamming his great axe
                  deep into the flesh of the beast. The mammoth overwhelmed by
                  the onslaught of foes inaccurately attempted to lay waste to
                  the little folk. The individuals were able to dodge nearly all
                  attacks until the mammoth nearly gored T’zerom with its giant
                  tusks. T’zerom stepped back and bowed his horns to mitigate
                  the impact, cracking, splintering and destroying the great
                  bull mammoth's tusk. Aggression filled the beast, unleashing
                  devastating blow after blow against T’zerom, leaving the
                  minotaur bloodied and battered to the brink of death. Glorak
                  bruised and sore kept pushing forward feeling the rage of his
                  ancestors’ flow through him overcoming all odds and obstacles.
                  With arrows constantly flying over head, the goliath, who had
                  been in search of what appeared to be rocks and plants, broke
                  from his task after seeing the beings he had become
                  intertwined with, in a position of significant distress.
                  leaping into action he healed the little folk before launching
                  multiple powerful attacks, raining cosmic radiant energy down
                  upon the creature. Neuran who until this point had simply been
                  an observer muttered “What is the wee giant doing, this is not
                  his fight…”. As the second burst of energy slammed into the
                  beast it became apparent to Neuran that the little giant was
                  truly filled with great powers. Speaking out to Heruj “The
                  goliath is beginning to unleash his powers” The battle waged
                  on, the mammoth was faltering, the allies were nearing death
                  as T’zerom hobbled away from the battle towards the goliath in
                  seek of aid. As the goliath looked upon the Minotaur and the
                  Loxodon breathing heavy, swaying from their wounds… he looked
                  to the Minotaur and spoke “This battle must end”. Collecting
                  all the cosmic energy, star dust and astral radiation around
                  him he powered up once again unleashing a massive radiant
                  blast down on the mammoth. Severely injured, the mammoth began
                  to wriggle in agony, Glorak raised his great axe dealing the
                  killing blow laying his injured ancestor to rest at his feet.
                </p>
                <p>
                  Enraged at his actions Glorak expressed his disdain for the
                  giant and the goliath forcing his hand to cause such an
                  atrocity. The party gathered their strength, Neuran attempted
                  to harvest some meat from the beast to no avail, the Loxodons
                  collected enough small game to feed the company and T’zerom
                  harvested a portion of hide and a section of tusk using the
                  items to honor the fallen spirit of the mammoth. Neuran seeing
                  the feast the Loxodons had procured dismissed the mammoth and
                  took his “share” of the Loxodons’ meal, now being cooked on
                  the magical bon fire conjured by the goliath. Seeing the pain
                  held on the Loxodons faces, the goliath headed to the side of
                  the mammoth collected the meat and cooked it saying, “it is
                  wasteful to leave such a beast to simply decay”. T’zerom
                  seeing this as a way to not have this creature’s death in vein
                  also took some of the butchered meat to eat, saving the small
                  game meat for another meal. After their short meal, the troupe
                  began the journey again, spurred on by the Stone Giant.
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
