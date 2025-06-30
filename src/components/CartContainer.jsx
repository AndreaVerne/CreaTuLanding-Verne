import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartEmpty from "./CartEmpty";
import CartView from "./CartView";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return <>{cart.length ? <CartView /> : <CartEmpty />}</>;
};

export default CartContainer;
