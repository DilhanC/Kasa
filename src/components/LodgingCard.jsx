import React from "react"


export default function LodgingCard(props) {

    return (
        <div className="card">
            <img src={props.cover} alt="représentation de l'appartement" />
            <p>{props.title}</p>
        </div>
    )
}