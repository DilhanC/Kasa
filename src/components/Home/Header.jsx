import React from "react"
import logo from "../../assets/logo.jpg"
import Navbar from "./Navbar"
import "../../styles/Header.css"

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo du site kasa" className="logo"></img>
            <Navbar />
        </div>
    )
} 