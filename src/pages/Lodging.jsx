import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Collapse from "../components/Collapse"
import "../styles/Lodging.css"
import Gallery from "../components/Gallery"

export default function Lodging() {

    const { id } = useParams()
    const navigate = useNavigate()
	const [data, setData] = useState([])

    useEffect(() => {
		fetch(`lodgment.json`)
		  .then((res) => res.json())
		  .then(({ datas }) => {
              const realData = datas.find((e) => e.id === id)
              setData(realData)
              return data
          })
          if (!data) {
            navigate("/404", {state: {message:"data not found"}})}
	  }, [])

    return (
        <div>
            {data.map((el) => (
                <div>
                    <div>
                        <div>
                            <Gallery />
                            <p>{el.title}</p>
                            <p>{el.location}</p>
                            {data.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </div>
                        <div>
                            {data.host.map((name, picture) => (
                                <div>
                                    <p>{name}</p>
                                    <img src={picture} alt="personne ayant loué le logement" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Collapse title="Description" text={el.description} />
                        <Collapse title="Equipements" text={el.equipments} />
                    </div>
                </div>
            ))}
        </div>
    )
}