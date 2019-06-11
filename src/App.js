import React, { Component } from "react";
import "./App.css";
import Nav from "./components/topbar/index.js";
import Jumbotron from "./components/jumbotron/index.js";
import friends from "./friends.json";
import Container from "./components/cardcontainer/index.js";
import Card from "./components/imagecard/index.js";
import Footer from "./components/footer/index.js";

class App extends Component {
  state = {
    friends,
    selectedImages: [],
    msg: "Click an Image to Begin",
    score: 0,
    topScore: 0
  };

  //findFriend function called on click of an image
  findFriend = id => {
    //find id duplicates in selectedImages array and return truthy or falsy
    const idCheck = this.state.selectedImages.find(myId => myId === id);
    //add id of user selected image to array
    this.state.selectedImages.push(id);
    //shuffle images
    this.shuffleImages(this.state.friends);
    //update top score if needed
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      });
    }
    //evaluate if the image has been previously selected
    if (idCheck) {
      this.setState({
        score: 0,
        msg: "You Lose",
        selectedImages: []
      });
      setTimeout(() => this.setState({msg: "Click an Image to Begin"}), 1000)
    } else {
      this.setState({
        score: this.state.score + 1,
        msg: "Select Another Image"
      });
    }
  };
  //function for shuffling images for user display
  shuffleImages = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  //rendering all components to display
  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.msg}
        />
        <Jumbotron />
        <Container>
          {this.state.friends.map(friend => (
            <Card
              key={friend.id}
              id={friend.id}
              image={friend.image}
              findFriend={this.findFriend}
            />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}
export default App;
