import React from "react";
import "./App.css";
import BeerControl from "./Beer/BeerControl";
import "typeface-roboto";

const backgroundColor = {
  backgroundColor: "black",
  fontFamily: "Roboto, sans-serif",
};
function App() {
  return (
    <div style={backgroundColor} className="App">
      <BeerControl></BeerControl>
    </div>
  );
}

export default App;
