import React from 'react'

const Header = props => {
    return(      
    <div id="top-section">
        <div id="title">Memory</div>
        <div id="score">
            <p id="high-score">High score: {props.highScore}</p>
            <p id="current-score">Your current score: {props.currentScore} </p>
        </div>
    </div>)
}

export default Header;