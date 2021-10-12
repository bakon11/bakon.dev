import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export const lightTheme = createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: "#fff !important",
      },
    },
  },
  palette: {
    background: {
      default: "#fff",
    },
  },
});

export const darkTheme = createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  palette: {
    type: "dark",
    background: {
      default: grey[900],
      paper: grey[800],
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: "grey[900] !important",
      },
    },
    MuiTable: {
      root: {
        background: "transparent !important",
      },
    },
    MuiTypography: {
      root: {
        color: "white",
      },
    },
  },
});

export default {
  darkTheme,
  lightTheme,
};
