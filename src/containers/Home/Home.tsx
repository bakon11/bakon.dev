import React from "react";
import { MuiThemeProvider, Typography, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../../themes/theme";
import { useTranslation } from "react-i18next";
import "./Home.css";
import Updates from "../../components/updates/Updates";
import Nav from "../../components/Nav/Nav"
import Twitter from "../../components/Twitter/Twitter";
import Adapools from "../../components/Adapool/Adapool";

const Home: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <Nav page="home" />
      <hr />
      <CssBaseline />
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <div style={{}}>
          <div style={{width: "400px", height: "500px", float: "left", padding: "10px", margin: "5px", border: "1px solid white"}}>
            <Typography><b style={{color: "green" }}>Welcome</b></Typography>
            <hr />          
            <Typography>
              Welcome to bakon.dev where you can learn about the projects I work on and support.<br /><br />
              And also learn about my staking validator pools on the Cardano, Althea(Cosmos) and Gravity Bridge blockchain networks.
            </Typography>
          </div>
          <div style={{width: "400px", height: "500px", float: "left", padding: "10px", margin: "5px", border: "1px solid white"}}>
            <Typography><b style={{color: "green" }}>Updates</b></Typography>
            <hr />
            <Updates />
          </div>
          <div style={{width: "400px", height: "500px", float: "left", padding: "10px", margin: "5px", border: "1px solid white"}}>
            <Typography><b style={{color: "green" }}>Bakon Pool Twitter</b></Typography>
            <hr />
            <Twitter user={"bakonpool"} />
          </div>
        </div>
      </Grid>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <div style={{}}>
          <div style={{minWidth: "400px", height: "300px", float: "left", padding: "10px", margin: "5px", border: "1px solid white"}}>
            <Typography><b style={{color: "green" }}>Bakon Pool Cardano</b></Typography>
            <hr />
            <Adapools />
          </div>
          <div style={{minWidth: "400px", height: "300px", float: "left", padding: "10px", margin: "5px", border: "1px solid white"}}>
            <Typography><b style={{color: "green" }}>Bakon Validator Althea</b></Typography>
            <hr />
            Coming Soon
          </div>
          <div style={{minWidth: "400px", height: "300px", float: "left", padding: "10px", margin: "5px", border: "1px solid white"}}>
            <Typography><b style={{color: "green" }}>Bakon Validator Gravity Bridge</b></Typography>
            <hr />
            Coming Soon
          </div>
        </div>
      </Grid>
    </MuiThemeProvider >
  );
};

export default Home;
