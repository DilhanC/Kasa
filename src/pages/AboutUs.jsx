import React, { useState, useEffect} from "react"
import "../styles/AboutUs.css"
import imgAboutUs from "../assets/imgAboutUs.jpg"
import Collapse from "../components/Collapse"

export default function AboutUs() {
    const [data, setData] = useState([])

    useEffect(() => {
      fetch(`src/assets/about.json`)
        .then(res => res.json())
        .then(datas  => setData(datas)) 
        .catch(err => console.log(err))
      }, [])

    return (
      <div>
        <div className="banner">
          <img className="bannerImg" src={imgAboutUs} alt="représentation de montagne"/>
        </div>
        <div className="accordions">
          {data.map((item) =>
            <Collapse 
              title={item.title} 
              text={item.text} 
            />
          )}
        </div>
      </div>
  )
}