import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";

// IMPORT DEFAULT
import Home from "./home";
import Footer from "./Footer";


// IMPORT NOMBRE
import { Navbar } from "./Navbar";


function App() {
  return (
    <div className="App">
      <Login />
       <h1>Esto es propio de login</h1>
       <Navbar />
       <Home />
       <Footer />
    </div>
  );
}

export default App;
