


const CounterPresentation = ({sumar, counter, restar, sumar10, restar10, reiniciar, login, quitar, user}) => {

    
  return (
    <div>
        <h1>Este es el counter</h1>
        <button onClick={sumar}>Sumar</button>
        <h3>{counter}</h3>
        <button onClick={restar}>Restar</button>
        <button onClick={sumar10}>sumar 10</button>
        <button onClick={restar10}>Restar 10</button>
        <button onClick={reiniciar}>Reiniciar contador</button>
        <br />
        <button onClick={login}>Login</button>
        <button onClick={quitar}>borrar</button>
        {
            user.length > 0 ? <h2>Bienvenido {user}</h2> : <h2>Ingresa</h2>
        }
   
    </div>
  )
}

export default CounterPresentation