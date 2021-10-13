import React, { useState, useEffect } from "react";
import { Typography, CssBaseline, Grid, Link } from "@material-ui/core"; //tslint:disable-line
import "./Adapool.css";

const Adapool: React.FC = () => {

  const [ adaPoolData, setAdaPoolData ]: any = useState();
  const [ error, setError ]:any = useState();

  const loveTOada = (love: any ) => {
    const ada = Number(love / 1000000);
    return ada;
  };

  const getPoolData = async () => {
    try{
      const response = await fetch("https://js.adapools.org/pools/ccd49f727e6447225c16ca0fe6abd3642d4e8e736768b11a275bfe16/summary.json");
      const json = await response.json();
      console.log(json);
      setAdaPoolData(json);
    }catch(err) {
      setError(err);
    };
  };

  useEffect(()=>{
    getPoolData();
  }, []);

  return (
    <div>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
      <Grid item >
        <div style={{border: "1px solid white", padding: "15px", textAlign: "center"}}>
        { adaPoolData ?
        <>
          [ Pool Name: <b style={{color: "green" }}>{ adaPoolData.data.db_name }</b> | Ticker: <b style={{color: "green" }}>{adaPoolData.data.db_ticker}</b> ] <br />
          [ Pool ID: <b style={{color: "green" }}>{ adaPoolData.data.pool_id }</b> ] <br />
          [ Margin: <b style={{color: "green" }}>{ Number(adaPoolData.data.tax_ratio*100) }%</b> | 
            Pledge: <b style={{color: "green" }}>{ loveTOada(adaPoolData.data.pledge) }₳</b> | Pledged: <b style={{color: "green" }}>{ loveTOada(adaPoolData.data.pledged).toFixed(2) }₳</b> | 
            Fixed Cost: <b style={{color: "green" }}>{ loveTOada(adaPoolData.data.tax_fix) }₳</b>  
          ] <br />
          [ Delegators: <b style={{color: "green"}}>{ adaPoolData.data.delegators }</b> | Total Stake: <b style={{color: "green"}}>{ loveTOada(adaPoolData.data.total_stake).toFixed(2) }₳</b> ] 
        </>
        :
          "Loading Info ..."
        }
        </div>  
      </Grid>
    </Grid>
  </div>
  );
};

export default Adapool;
