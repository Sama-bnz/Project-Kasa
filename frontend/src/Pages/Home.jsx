import { Footer } from "../Components/Footer"
import seaImage from "../assets/img/sea-image.png"
import { PropertiesApi } from "../Api/PropertiesApi";
import { Link } from 'react-router-dom'
import '../styles/home.css'
export function Home(){
    const locations = PropertiesApi();
    // console.log(locations);
    return <>
        <div className="image-container">
            <img src={seaImage} alt="first image"/>
            <div className="text-overlay">Chez vous, partout et ailleurs</div>
        </div>
        <div className="main-select-location">
        {locations.map((loc, id) => {
            return  (<Link to={`/location/${loc.id}`} key={id} className="removeUnderLine"><div className="child-select-location" ><div><img className="image-card" src={loc?.pictures[0]} alt="" /><div className="title-card">{loc.title}</div></div></div></Link>)
        })}
        </div>
    </>
}