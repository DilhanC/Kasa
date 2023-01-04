import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Vector from "../../assets/Vector.svg"
import "./Gallery.css"

export default function Gallery() {
    const { id } = useParams()
    const [pics, setPics] = useState([])
    const [current, setCurrent] = useState(0)

    useEffect(() => {
		fetch("http://localhost:3000/lodgment.json")
		.then(function(res) {
			if(res.ok) {
				return res.json()
			}
		})
		.then(function(res) {
			const lodging = res.find((el) => el.id === id)
      const pictures = lodging.pictures
			setPics(pictures)
		})
		.catch((err) => console.log( err ))
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

    const nextPics = () => {
        setCurrent(current === pics.length - 1 ? 0 : current + 1)
    }

    const previousPics = () => {
        setCurrent(current === 0 ? pics.length - 1 : current - 1)
    }

    return (
        <div className="gallery">
            {
                pics.length > 1 && <img className="vector l" src={Vector} alt="Contenu précédent" onClick={previousPics}/>
            }
            {
                pics.map((slide, index) => (
                    <div key={index} className={current === index ? "picture actived" : "picture"}>
                        <img src={slide} alt="représentation des différentes pièces de l'appartement à louer" />
                        {index === current && (
                            <span className="slide_number">
                                {current + 1}/{pics.length}
                            </span>
                        )}
                    </div>
                ))
            }
            {
                pics.length > 1 && <img className="vector r" src={Vector} alt="Contenu suivant" onClick={nextPics}/>
            }     
        </div>
    )
}