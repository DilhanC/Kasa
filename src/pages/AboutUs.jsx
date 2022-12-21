import React from "react"
import "../styles/AboutUs.css"
import imgAboutUs from "../assets/imgAboutUs.jpg"
import Collapse from "../components/Collapse"

export default function AboutUs() {
    const info = [
        {
            title: "Fiabilité",
            text:
              "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes au logement et toutes les informations sont régulièrement vérifiées par nos équipes."
          },
          {
            title: "Respect",
            text:
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          },
          {
            title: "Service",
            text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.N'hésitez pas à nous contacter si vous avez la moindre question."
          },
          {
            title: "Sécurité",
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
    ]

    return (
      <div>
        <div className="banner">
          <img className="bannerImg" src={imgAboutUs} alt="représentation de montagne"/>
        </div>
        <div className="accordions">
          {info.map((item) =>
            <Collapse 
              title={item.title} 
              text={item.text} 
            />
          )}
        </div>
      </div>
  )
}