import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDeatailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          {/* <Nav /> */}
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categorias"
                element={<ItemListContainer />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route
                path="alta-productos"
                element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>
                }
              />
            </Route>
            {/* <Route path="/admin" element={<ProductFormContainer />} /> */}
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
