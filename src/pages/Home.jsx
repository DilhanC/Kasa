import "../styles/Home.css"
import imgHeader from "../assets/imgHeader.jpg"
import LodgingCard from "../components/LodgingCard"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";


export default function Home() {

	const [data, setData] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/lodgment.json")
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
				<img className="bannerImg" src={imgHeader} alt="représentation de montagne"/>
				<p>Chez vous, partout et ailleurs</p>
			</div>
			<div className="listCard">
				{ data && data.length > 0 && data.map((el) =>
					<Link key={el.id} to={`/lodging/${el.id}`}>
						<LodgingCard
							title={el.title}
							cover={el.cover}
						/>
					</Link>
				)}
			</div>
		</div>
	)
}