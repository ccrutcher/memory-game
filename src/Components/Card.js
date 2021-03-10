import React from 'react'

const Card = (props) => {
    return(
        <div className="card" onClick={() => props.playTurn(props.name)}>
            <img src={props.source}></img>
        </div>
    )
}

export default Card;
