import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
export function Home(){
    return <>
    <Header/>
    <main>
        <div class="image-container">
            {/* <img src="./assets/img/sea-image.png" alt="first image"> */}
            <div class="text-overlay">Chez vous, partout et ailleurs</div>
        </div>
        <div class="main-select-location">
            <div class="child-select-location">Titre de la location</div>
            <div class="child-select-location">Titre de la location</div>
            <div class="child-select-location">Titre de la location</div>
            <div class="child-select-location">Titre de la location</div>
            <div class="child-select-location">Titre de la location</div>
            <div class="child-select-location">Titre de la location</div>
        </div>
    </main>
    <Footer/>
    </>
}