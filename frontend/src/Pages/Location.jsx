import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import carroussel from "../assets/img/Carrousel.png"
import { useParams } from 'react-router-dom'
import { Collapse } from "../Components/Collapse"
import { PropertiesApiById } from "../Api/PropertiesApiById"
export const Location = ()=>{
    const locationRouteParam = useParams();
    const location = PropertiesApiById(locationRouteParam.id);
    console.log(locationRouteParam.id);
    console.log(location);
    return <>
    <Header/>
    <main>
        <div className="property-container">
            <div className="image-section">
                <img src={carroussel} alt="Cozy Loft" className="property-image"/>
            </div>
        
            <div className="details-section">
                <div className="top-row">
                    <h1 className="property-title">Cozy loft on the Canal Saint-Martin</h1>
                    <div className="author">
                        <p className="profil">Alexandre Dumas</p>
                        <div className="author-avatar"></div>
                    </div>
                </div>
                <p className="property-location">Paris, Île-de-France</p>
            
                <div className="tags-rating">
                    <div className="tags">
                        <span className="tag">Cozy</span>
                        <span className="tag">Canal</span>
                        <span className="tag">Paris 10</span>
                    </div>
                    <div className="rating">
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>
            </div>
        
            <div className="buttons-section">
                <Collapse title="Description">
                        <p>{location.description}</p>
                </Collapse>                
                <Collapse title="Équipements">
                        <div>
                            <ul>
                                {location.equipments.map((equip, index) =>
                                    <li key={index}>{equip}</li>
                                )}
                            </ul>
                        </div>
                </Collapse>            
            </div>
        </div>

    </main>
    <Footer/>
    </>
}