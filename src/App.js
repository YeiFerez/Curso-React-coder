import logo from "./logo.svg";
import "./App.css";

// IMPORT DEFAULT
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ItemDescrip from "./components/ItemDescrip/ItemDescrip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  let saludo = "Bienvenido a la mejor tienda tecnologica";
  let item1 = "¿Quienes somos?";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/inicio" element={<ItemDescrip saludo={saludo} item1={item1} />} />
          <Route path="*" element={<h1>errroooorrrrr</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
