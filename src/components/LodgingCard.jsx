import React from "react"


export default function LodgingCard(props) {

    return (
        <div className="card">
            <img src={props} alt={props} />
            <p>{props}</p>
        </div>
    )
}