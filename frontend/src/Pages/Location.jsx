import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
export const Location = ()=>{
    return <>
    <Header/>
    <main>
        <div class="property-container">
            <div class="image-section">
                {/* <img src="./assets/img/Carrousel.png" alt="Cozy Loft" class="property-image"> */}
            </div>
        
            <div class="details-section">
                <div class="top-row">
                    <h1 class="property-title">Cozy loft on the Canal Saint-Martin</h1>
                    <div class="author">
                        <p class="profil">Alexandre Dumas</p>
                        <div class="author-avatar"></div>
                    </div>
                </div>
                <p class="property-location">Paris, Île-de-France</p>
            
                <div class="tags-rating">
                    <div class="tags">
                        <span class="tag">Cozy</span>
                        <span class="tag">Canal</span>
                        <span class="tag">Paris 10</span>
                    </div>
                    <div class="rating">
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                </div>
            </div>
        
            <div class="buttons-section">
                <button class="button">Description <span class="arrow">⬆</span></button>
                <button class="button">Équipements <span class="arrow">⬆</span></button>
            </div>
        </div>

    </main>
    <Footer/>
    </>
}