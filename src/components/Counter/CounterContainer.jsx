import {useEffect, useState} from "react"
import CounterPresentation from "./CounterPresentation"

const CounterContainer = ({ stock, onAdd, initial=1 }) => {
    const [ counter , setCounter ] = useState(initial)
    const [user, setUser] = useState("")

    useEffect(()=>{
        setCounter(initial)
    }, [initial])

    const sumar = ()=>{
        counter < stock ? setCounter( counter + 1 ) : alert("stock maximo")
        
    }

    const restar = ()=>{
        if(counter > 1){
            setCounter( counter - 1 )   
        }
    };

    const quitar = ()=>{
        setUser("")
    }


  return (
    <div>
        <CounterPresentation 
        counter={counter}
        sumar={sumar}
        restar={restar}
        quitar={quitar}
        onAdd={onAdd}
        user={user}
        />
    </div>
  )
}

export default CounterContainer