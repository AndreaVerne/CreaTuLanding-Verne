import { createContext, useState } from "react";

//contexto
export const CartContext = createContext();
//proveedor (provider)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //funciones que modifican el estado de carrito
  const addItem = (item, cantidad) => {
    if (itemInCart(item.id)) {
      const carritoActualizado = cart.map((producto) =>
        producto.id === item.id
          ? { ...producto, cantidad: producto.cantidad + cantidad }
          : producto
      );
      setCart(carritoActualizado);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  //funcion que elimina un item del carrito
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //funcion para borrar el carrito completo
  const clearCart = () => {
    setCart([]);
  };

  //funcion para verificar si existe o no en el carrito
  const itemInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  //funcion para sumar todos los items
  const totalItems = () => {
    let total = 0;
    cart.forEach((item) => (total += item.cantidad));
    return total;
  };

  // funcion para sumar el valor total a pagar
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => (total += item.cantidad * item.price));
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        itemInCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
