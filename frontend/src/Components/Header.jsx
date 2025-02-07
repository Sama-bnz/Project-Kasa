import logo from "../assets/img/LOGO.png"
import {Link, NavLink } from 'react-router-dom'
import '../styles/header.css'

export const Header = ()=>{
    return <> <header className="header">
    <img className="logo" src={logo} alt="logo"/>
        <nav className="nav-list">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
        <li><NavLink to="/apropos" className={({ isActive }) => (isActive ? 'active' : '')}>A propos</NavLink></li>
        </nav>
    </header></>
}