import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";

import { useFormik } from "formik";

import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

export const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      phone: null,
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("este campo es obligatorio")
        .min(3, "el nombre debe tener al menos 3 caracteres")
        .max(10, "el nombre no puede superar los 10 caracteres"),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("este campo es obligatorio"),
      phone: Yup.number().required("este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ backgroundColor: '#2c3e50', padding: '20px', borderRadius: '10px', color: 'white', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '10px' }}>¡Gracias por tu compra!</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            El número de tu compra es <span style={{ color: 'orange' }}>{orderId}</span>. ¡Guárdalo para cualquier consulta o referencia futura!
          </p>
          <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos. ¡Estamos aquí para ayudarte!</p>
        </div>
      </div>
      
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
};
