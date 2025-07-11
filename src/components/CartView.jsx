import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, clearCart, totalPrice, removeItem } = useContext(CartContext);

  const preConfirm = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Cuidado, si eliminas el carrito no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f1b0d5",
      cancelButtonColor: "#9386ad",
      confirmButtonText: "Sí, vaciar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Eliminado correctamente",
          text: "Tu carrito se vació correctamente",
          confirmButtonColor: "#f1b0d5",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="cartView">
      <h2 className="text-center">Tu carrito 🛒</h2>
      <div>
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
      <div className="contenedor-total">
        <span className="total">Total a pagar: ${totalPrice()}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <button className="btn btn-danger margin-2" onClick={preConfirm}>
          {" "}
          Vaciar carrito
        </button>
        <Link className="btn margin-2" to="/">
          Seguir comprando
        </Link>
        <Link className="btn margin-2" to="/checkout">
          Terminar Compra 👌🏼
        </Link>
      </div>
    </div>
  );
};

export default CartView;
