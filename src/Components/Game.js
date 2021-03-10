import React, {useState, useEffect} from 'react'
import Header from './Header'
import Card from './Card'
import '../Styles/App.css';
import aphrodite from '../imgs/aphrodite.jpg'
import apollo from '../imgs/apollo.jpg'
import ares from '../imgs/ares.jpg'
import athena from '../imgs/athena.jpg'
import artemis from '../imgs/artemis.jpg'
import demeter from '../imgs/demeter.jpg'
import dionysus from '../imgs/dionysus.jpg'
import hephaestus from '../imgs/hephaestus.jpg'
import hera from '../imgs/hera.jpg'
import hermes from '../imgs/hermes.jpg'
import poseidon from '../imgs/poseidon.jpg'
import zeus from '../imgs/zeus.jpg'

const Game = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [comparisonArray, setComparisonArray] = useState([]);


    const gods = [{name: "aphrodite", image: aphrodite},{name: "apollo", image: apollo},{name: "ares", image: ares},{name: "athena", image:athena},
        {name: "artemis", image: artemis},{name: "demeter", image: demeter},{name: "dionysus", image:dionysus},{name: "hephaestus", image:hephaestus},
        {name: "hera", image: hera},{name: "hermes", image: hermes},{name: "poseidon", image: poseidon},{name: "zeus", image: zeus}];


    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    return array;
    }


    //See if card has been clicked
    const playTurn = (clickedCard) => {
        if(comparisonArray.includes(clickedCard)){
            setComparisonArray([]);
            setCurrentScore(0);
        }
        else{
            setComparisonArray([...comparisonArray, clickedCard]);
            setCurrentScore(currentScore + 1);
        }
    }

    //Check Scores
    useEffect(() => {
        if(currentScore > highScore){
            setHighScore(currentScore);
        }
    }, [currentScore])

    return(
        <div className="game-container">
            <Header currentScore={currentScore} highScore={highScore} />
            <div id="card-container">
                {shuffle(gods).map((god) => {
                    return <Card source={god.image} name={god.name} key={god.name} playTurn={(clickedCard) => {playTurn(clickedCard)}}/>
                })}
            </div>
        </div>
    )
}

export default Game;