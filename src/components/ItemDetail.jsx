import React, { useContext } from "react";
import Image from "react-bootstrap/Image";
import { CartContext } from "../context/CartContext";

import ItemCount from "./ItemCount";

const ItemDetail = ({ detail }) => {
  const {cart, addItem} = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
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
      <ItemCount stock={detail.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
