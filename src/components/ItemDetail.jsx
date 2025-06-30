import React, { useContext, useState } from "react";
import Image from "react-bootstrap/Image";
import { CartContext } from "../context/CartContext";

import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  const { cart, addItem } = useContext(CartContext);
  const [compra, setCompra] = useState(false);

  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setCompra(true);
  };
  console.log(cart);
  return (
    <div
      className="itemDetail"
      //no me tomó el css por eso uso estilos en línea
      style={{
        padding: "1rem 10rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Detalle del producto: {detail.name}</h2>
      <Image src={detail.img} alt={detail.name} thumbnail />
      <p>{detail.description}</p>
      <p>${detail.price},00</p>
      <p>Stock disponible: {detail.stock}</p>
      {!compra ? (
        <ItemCount stock={detail.stock} onAdd={onAdd} />
      ) : (
        <Link to="/cart" className="btn">
          Ir al carrito
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
