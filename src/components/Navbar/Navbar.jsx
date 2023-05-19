
// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
import imgLogo from "../../assets/images/logoUT.jpg"
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom"
import {Button} from "@mui/material";

import { db } from "../../firebaseConfig";
import {getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";

const Navbar = ( {color} )=>{

    const navigate = useNavigate();

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const categoriesCollection = collection( db , "categories" )
        getDocs(categoriesCollection).then(res =>{
            let categoriesResult = res.docs.map( category => {
                return{
                    ...category.data(),
                    id: category.id
                }
            })
            setCategories(categoriesResult)
        }).catch(err => console.log(err))
    }, [])

    return <div>
        <div className={styles.containerNavbar} >
        <Link to="/">
        <img className={styles.imgLogo} src={imgLogo} alt="Este es el logo de la empresa" />
        </Link>
        <div > <h1 style={{color:{color}}}>MundoTech</h1>
        <div className={styles.categories}>
          {categories.map((category) => {
            return (
              <NavLink key={category.id} to={category.path} className={({isActive}) => (isActive ? styles.active : styles.noActive)}>
                {category.title}
              </NavLink>
            );
          })}
        </div>
        </div>
        <CartWidget />
    </div>
    <Outlet />
    </div>
}

export default Navbar

{/* <ul style={{ display: "flex", gap:"30px", listStyleType: "none", textDecoration: "none" }}>
            
            <NavLink to="/inicio" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Inicio</NavLink>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Celulares</NavLink>
            <NavLink to="/category/apple" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Apple</NavLink>
            <NavLink to="/category/samsung" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Samsung</NavLink>
            <NavLink to="/category/xiaomi" className={({isActive}) => (isActive ? styles.active : styles.noActive)}>Xiaomi</NavLink>
            </ul> */}