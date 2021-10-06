import React from "react";
import { Typography, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import "./Updates.css";

const Updates: React.FC = () => {
  const darkMode = useDarkMode();

  return (
      <div>
        <CssBaseline />
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column"> 
          <Grid item>
            <Typography variant="caption">
              06 Sep 2021
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
