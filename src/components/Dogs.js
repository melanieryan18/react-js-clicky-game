import React, {Component} from 'react';

function Dog(props){
    return(
        <div style>
          {this.state.doggies.map(doggie => (
            <div
              key={doggie.id}
              className="square col-md-4"
              style={{ backgroundImage: `url(${doggie.image})` }}>
              {doggie.name}
        </div>
    )
}

export default Dog;