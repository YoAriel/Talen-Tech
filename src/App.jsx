import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDeatailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categorias"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
