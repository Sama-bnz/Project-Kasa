import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import carroussel from "../assets/img/Carrousel.png";
import { useParams } from "react-router-dom";
import { Collapse } from "../Components/Collapse";
import { PropertiesApiById } from "../Api/PropertiesApiById";
import { Navigate } from "react-router-dom";
import { Slider } from "../Components/Slider";
import Vector_G from "../assets/img/Vector_G.png";
import Vector_D from "../assets/img/Vector_D.png";

export const Location = () => {
  const locationRouteParam = useParams();
  const location = PropertiesApiById(locationRouteParam.id);
  if (location != null && location !== undefined) {
    return (
      <>
        <Header />
        <main>
          <div className="property-container">
             {location?.pictures ? <Slider slides={location?.pictures}></Slider>:null}
            <div className="details-section">
              <div className="top-row">
                <h1 className="property-title">{location?.title}</h1>
                <div className="author">
                  <p className="profil">{location?.host?.name}</p>
                  <div className="author-avatar">
                    <img
                      className="avatar"
                      src={location?.host?.picture}
                      alt={"Photo of " + location?.host?.name}
                      style={{
                        width: 64,
                        height: 64,
                      }}
                    />
                  </div>
                </div>
              </div>
              <p className="property-location">{location?.location}</p>

              <div className="tags-rating">
                <div className="tags">
                  {location?.tags?.map((tag, index) => (
                    <span className="tag" key={index}>
                      {tag}
                    </span>
                  ))}
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
                <p>{location?.description}</p>
              </Collapse>
              <Collapse title="Équipements">
                <div>
                  <ul>
                    {location?.equipments?.map((equip, index) => (
                      <li key={index}>{equip}</li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/not-found" />;
  }
};
