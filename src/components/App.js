import React from "react";
import "./App.css";
import BeerControl from "./Beer/BeerControl";
import { Header } from "./Header";
import "typeface-roboto";
import { history } from "../helpers/history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BeerControl />
      {/* <Router history={history}>
        <Switch>
          <Route exact path="/" component={BeerControl} />
          <Route path="beer/:id" component={BeerDetail} />
          <Route exact path="/ontap" component={BeerList} />
          <Route exact path="/new" component={NewBeerForm} />
          <Route exact path="/about" />
          <Route exact path="/community" />
          <Redirect from="*" to="/" />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
