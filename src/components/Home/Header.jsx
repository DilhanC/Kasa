import React from "react"
import LOGO from "../../assets/LOGO.svg"
import Navbar from "./Navbar"

export default function Header() {
    return (
        <div className="header">
            <img src={LOGO} alt="logo du site kasa" className="logo"></img>
            <Navbar />
        </div>
    )
} 