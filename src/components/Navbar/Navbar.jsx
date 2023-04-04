
// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
import imgLogo from "../../assets/images/logoUT.jpg"

const Navbar = ( {color} )=>{
    return <div className={styles.containerNavbar} >
        <img className={styles.imgLogo} src={imgLogo} alt="Este es el logo de la empresa" />
        <div > <h1 style={{color:{color}}}>MundoTech</h1>
        <ul style={{ display: "flex", gap:"30px", listStyleType: "none", textDecoration: "none" }}>
        <li><a href="#" className={styles.diseLista}>Inicio</a></li>
        <li><a href="#" className={styles.diseLista}>Celulares</a></li>
        <li><a href="#" className={styles.diseLista}>Portatiles</a></li>
        <li><a href="#" className={styles.diseLista}>Consolas</a></li>
        <li><a href="#" className={styles.diseLista}>Juegos</a></li>
        </ul>
        </div>
        <CartWidget />
    </div>
}

export default Navbar