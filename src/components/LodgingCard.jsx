import React, { Link } from "react"


export default function LodgingCard(props) {

    return (
        <Link key={props.id} to={`/lodging/${props.id}`}>
            <div className="card">
                <img src={props.cover} alt={props.title} />
                <p>{props.title}</p>
            </div>
        </Link>
    )
}