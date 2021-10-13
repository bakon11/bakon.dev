import React from "react";
import { MuiThemeProvider, Typography, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../../themes/theme";
import { useTranslation } from "react-i18next";
import "./BakonPool.css";
import Nav from "../../components/Nav/Nav"
import Adapools from "../../components/Adapool/Adapool";

const BakonPool: React.FC = () => {
  const darkMode = useDarkMode();
  const { t } = useTranslation();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <Nav page="cardanoPool" />
      <hr />
      <CssBaseline />
      <Adapools />
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
      <div style={{}}>
        <div style={{width: "700px", padding: "10px", border: "1px solid white"}}>
          <Typography><b style={{color: "green" }}>Welcome</b></Typography> 
            to my Cardano Stake Pool page. I started running the Bakon Pool during the ITN but have been following Cardano and its journey since early 2018.<br /><br />
            If you are looking to Stake your ADA with Bakon Stake Pool you can find instructionson how to stake with the official Daedalus wallet and Emurgo Yorio Wallet right below <br /><br />
            
            <b style={{color: "red" }}>WARNING:</b>Before you begin and I can not stress this enough. There is a lot of scams going out there in the crypto world, 
            that will try to lure you in to use their fake softrware to steal you ADA with. A lot of them do one hell of a job disguising their fake software to
            look like the official software. This is the reason why I am linking instructions to official IOHK YouTube channel on how to stake and official IOHK Daedalus Wallet Download.
            since it's a lot harder to spoof those since they are varified then lil ol me's personal youtube videos and download links.<br />
        </div>
      </div>
      </Grid>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <div style={{}}>
          <div style={{width: "400px", padding: "10px", float: "left",  border: "1px solid white", margin: "10px"}}>
            <Typography><b style={{color: "green" }}>Staking With Daedalus Wallet.</b></Typography>
            <hr />
            Stake your ADA using the Daedalus Wallet:<br />
            <a href="https://www.youtube.com/watch?v=VtkjM_0k4R0">https://www.youtube.com/watch?v=VtkjM_0k4R0</a><br /><br />
            Daedalus Wallet Official Website Download:<br />
            <a href="https://daedaluswallet.io/en/download/">https://daedaluswallet.io/en/download/</a>
          </div>
          <div style={{width: "400px", padding: "10px", float: "left", border: "1px solid white", margin: "10px"}}>
            <Typography><b style={{color: "green" }}>Staking With Yorio Wallet.</b></Typography>
            <hr />
            Yorio Wallet Official Website:<br />
            <a href="https://yoroi-wallet.com/#/">https://yoroi-wallet.com/#/</a><br /><br />
            Yorio Wallet Introduction:<br />
            <a href="https://www.youtube.com/watch?v=yYUUWOBLyLw" >https://www.youtube.com/watch?v=yYUUWOBLyLw</a>
          </div>
        </div>
      </Grid>
    </MuiThemeProvider >
  );
};

export default BakonPool;
