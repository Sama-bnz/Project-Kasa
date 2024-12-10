import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
export const NotFound = ()=>{
    return <>
    <Header/>
    <main class="error-page">
        <div class="error-container">
            <h1 class="error-code">404</h1>
            <p class="error-message">Oups ! La page que vous demandez n'existe pas</p>
            <button class="error-button">Retourner sur la page d'accueil</button>
        </div>
    </main>
    <Footer/>
    </>
}