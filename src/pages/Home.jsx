import React from "react"
import "../styles/Home.css"
import Header from "../components/Home/Header"
import Background from "../components/Home/Background"


export default function Home() {
    return (
        <>
            <header>
                <Header />
            </header>
            <body>
                <Background />
            </body>
        </>
        )
    }