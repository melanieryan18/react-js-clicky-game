import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";

class App extends Component {
  state = {
    doggies: cards
  };

  render() {
    return (
      <div className="container">
        {/* <div className="row">
          <div className="col-md-12">
            <header>
              <p> {this.state.name}
              </p>
              <h1>{cards[0].name}</h1>
            </header>
          </div>
        </div> */}

        <div className="row">
          {this.state.doggies.map(doggie => (
            <div
              key={doggie.id}
              className="square col-md-4"
              style={{ backgroundImage: `url(${doggie.image})` }}>
              {doggie.name}
            </div>
          ))};
      </div>
      </div >

    )
  }
}
export default App;
