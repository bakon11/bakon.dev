import React from "react";
import { Typography, CssBaseline, Grid, Link } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import "./Updates.css";

const Updates: React.FC = () => {
  const darkMode = useDarkMode();

  return (
    <div>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <Grid item>
          <Typography variant="caption">
            10 Oct 2021
          </Typography>
          <div style={{border: "1px solid white", padding: "15px"}}>
            Bakon pool has launched on the Cardano blockchain. Visit our <Link href="#/bakonpool">Cardano Pool Page</Link> to find out more about it and how to become a delegator.
          </div>  
        </Grid>
        <div> 
          <hr />
        </div>
        <Grid item>
          <Typography variant="caption">
            06 Oct 2021
          </Typography>
          <div style={{border: "1px solid white", padding: "15px"}}>
            Welcome to bakon.dev, here I will keep track of projects I'm invovled with and a little bit of a blog about the dev work I do.
          </div>  
        </Grid>  
      </Grid>
    </div>
  );
};

export default Updates;
