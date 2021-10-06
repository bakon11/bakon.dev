import React from "react";
import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid, Button } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { lightTheme, darkTheme } from "../themes/theme";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./LanguageMenu";
import logo from "../assets/bakonpoollogo.png"
import "./Home.css";
import Updates from "../components/updates/Updates";

const Home: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar>
          <Grid container alignContent="center" alignItems="center" justify="space-between">
            <img alt="logo" src={darkMode.value
              ? logo //tslint:disable-line
              : logo //tslint:disable-line
            } width="100" />
            <Grid item>
              <Button><Typography variant="caption">ABOUT</Typography></Button>
              
              <Button><Typography variant="caption">BLOCKCHAIN</Typography></Button>

              <Button><Typography variant="caption">DEVING</Typography></Button>

              <LanguageMenu />
              <Tooltip title={t("Toggle Dark Mode")}>
                <IconButton onClick={darkMode.toggle}>
                  {darkMode.value ? <Brightness3Icon /> : <WbSunnyIcon />}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <hr />
      <div>
        <CssBaseline />
        <Updates />
        
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
          <Typography variant="caption" style={{ position: "absolute", bottom: "10px" }}>
            <hr />
            {t("Date", { date: new Date() })}
          </Typography>
        </Grid>
      </div>
    </MuiThemeProvider >
  );
};

export default Home;
