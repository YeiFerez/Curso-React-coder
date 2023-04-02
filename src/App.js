import logo from "./logo.svg";
import "./App.css";


// IMPORT DEFAULT
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CounterContainer from "./components/Counter/CounterContainer";




function App() {

  let saludo = "Hola juancito como estas"
  let edad = 26

  return (
    <div className="App">
      <Navbar color="red" />
      <ItemList saludo={saludo} edad={edad} />
      <CounterContainer />
    </div>
  );
}

export default App;
