import logo from "./logo.svg";
import "./App.css";

// IMPORT DEFAULT
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CounterContainer from "./components/Counter/CounterContainer";
import MaterialGrid from "./components/MaterialGrid/MaterialGrid";
import Login from "./components/Login/Login";

function App() {
  let saludo = "Bienvenido a la mejor tienda tecnologica";
  let item1 = "¿Quienes somos?";

  return (
    <div className="App">
      <Navbar color="red" />
      <ItemList saludo={saludo} item1={item1} />
      {/* <CounterContainer /> */}
      {/* <MaterialGrid /> */}
      <Login />
    </div>
  );
}

export default App;
