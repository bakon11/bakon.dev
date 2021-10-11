import React from "react";
import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid, Button } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { lightTheme, darkTheme } from "../../themes/theme";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../LanguageMenu";
import logo from "../../assets/bakonpoollogo.png"
import "./BakonPool.css";
import Updates from "../../components/updates/Updates";
import Nav from "../../components/Nav/Nav"

const BakonPool: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <Nav />
      <hr />
      <CssBaseline />
      <div>
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
          <Grid item >
            <div style={{border: "1px solid white", padding: "15px", textAlign: "center"}}> 
              [ Pool Name: <b style={{color: "green" }}>Bakon</b> | Ticker: <b style={{color: "green" }}>BKN</b> ] <br />
              [ Pool ID: <b style={{color: "green" }}>ccd49f727e6447225c16ca0fe6abd3642d4e8e736768b11a275bfe16</b> ] <br />
              [ Margin: <b style={{color: "green" }}>3%</b> | Pledge: <b style={{color: "green" }}>15K₳</b> | Fixed Cost: <b style={{color: "green" }}>340₳</b> ]
            </div>  
          </Grid>
        </Grid>
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

export default BakonPool;
