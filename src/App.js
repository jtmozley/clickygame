import React from "react";
import "./App.css";
import Nav from "./components/topbar/index.js";
import Jumbotron from "./components/jumbotron/index.js";
import friends from "./friends.json";


function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
    </div>
  );
}

export default App;
