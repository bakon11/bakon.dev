import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core"; //tslint:disable-line
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
      <Nav page="template" />
      <hr />
      <div>
        <CssBaseline />        
      </div>
    </MuiThemeProvider >
  );
};

export default Template;
