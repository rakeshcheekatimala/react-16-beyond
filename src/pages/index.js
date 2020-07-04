import React, { Component } from "react";
// First we import some modules...
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./../App";
import AccountBalance from "./AccountBalance";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/amount" component={AccountBalance}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
