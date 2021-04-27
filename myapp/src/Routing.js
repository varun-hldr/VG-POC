import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Layout from "./components";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Layout.Home} />
        <Route path="/dashboard" component={Layout.Dashboard} />
      </Router>
    );
  }
}
