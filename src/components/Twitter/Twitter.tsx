import React, { useEffect } from "react";
import { Typography, Grid, Link } from "@material-ui/core"; //tslint:disable-line
import "./Twitter.css";

type twitterProps = {
  user: string,
};

const Twitter = ( { user }: twitterProps) => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed" style={{maxHeight: "400px", overflow: "false"}}>
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-height="400px"
          data-chrome="noheader nofooter noborders"
          href={"https://twitter.com/" + user }
        >
        </a>
      </div>
    </section>
  );
};

export default Twitter;
