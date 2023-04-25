import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button} from "@mui/material";

const ItemDetail = ({product}) => {

  const navigate = useNavigate();

  return (
    <div>
      <img src={product.img} alt="" />
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>
        <h1 style={{color:"red"}}>Mas detalles</h1>
        <h2>{product.detalles}</h2>
        <Button variant="contained" onClick={()=> navigate("/")}>Volver al home</Button>
        
    </div>
  )
}

export default ItemDetail