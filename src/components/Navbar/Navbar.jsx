
// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
import imgLogo from "../../assets/images/logoUT.jpg"
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import {Button} from "@mui/material";

const Navbar = ( {color} )=>{

    const navigate = useNavigate();

    return <div>
        <div className={styles.containerNavbar} >
        <Link to="/">
        <img className={styles.imgLogo} src={imgLogo} alt="Este es el logo de la empresa" />
        </Link>
        <div > <h1 style={{color:{color}}}>MundoTech</h1>
        <ul style={{ display: "flex", gap:"30px", listStyleType: "none", textDecoration: "none" }}>
            
        <NavLink to="/inicio" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Inicio</NavLink>
        <NavLink to="/" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Celulares</NavLink>
        <NavLink to="/category/apple" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Apple</NavLink>
        <NavLink to="/category/samsung" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Samsung</NavLink>
        <NavLink to="/category/xiaomi" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Xiaomi</NavLink>
        </ul>
        </div>
        <CartWidget />
    </div>
    <Outlet />
    </div>
}

export default Navbar