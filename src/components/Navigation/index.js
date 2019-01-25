import React from 'react';

function Navigation(props) {
    return (
        <div>
            <ul class="nav row">
                <li className="nav-item col-3">
                    <a href="/" className="nav-link">Clicky Game</a>
                </li>
                <li className="nav-item col-3">
                    <a href="/" className="nav-link">{props.result}</a>
                </li>
                <li className="nav-item col-3">
                    <a href="/" className="nav-link">Score: {props.score} | Top Score: {props.topScore}</a>
                </li>
            </ul>
            <div className="jumbotron">
                <h1 className="center display-4">Welcome to Puppy Clicker!</h1>
                <h5 className="center">Click the puppy pictures to pet the dogs. Don't pet a dog more than once, or you will loose a point. </h5>
            </div>
        </div>
    )
}

export default Navigation;