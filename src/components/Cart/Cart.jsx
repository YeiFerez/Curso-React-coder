import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, clearCartWithAlert, deleteProductById, total, navigate, totalItem }) => {
  return (
    <div className="container">
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.title}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="cart-info">

          {cart.length > 0 ? (
            <div><h2>Descripcion del carrito: </h2>
            <div>
          {cart.map((item) => {
            return (
              <div key={item.id} >
                <span >
                  - {item.title} ,    *     { item.quantity}
                </span>
              </div>
            );
          })}
            </div>  </div>
          ) : ( <h2>No hay productos en el carrito </h2> )}

          <h3>Cantidad de productos: {totalItem} </h3>
          <h3>Precio total: {total}</h3>
          
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button variant="contained" onClick={() => navigate("/checkout")}>
                Terminar la compra
              </Button>
              <Button onClick={clearCartWithAlert} variant="contained">
                Vaciar carrito
              </Button>
            </div>

          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}
          <h1>El total del carrito es ${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
