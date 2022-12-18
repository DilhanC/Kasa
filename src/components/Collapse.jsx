import React from "react"

export default function Collapse(props) {


return (
    <div>
        <button key={props.id} className="infoHeader">
            {props.title}
        </button>
        <div className="txt">
            {props.text}
        </div>
    </div>
)
}

