import logo from "./logo.svg";
import "./App.css";

// IMPORT DEFAULT
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ItemDescrip from "./components/ItemDescrip/ItemDescrip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import { FormCheckoutContainer } from "./components/FormCheckout/FormCheckoutContainer";
import CartContainer from "./components/Cart/CartContainer";
import Form from "./components/Form/Form";


function App() {
  let saludo = "Bienvenido a la mejor tienda tecnologica";
  let item1 = "¿Quienes somos?";

  return (
    <BrowserRouter>
    <CartContextProvider>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/inicio" element={<ItemDescrip saludo={saludo} item1={item1} />} />
          <Route path="/cart" element={<CartContainer />}/>
          <Route path="/form" element={<Form />}/>
          <Route path="/checkout" element={<FormCheckoutContainer />}/>
          <Route path="*" element={<h1>errroooorrrrr</h1>} />
        </Route>
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
