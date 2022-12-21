import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Lodging from "./pages/Lodging"
import AboutUs from "./pages/AboutUs"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
  	<div>
    	<Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/lodging/:id" element={<Lodging />}/>
        <Route exact path="/aboutus" element={<AboutUs />}/>
        <Route exact path="/*" element={<Error />}/>
      </Routes>
      <Footer />
  	</div>
  )
}