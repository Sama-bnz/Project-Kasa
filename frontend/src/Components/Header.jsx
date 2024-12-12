import logo from "../assets/img/LOGO.png"
import {Link, NavLink } from 'react-router-dom'

export const Header = ()=>{
    return <> <header className="header">
    <img src={logo} alt="logo"/>
        <nav className="nav-list">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
        <li><NavLink to="/apropos" className={({ isActive }) => (isActive ? 'active' : '')}>A propos</NavLink></li>
        </nav>
    </header></>
}