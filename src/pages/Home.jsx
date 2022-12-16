import React from "react"
import "../styles/Home.css"
import Header from "../components/Header"
import imgHeader from "../assets/imgHeader.jpg"
import { cardItems } from "../assets/logements"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function Home() {
    const AppCard = () => (
        <div className="listCard">
          {cardItems.map((item) => {
            return (
              <Link key={item.id} to={`/lodging/${item.id}`}>
                <div className="card">
                  <img src={item.cover} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </Link>
            )
          })}
        </div>
      )

    return (
        <div>
            <Header />
            <div className="banner">
                <img className="bannerImg" src={imgHeader} alt="représentation de montagne"/>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <AppCard />
            <Footer />
        </div>
        )
    }