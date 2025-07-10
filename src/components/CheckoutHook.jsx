import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";
import { useForm } from "react-hook-form";

const CheckoutHook = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const finalizarCompra = (e) => {
    e.preventDefault();
    let order = {
      // comprador: buyer,
      compras: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };
    // const ventas = collection(db, "orders");
    // addDoc(ventas, order)
    //   .then((res) => {
    //     setOrderId(res.id);
    //     clearCart();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <>
      {orderId ? (
        <div>
          <h1>Realizaste la compra correctamente! 🥳 🙌🏼</h1>
          <h2>Tu número de orden es: {orderId}</h2>
        </div>
      ) : cart.length === 0 ? (
        <h1>No hay productos en el carrito</h1>
      ) : (
        <div>
          <h1>Complete sus datos</h1>
          <form onSubmit={finalizarCompra}>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Nombre"
              required
            />
            <input
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Apellido"
              required
            />
            <input
              className="form-control"
              type="text"
              name="direccion"
              placeholder="Direccion"
              required
            />
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Ingrese su email"
              required
            />
            <input
              className="form-control"
              type="email"
              name="second-email"
              placeholder="Repita su email"
              required
            />
            <input
              className="form-control"
              type="number"
              name="phone"
              placeholder="Telefono"
              required
            />
            <button className="btn btn-success" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutHook;
