import {useState} from "react"
import CounterPresentation from "./CounterPresentation"

const CounterContainer = () => {
    const [ counter , setCounter ] = useState(0)
    const [user, setUser] = useState("")

    const sumar = ()=>{
        setCounter( counter + 1 )
    }

    const restar = ()=>{
        setCounter( counter - 1 )
    }

    const sumar10 = ()=>{
        setCounter( counter + 10 )
    }

    const restar10 = ()=>{
        setCounter( counter - 10 )
    }

    const reiniciar = ()=>{
        setCounter(0)
    }

    const login = ()=>{
        setUser("pepito")
    }

    const quitar = ()=>{
        setUser("")
    }


  return (
    <div>
        <CounterPresentation 
        counter={counter}
        login={login}
        sumar={sumar}
        restar={restar}
        reiniciar={reiniciar}
        restar10={restar10}
        sumar10={sumar10}
        quitar={quitar}
        user={user}
        />
    </div>
  )
}

export default CounterContainer