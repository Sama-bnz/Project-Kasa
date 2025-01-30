import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
export const NotFound = ()=>{
    return <>
    <Header/>
    <main className="error-page">
        <div className="error-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oups ! La page que vous demandez n'existe pas</p>
            <button className="error-button">Retourner sur la page d'accueil</button>
        </div>
    </main>
    <Footer/>
    </>
}