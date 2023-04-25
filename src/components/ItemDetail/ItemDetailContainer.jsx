import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { products } from '../../productsMock'
import useCounter from '../../utils/hooks/useCounter'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    
    const {counter, increment} = useCounter(0)

    const {id} =useParams()

    useEffect(()=>{
        let encontrado = products.find( prod => prod.id === +id )
        setTimeout(()=> {
            setProduct(encontrado);
        }, 1000);
    }, [id]);

  return (
    <div>
        <ItemDetail product={product}/>

        {/* <h1>counter desde detail: {counter}</h1>
        <button onClick={increment}>Sumar el detail</button> */}
    </div>
  )
}

export default ItemDetailContainer