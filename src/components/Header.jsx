import React from "react"
import LOGO from "../assets/LOGO.svg"
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <img src={LOGO} alt="logo du site kasa" className="logo"></img>
            <nav className="navbar">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/aboutus">À propos</NavLink>
		    </nav>
        </div>
    )
} 