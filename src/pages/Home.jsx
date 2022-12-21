import "../styles/Home.css"
import imgHeader from "../assets/imgHeader.jpg"
import LodgingCard from "../components/LodgingCard"
import React, { useState, useEffect } from "react"


export default function Home() {

	const [data, setData] = useState([])

	useEffect(() => {
		fetch(`http://localhost:3000/lodgement.json`)
			 .then((res) => res.json()
			 .then(({ data }) => console.log(data))
			 .catch((error) => console.log(error))
		 )
	 }, [])

	return (
	    <div>
			<div className="banner">
				<img className="bannerImg" src={imgHeader} alt="représentation de montagne"/>
				<p>Chez vous, partout et ailleurs</p>
			</div>
			<div className="listCard">
				{data.map((item) => 
					<LodgingCard 
						title={item.title} 
						cover={item.cover}
						id={item.id}
					/>
				)}
			</div>
	    </div> 
  )
}