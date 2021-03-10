import React, {useState, useEffect} from 'react'
import Header from './Header'
import Card from './Card'
import '../Styles/App.css';
import aphrodite from '../imgs/aphrodite.jpeg'
import apollo from '../imgs/apollo.jpeg'
import ares from '../imgs/ares.jpeg'
import athena from '../imgs/athena.jpeg'
import artemis from '../imgs/artemis.jpeg'
import demeter from '../imgs/demeter.jpeg'
import dionysus from '../imgs/dionysus.jpeg'
import hephaestus from '../imgs/hephaestus.jpeg'
import hera from '../imgs/hera.jpeg'
import hermes from '../imgs/hermes.jpeg'
import poseidon from '../imgs/poseidon.jpeg'
import zeus from '../imgs/zeus.jpeg'

const Game = () => {

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const imgs = {}

    return(
        <div>
            <Header currentScore={currentScore} highScore={highScore} />
            <Card />
        </div>
    )
}

export default Game;