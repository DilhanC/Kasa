import React from "react"
import "../styles/Home.css"
import Header from "../components/Home/Header"
import imgHeader from "../assets/imgHeader.jpg"


export default function Home() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div className="backColor">
                <img className="backgroundImg" src={imgHeader} alt="représentation de montagne"/>
                <span className="backgroundTxt">Chez vous, partout et ailleurs</span>
            </div>
        </div>
        )
    }