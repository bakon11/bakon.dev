import React from "react";
import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid, Button } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { lightTheme, darkTheme } from "../../themes/theme";
import { useTranslation } from "react-i18next";
import "./Home.css";
import Updates from "../../components/updates/Updates";
import Nav from "../../components/Nav/Nav"
import Twitter from "../../components/Twitter/Twitter";

const Home: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <Nav page="home" />
      <hr />
      <div style={{padding: "10px"}}>
        <CssBaseline />
        <div style={{width: "400px", float: "left", padding: "10px", margin: "5px", border: "1px solid white"}}>
          <Typography><b style={{color: "green" }}>Welcome</b></Typography>
          <hr />          
          <Typography>
            Welcome to bakon.dev where you can learn about the projects I work on and support.<br /><br />
            And also learn about my staking validator pools on the Cardano, Althea(Cosmos) and Gravity Bridge blockchain networks.
          </Typography>
        </div>
        <div style={{width: "400px", float: "left", padding: "10px", margin: "5px", border: "1px solid white"}}>
          <Typography><b style={{color: "green" }}>Updates</b></Typography>
          <hr />
          <Updates />
        </div>
        <div style={{width: "400px", float: "left", padding: "10px", margin: "5px", border: "1px solid white"}}>
          <Typography><b style={{color: "green" }}>Bakon Pool Twitter</b></Typography>
          <hr />
          <Twitter user={"bakonpool"} />
        </div>
      </div>
    </MuiThemeProvider >
  );
};

export default Home;
