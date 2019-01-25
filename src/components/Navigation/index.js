import React from 'react';

function Navigation(props) {
    return (
    <nav className="navbar">
        <ul>
            <li className="brand">
            <a href="/">Clicky Game</a>
            </li>
            <li className="">{props.result}</li>
            <li className="">Score: {props.score} | top Score: {props.topScore} </li>
        </ul>
    </nav>
)
}

export default Navigation;