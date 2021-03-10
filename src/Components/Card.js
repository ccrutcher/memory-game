import React from 'react'

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.source}></img>
        </div>
    )
}

export default Card;
