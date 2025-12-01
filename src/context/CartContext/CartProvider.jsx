import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exist = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  const addItem = (item) => {
    if (exist(item.id)) {
      //map, cuido mutación a nivel array
      const updateCart = cart.map((prod) => {
        if (prod.id === item.id) {
          //cuido mutación a nivel objeto
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCart(updateCart);
      alert("Agregado al carrito");
      return;
    } else {
      setCart([...cart, item]);
      alert(`${item.name} agregado`);
    }
  };

  //Eliminar
  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert("Producto eliminado");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    // if (cart.length) {
    //   return cart.length;
    // }
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  };

  //calcular Total

  const total = () => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    return Math.round(total * 100) / 100;
  };

  const checkout = () => {
    const ok = confirm("Seguro que quiere finaliza la compra"); //alert con bool para que el usuario pueda aceptar o cancelar
    if (ok) {
      alert("Compra realizada con exito");
      clearCart();
    }
  };

  const values = {
    cart,
    addItem,
    deleteItem,
    clearCart,
    getTotalItems,
    total,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
