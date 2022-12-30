import React, { useState, useEffect} from "react"
import imgAboutUs from "../../assets/imgAboutUs.jpg"
import Collapse from "../../components/Collapse/Collapse"

export default function AboutUs() {

    const [data, setData] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/aboutus.json")
      .then(function(res) {
        if(res.ok) {
          return res.json()
        }
      })
      .then(function(res) {
        setData(res)
      })
      .catch(function(err) {
        console.log(err)
      })
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