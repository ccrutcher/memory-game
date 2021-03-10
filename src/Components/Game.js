import React, {useState, useEffect} from 'react'
import Header from './Header'
import Card from './Card'
import '../Styles/App.css';

const Game = () => {

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);



    return(
        <div>
            <Header currentScore={currentScore} highScore={highScore} />
            <Card />
        </div>
    )
}

export default Game;