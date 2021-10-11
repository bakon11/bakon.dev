import React from "react";
import { MuiThemeProvider, Typography, Tooltip, CssBaseline, Grid, Button } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../../themes/theme";
import { useTranslation } from "react-i18next";
import "./Template.css";
import Nav from "../../components/Nav/Nav";

const Template: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <Nav />
      <hr />
      <div>
        <CssBaseline />        
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

export default Template;
