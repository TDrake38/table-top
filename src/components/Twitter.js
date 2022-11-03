import React from "react";
import "./Twitter.css"; 

function TweetFeed() {
    return(
        <div class="twitterLink">
            <a
              class="twitter-timeline"
            //   data-width="800"
            //   data-height="500"
              data-theme="dark"
              href="https://twitter.com/TTR110983?ref_src=twsrc%5Etfw"
            ></a>
        </div>
    )
}

export default TweetFeed;