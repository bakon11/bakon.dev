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

const Home: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <Nav />
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
