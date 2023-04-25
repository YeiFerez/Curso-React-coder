import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemList from './ItemList';
import { products } from '../../productsMock';
import useCounter from '../../utils/hooks/useCounter';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  //ACA LO NUEVO

  const {counter, increment, decrement , reset} = useCounter(10)


  // ACA LO VIEJO

    const [ items , setItems ] = useState([])

    const { categoryName } = useParams()

    useEffect( ()=> {

      const productsFiltered = products.filter( prod => prod.category === categoryName)

        const tarea = new Promise((resolve, reject)=>{
            resolve( categoryName ? productsFiltered : products )
        })
    
        tarea 
        .then( (res)=> setItems(res) )
        .catch( (error)=>{console.log(error);} )

    } , [categoryName] )


  return (
    <div>
        <ItemList items={items}/>

<button onClick={increment}>Sumar list </button>
        <h1>counter desde list:{counter}</h1>
        <button onClick={decrement}>restar </button>
        <button onClick={reset}>reiniciar </button>
    </div>
  )
};

export default ItemListContainer