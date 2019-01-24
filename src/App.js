import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";
import Dogs from "./components/Dogs";
import Navigation from "./components/Navigation";

class App extends Component {
  state = {
    randomId: 1,
    result: "",
    score: 0,
    topScore: 0,
    doggies: cards
  };


  // componentDidMount() {
  //   const newDoggies = shuffleArray(this.props.doggies)
  //   this.setNewRandomId(this.state.doggies);
  // }

  // shuffleArray(array) {
  //   let i = array.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }


  render() {
    return (
      <>
        <Navigation />
        <Dogs />

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
              <div
                key={doggie.id}
                className="square col-md-4"
                style={{ backgroundImage: `url(${doggie.image})` }}>
              </div>
            ))};
          </div>
        </div>

      </>
    )
  }
}
export default App;
