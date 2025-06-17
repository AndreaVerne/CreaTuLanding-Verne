import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount";

const ItemDetail = ({ detail }) => {
  const onAdd = (cantidad)=>{
    alert(`Agregaste ${cantidad} de items`)
  }
  // const {name, price, img, id} = detail;
  return (
    <div id="itemDetail">
    <h2>Detalle del producto: {detail.name}</h2>
    <img src={detail.img} alt={detail.name}/>
    <p>{detail.description}</p>
    <p>${detail.price},00</p>
    <p>Stock disponible: {detail.stock}</p>
    <ItemCount stock={detail.stock} onAdd={onAdd}/>
</div>
  );
};

export default ItemDetail;
