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

//  // Filter this.state.friends for friends with an id not equal to the id being removed
//  console.log("click worked");
//  const myFriend = this.state.tempFriend.find(myId => myId.id === id);

//  //if we havea copy check if score is high score and restart game
//  //if the id is not found that means we arealdy pulled it out of the tempFriends list
//  if (myFriend === undefined) {
//    this.setState({
//      //update state to game over
//      //check top score
//      //if topscore<score then topscore:this.state.score
//      score: 0,
//      msg: "Game Over!",
//      tempFriend: this.state.friends
//    });
//  } else {
//    //if there are no new matches go ahead and update the scores msgs,
//    //then we need to score the value to check the current list of friends to the oldlist
//    const oldListoffriends = this.state.tempFriend.filter(
//      myId => myId.id !== id
//    );
//    this.setState({
//      msg: "",
//      score: this.state.score + 1,
//      friends: this.state.friends,
//      tempFriend: oldListoffriends
//    });
//    //update the state of tempFriend:oldListoffriends
//  }

//  const friends = this.state.friends.filter(friend => friend.id !== id);
//  // Set this.state.friends equal to the new friends array
//  this.setState({ friends });
