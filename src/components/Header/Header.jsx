import React from "react"
import LOGO from "../../assets/LOGO.svg"
import { NavLink } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <NavLink to="/">
                <img src={LOGO} alt="logo du site kasa" className="logo"></img>
            </NavLink>
            <nav className="navbar">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/aboutus">À propos</NavLink>
		    </nav>
        </div>
    )
}