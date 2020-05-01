import React from "react";
import "./App.css";
import BeerControl from "./Beer/BeerControl";
import { Header } from "./Header";
import "typeface-roboto";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BeerControl />
    </div>
  );
}

export default App;
