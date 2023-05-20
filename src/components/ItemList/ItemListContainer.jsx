import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemList from './ItemList';
import { products } from '../../productsMock';
import useCounter from '../../utils/hooks/useCounter';
import { useParams } from 'react-router-dom';
import { PropagateLoader } from "react-spinners";
import styles from "./ItemList.module.css";
import { db } from "../../firebaseConfig";

import { getDocs, collection, query, where, addDoc } from "firebase/firestore";

const ItemListContainer = () => {

  const {counter, increment, decrement , reset} = useCounter(10)

    const [ items , setItems ] = useState([])

    const { categoryName } = useParams()

    useEffect(() => {

      let consulta;
      const itemCollection = collection(db, "products")
  
      if(categoryName){
        const itemsCollectionFiltered = query( itemCollection, where( "category", "==", categoryName ) )
        consulta = itemsCollectionFiltered
      }else{
        consulta = itemCollection
      }
  
  
      getDocs(consulta)
        .then((res) => {
          const products = res.docs.map( product => {
            return {
              ...product.data(),
              id: product.id
            }
          } )
  
          setItems(products)
        })
        .catch((err) => console.log(err));
    }, [categoryName]);

    const addProducts = ()=>{

      const productsCollection = collection(db, "products")
  
        products.map( product => (
          addDoc(productsCollection, product)
        ))
  
    }

  return (
    <div>
        {items.length === 0 ? (
        <div className={styles.loaderContainer}>
          <PropagateLoader color="#36d7b7" size={40} />
        </div>
      ) : (
        <ItemList items={items} />
      )}

      {/* <button onClick={addProducts}>Agregar productos a firebase</button> */}
    </div>
  )
};

export default ItemListContainer;