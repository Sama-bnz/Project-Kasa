import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useParams } from "react-router-dom";
import { Collapse } from "../Components/Collapse";
import { PropertiesApiById } from "../Api/PropertiesApiById";
import { Navigate } from "react-router-dom";
import { Slider } from "../Components/Slider";
import { Star } from "../Components/Star";

const createArray = length => [...Array(length)];
const parseToInt = s => parseInt(s);
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
                {createArray(5).map((nb,i) => (
                  <Star key={i} selected={parseToInt(location?.rating) > i} />
                ))}
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
        </div>
        </main>
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/not-found" />;
  }
};
