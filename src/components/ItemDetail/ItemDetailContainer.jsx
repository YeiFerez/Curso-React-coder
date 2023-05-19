import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import useCounter from "../../utils/hooks/useCounter";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { counter, increment } = useCounter(0);

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    // console.log(`se agregaron al carrito ${cantidad} unidad/es del producto ${product.title}`);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Se agrego ${product.title} exitosamente `,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;

{
  /* <h1>counter desde detail: {counter}</h1>
        <button onClick={increment}>Sumar el detail</button> */
}

// useEffect(() => {
//   let encontrado = products.find((prod) => prod.id === +id);
//   setTimeout(() => {
//     setProduct(encontrado);
//   }, 200);
// }, [id]);
