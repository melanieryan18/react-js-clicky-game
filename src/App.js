import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";
import Dogs from "./components/Dogs";
import Navigation from "./components/Navigation";


class App extends Component {
  state = {
    result: "",
    beenClicked: [],
    score: 0,
    topScore: 0,
    doggies: cards,
    allPups:  cards.length,
    gamesPlayed: 0
  };


  componentDidMount() {
    const newDoggies = this.shuffleArray(cards);
    this.setState({ doggies: newDoggies });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  handleclick = (id) => {
    const guessed = this.state.beenClicked.includes(id);
    if (guessed) {
      if (this.state.score > this.state.topScore) {
        this.setState({
          result: "You've clicked the same doggie twice!",
          score: 0,
          topScore: this.state.score,
          beenClicked: []
        })
      } else {
        this.setState({
          result: "You've cliked the same doggie twice!",
          score: 0,
          beenClicked: []
        })
      }
      this.shuffleArray(this.state.doggies);
    }
    else {
      if (this.state.score === (this.state.allPups - 1)) {
        this.setState({
          result: "U Win! Play with moar dogs!",
          score: 0,
          topScore: 0,
          beenClicked: []
        })
      }
        this.setState({
          result: "Correct! Pet more dogs!",
          score: this.state.score + 1,
          beenClicked: [...this.state.beenClicked, id]
        })
        this.shuffleArray(this.state.doggies);
    }
  }

  render() {
    return (
      <>
        <Navigation
          result={this.state.result}
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <header>
                <p> {this.state.name}
                </p>
                <h1>{cards[0].name}</h1>
              </header>
            </div>
          </div>

          <div className="row">
            {this.state.doggies.map(doggie => (
              <Dogs
                id={doggie.id}
                key={doggie.id}
                image={doggie.image}
                handleclick={this.handleclick}
              />
            ))};
          </div>
        </div>

      </>
    )
  }
}

export default App;
