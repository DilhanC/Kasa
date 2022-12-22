import "../styles/Home.css"
import imgHeader from "../assets/imgHeader.jpg"
import LodgingCard from "../components/LodgingCard"
import React, { useState, useEffect, Link } from "react"


export default function Home() {

	const [data, setData] = useState([])

	useEffect(() => {
		fetch(`lodgment.json`)
		  .then(res => res.json())
		  .then(({datas})  => setData(datas))
		  .catch(err => console.log(err))
	  }, [])

	return (
	    <div>
			<div className="banner">
				<img className="bannerImg" src={imgHeader} alt="représentation de montagne"/>
				<p>Chez vous, partout et ailleurs</p>
			</div>
			<div className="listCard">
				{data.map( (el) => 
					<Link key={el.id} to={`/lodging/${el.id}`}>
						<LodgingCard 
							title={el.title} 
							cover={el.cover}
							id={el.id}
						/>
					</Link>
				)}
			</div>
	    </div> 
  )
}