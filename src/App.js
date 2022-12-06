import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Lodging from "./pages/Lodging"
import AboutUs from "./pages/AboutUs"
import Error from "./pages/Error"

export default function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Lodging/:id" element={<Lodging />}/>
        <Route exact path="/AboutUs" element={<AboutUs />}/>
        <Route exact path="/Error" element={<Error />}/>
      </Routes>
  )
}