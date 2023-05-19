import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div className={styles.decoItemDetail}>
      <div>
        <div>
          <img src={product.img} alt="" />
        </div>
        {
          product.stock > 0 ? <div style={{ display: "flex", justifyContent: "center" }}>
          <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal} />
        </div> : <h2>No hay stock</h2>
        }
      </div>

      <div className={styles.decoDetail}>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Nombre:</span> {product.title}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Descripción:</span>{" "}
          {product.description}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Precio:</span> {product.price}
        </h2>
        
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/">
            <Button variant="contained">Volver al home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
