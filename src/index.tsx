import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import BakonPool from "./containers/BakonPool/BakonPool";

const routing = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Home">
          <Home />  
        </Route> 
        <Route path="/BakonPool">
          <BakonPool />
        </Route>
      </Switch>
    </BrowserRouter>
  )

ReactDOM.render(routing, document.getElementById("root"));
