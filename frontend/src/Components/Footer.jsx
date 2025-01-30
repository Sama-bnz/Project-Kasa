import logo from "../assets/img/LOGO.png"
import '../styles/footer.css'

export const Footer = ()=>{
    return <><footer className="footer">
        <div className="footer-content">
            <img src={logo} className="logo-footer" alt="footer"/>
            <p className="text-footer"><i className="fa-regular fa-copyright"></i>2020 Kasa. All rights reserved</p>
        </div>
    </footer> </>
}