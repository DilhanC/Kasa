import React from "react"
import "./Error.css"
import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div >
            <div className="errorBody">
                <strong>404</strong>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d'acceuil</Link>
            </div>
        </div>
    )
}