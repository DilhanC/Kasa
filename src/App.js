import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Lodging from "./pages/Lodging"
import AboutUs from "./pages/AboutUs"
import Error from "./pages/Error"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<Home />}>
          
        </Route>

        <Route path="/Lodging/:id">
          <Lodging />
        </Route>

        <Route path="/AboutUs">
          <AboutUs />
        </Route>

        <Route path="/*">
          <Error />
        </Route>

      </Routes>
      
    </BrowserRouter>
  )
}