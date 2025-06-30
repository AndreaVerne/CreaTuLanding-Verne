import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, clearCart, totalPrice, removeItem } = useContext(CartContext);

  return (
    <div className="cartView">
      <h2 className="text-center">Tu carrito 🛒</h2>
      <div>
        {/* si quieren lo pueden hacer asi tambien */}
        {cart.map((compra) => (
          <div key={compra.id} className="cartItem">
            <img src={compra.img} alt={compra.name} />
            <span>{compra.name}</span>
            <span>${compra.price},00</span>
            <span>{compra.cantidad}</span>
            <span>precio final: ${compra.price * compra.cantidad},00</span>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(compra.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <span className="total">Total a pagar: ${totalPrice()}</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          padding: "2rem",
        }}
      >
        <button className="btn btn-danger" onClick={clearCart}>
          {" "}
          Vaciar carrito
        </button>
        <Link className="btn" to="/">
          Seguir comprando
        </Link>
        <button className="btn btn-success">Terminar Compra 👌🏼</button>
      </div>
    </div>
  );
};

export default CartView;
