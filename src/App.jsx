import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

//comment test
import Blank from "./components/Blank";
import Grid from "./components/Grid";
import List from "./components/List";
import Login from "./components/Login"
import Master_Detail from "./components/Master_Detail";
import Main from "./components/Main";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <Switch>
          <Redirect exact path = "/" to = "/Blank" />
          <Route path = "/Blank" component = { Blank } />
          <Route path = "/Grid" component = { Grid } />
          <Route path = "/List" component = { List } />
          <Route path = "/Master_Detail" component = { Master_Detail } />
          <Route path = "/Login" component = { Login } />
          <Route path = "/Main" component = { Main } />
        </Switch>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
