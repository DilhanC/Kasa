import "../../styles/Header.css"
import imgHeader from "../../assets/imgHeader.jpg"

export default function Background() {
    return (
        <div className="background">
            <img className="backgroundImg" src={imgHeader} alt="représentation de montagne"/>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}