import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Tooltip, Grid, Button, Link } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { lightTheme, darkTheme } from "../../themes/theme";
import { useTranslation } from "react-i18next";
import logo from "../../assets/bakonpoollogo.png"
import LanguageMenu from "../../containers/LanguageMenu";
import BlockchainMenu from "./BlockchainMenu";

const Nav: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar>
        <Grid container alignContent="center" alignItems="center" justify="space-between">
          <img alt="logo" src={darkMode.value
            ? logo //tslint:disable-line
            : logo //tslint:disable-line
          } width="100" />
          <Grid item>
            <Link underline="none" href="/home"><Button aria-controls="simple-menu">HOME</Button></Link>

            <Button aria-controls="simple-menu">ABOUT</Button>
            
            <BlockchainMenu />

            <Button aria-controls="simple-menu">DEVING</Button>

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
  );
}

export default Nav
