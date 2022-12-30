import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Collapse from "../../components/Collapse/Collapse"
import Gallery from "../../components/Gallery/Gallery"
import "./Lodging.css"

export default function Lodging() {

	const { id } = useParams()
	const navigate = useNavigate()
	const [data, setData] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/lodgment.json")
		.then(function(res) {
			if(res.ok) {
				return res.json()
			}
		})
		.then(function(res) {
			const lodging = res.find((el) => el.id === id)
			if(!lodging) {
				navigate("/404", { state: { message:"Data not found" }})
			}
			else {
				setData(lodging)
			}
		})
		.catch(() => navigate("/404", { state: { message: "Data not found" }}))
	}, [])

	/* Rating */
	const stars = data.rating

	const maxStar = 5;
	const rating = []
  
	for (let i = 1; i < maxStar + 1; i++) {
	  if (i <= stars) {
		rating.push(<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
					</svg>)
	  } else {
		rating.push(<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
					</svg>)
	  }
	}

	console.log(data)

	return (
		<div className="bodyy">
			{ data && (
				<div>
					<div>
						<Gallery />
						<p className="title">{data.title}</p>
						<p className="location">{data.location}</p>
						{ data.tags && data.tags.length > 0 && data.tags.map((tag) =>
							<li className="tags" key={tag}>{tag}</li>
						)}
					</div>
					<div>
							{/* <div>
								<p>{data.host.name}</p>
								<img src={data.host.picture} alt="personne qui loue le logement" />
							</div> */}
							<div className="stars">
								{rating}
							</div>
						</div>
					<div>
						<Collapse title="Description" text={data.description} />
						<Collapse title="Equipements" text={data.equipments} />
					</div>
				</div>
			)}
		</div>
	)
}