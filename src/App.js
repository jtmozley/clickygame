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
    friends,
    tempFriend: friends, //everything but zero, 1
    msg: "Click an Image to Begin",
    score: 0,
    topscore: 0
  };

  findFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed

    const myFriend = this.state.tempFriend.find(myId => myId.id == id);

    //if we havea copy check if score is high score and restart game
    //if the id is not found that means we arealdy pulled it out of the tempFriends list
    if (myFriend == undefined) {
      this.setState({
        //update state to game over
        //check top score
        //if topscore<score then topscore:this.state.score
        score: 0,
        msg: "Game Over!",
        tempFriend: friends
      });
    } else {
      //if there are no new matches go ahead and update the scores msgs,
      //then we need to score the value to check the current list of friends to the oldlist
      const oldListoffriends = this.state.tempFriend.filter(
        myId => myId.id != id
      );
      this.setState({
        msg: "keep on going",
        score:  + 1,
        friends: friends,
        tempFriend: oldListoffriends
      });
      //update the state of tempFriend:oldListoffriends
    }

    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  //you will need a shuffle fx

  shuffleFriends = array => {};

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topscore}
          message={this.state.msg}
        />
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
