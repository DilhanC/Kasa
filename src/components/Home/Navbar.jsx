import React from "react"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
	return (
		<nav className="navbar">
			<NavLink to="/">Accueil</NavLink>
			<NavLink to="/AboutUs">À propos</NavLink>
		</nav>
	)
}
