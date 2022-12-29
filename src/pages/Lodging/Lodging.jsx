import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Collapse from "../../components/Collapse/Collapse"
import Gallery from "../../components/Gallery/Gallery"
import Star from "../../assets/Star.png"
import NoStar from "../../assets/Star.png"
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
	let StarsNumber = data.rating

	const maxStar = 5;
	const rating = []
  
	for (let i = 1; i < maxStar + 1; i++) {
	  if (i <= StarsNumber) {
		rating.push(<svg key={i} src={Star}></svg>)
	  } else {
		rating.push(<svg key={i} src={NoStar}></svg>)
	  }
	}

	return (
		<div className="body">
			{ data && (
				<div>
					<div>
						<div>
							{/* <Gallery /> */}
							<p>{data.title}</p>
							<p>{data.location}</p>
							{ data.tags && data.tags.length > 0 && data.tags.map((tag) =>
								<li>{tag}</li>
							)}
						</div>
						<div>
								<div>
									<p>{data.host.name}</p>
									<img src={data.host.picture} alt="personne qui loue le logement" />
								</div>
								{/* <div>
									{rating}
								</div> */}
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