import React, { Component } from "react";
import "./App.css";
import Nav from "./components/topbar/index.js";
import Jumbotron from "./components/jumbotron/index.js";
import friends from "./friends.json";
import Container from "./components/cardcontainer/index.js";
import Card from "./components/imagecard/index.js";
import Footer from "./components/footer/index.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };
  
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          {this.state.friends.map(friend => (
            <Card key={friend.id} id={friend.id} image={friend.image} />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}
export default App;
