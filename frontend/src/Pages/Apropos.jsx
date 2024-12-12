import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import mountain from "../assets/img/mountain.png"
export const Apropos = ()=>{
    return <>
    <Header/>
    <main>
        <div class="image-container">
            <img src={mountain} alt="Mountain image"/>
        </div>

        <div class="dropdown-container">
            <div class="dropdown">
                <div class="dropdown-header">Fiabilité</div>
                <span class="dropdown-arrow">▲</span>
                <div class="dropdown-content">Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </div>
            </div>
            <div class="dropdown">
                <div class="dropdown-header">Respect</div>
                <span class="dropdown-arrow">▲</span>
                <div class="dropdown-content">La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</div>
            </div>
            <div class="dropdown">
                <div class="dropdown-header">Service</div>
                <span class="dropdown-arrow">▲</span>
                <div class="dropdown-content">La qualité du service est au coeur de notre engagement chez Kasa.
                    Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance
                </div>
            </div>
            <div class="dropdown">
                <div class="dropdown-header">Sécurité</div>
                <span class="dropdown-arrow">▲</span>
                <div class="dropdown-content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipe de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </div>
            </div>
        </div>
    </main>
    <Footer/>
    </>
}