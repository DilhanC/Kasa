import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Collapse from "../components/Collapse"
import Gallery from "../components/Gallery"
import "../styles/Lodging.css"

export default function Lodging() {

	const { id } = useParams()
	const navigate = useNavigate()
	const [data, setData] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/lodgment.json")
		.then(function(res) {
			if(res.ok) {
				return res.json();
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

	return (
		<div>
			{ data && (
				<div>
					<div>
						<div>
							<Gallery />
							<p>{data.title}</p>
							<p>{data.location}</p>
							{ data.tags && data.tags.length > 0 && data.tags.map((tag) =>
								<li key={tag}>{tag}</li>
							)}
						</div>
						<div>
							{ data.host && data.host.length > 0 && data.host.map((name, picture) =>
								<div>
									<p>{name}</p>
									<img src={picture} alt="personne ayant loué le logement" />
								</div>
							)}
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