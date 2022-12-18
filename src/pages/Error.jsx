import React from "react"
import "../styles/Error.css"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Error() {
    return (
        <div >
            <Header />
            <div className="errorBody">
                <strong>404</strong>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d'acceuil</Link>
            </div>
            <Footer />
        </div>
    )
}