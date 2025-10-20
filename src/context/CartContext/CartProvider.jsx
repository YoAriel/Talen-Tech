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
      alert("EL producto ya existe en el carrito");
      return;
    }

    setCart([...cart, item]);
    alert(`${item.name} agregado`);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    if (cart.length) {
      return cart.length;
    }
  };

  const values = {
    cart,
    addItem,
    clearCart,
    getTotalItems,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
