import React from "react";
import "./App.css";
import BeerControl from "./Beer/BeerControl";
import { Home } from "./Home/Home";
import { Header } from "./Header";
import "typeface-roboto";
import { history } from "../helpers/history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ontap" component={BeerControl} />
          <Route path="/about" />
          <Route path="/community" />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
