import React from "react"
import { useState } from "react"
import Vector from "../../assets/Vector.svg"
import "./Collapse.css"

export default function Collapse(props) {
    const [active, setActive] = useState(false)

    const clicked = e => {
        setActive(!active) 
    }

    return (
        <div className={`accordion ${active && "active"}`}>
            <div className="accordion__title" onClick={clicked}>
                {props.title}
                <img src={Vector} alt="boutton" />
            </div>
            <div className="accordion__content">
                <p>{props.text}</p>
            </div>
        </div>
    )
}