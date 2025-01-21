import Vector_D from "../assets/img/Vector_D.png";
import Vector_G from "../assets/img/Vector_G.png"

export const Slider = ({slides}) =>{
    console.log(slides);
    return (<><div className="image-section">
                <img src={Vector_G} className="left-arrow" alt="left arrow"/>
                {slides.map((picture,index)=>{
                    return (<div className="carroussel-box"><img src={picture} className="property-image" alt="image"/> </div>)
                })}
                {/* <img
                src={carroussel}
                alt="Cozy Loft"
                className="property-image"
                /> */}
                <img src={Vector_D} className="right-arrow" alt="right-arrow" />
            </div></>)
}