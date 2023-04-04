
// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"

const Navbar = ( {color} )=>{
    return <div className={styles.containerNavbar}>
        <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2017/11/technology-banner.jpg" alt="" />
        <ul style={{display: "flex", gap:"30px"}}>
            <li >productos</li>
            <li>servicios</li>
            <li>contactos</li>
        </ul>
        <CartWidget />
    </div>
}

export default Navbar